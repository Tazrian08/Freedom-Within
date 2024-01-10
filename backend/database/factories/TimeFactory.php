<?php

namespace Database\Factories;

use App\Models\Time;
use App\Models\Date;
use Illuminate\Database\Eloquent\Factories\Factory;

class TimeFactory extends Factory
{
    protected $model = Time::class;

    public function definition()
    {
        // Define time slots from 7am to 10pm (15 slots)
        $timeSlots = [
            '07:00:00', '08:00:00', '09:00:00', '10:00:00', '11:00:00',
            '12:00:00', '13:00:00', '14:00:00', '15:00:00', '16:00:00',
            '17:00:00', '18:00:00', '19:00:00', '20:00:00', '21:00:00',
        ];

        $dates = Date::all();

        $timeSlotsData = [];

        foreach ($dates as $date) {
            foreach ($timeSlots as $time) {
                $timeSlotsData[] = [
                    'date_id' => $date->id,
                    'time' => $time,
                    'book_status' => 0,
                    'created_at' => now(),
                    'updated_at' => now(),
                ];
            }
        }

        return $timeSlotsData;
    }
}
