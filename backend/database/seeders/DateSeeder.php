<?php

namespace Database\Seeders;

use App\Models\Date;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DateSeeder extends Seeder
{
    public function run()
    {
        // Disable model events during the seeding process
        Date::withoutEvents(function () {
            // Generate and insert dates into the database
            $startDate = now();
            $endDate = now()->addYears(50)->subDay(); // January 10th, 2074

            $dates = $this->generateDatesInRange($startDate, $endDate);

            // Chunk the dates to insert them in smaller groups for better performance
            collect($dates)->chunk(500)->each(function ($chunk) {
                Date::insert($chunk->toArray());
            });
        });
    }

    private function generateDatesInRange($startDate, $endDate)
    {
        $dates = collect();

        while ($startDate <= $endDate) {
            $dates->push([
                'date' => $startDate->format('Y-m-d'),
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            $startDate->addDay();
        }

        return $dates;
    }
}
