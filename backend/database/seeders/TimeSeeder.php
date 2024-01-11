<?php

namespace Database\Seeders;

use App\Models\Time;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class TimeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $startTime = strtotime('10:00');
        $endTime = strtotime('20:00');
        $interval = 60 * 60; // 30 minutes interval

        while ($startTime <= $endTime) {
            Time::factory()->create(['time_slot' => date('H:i', $startTime)]);
            $startTime += $interval;
        }
    }
}
