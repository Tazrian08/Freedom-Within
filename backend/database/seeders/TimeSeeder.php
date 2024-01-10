<?php

namespace Database\Seeders;

use App\Models\Time;
use Illuminate\Database\Seeder;

class TimeSeeder extends Seeder
{
    public function run()
    {
        // Clear existing data to avoid duplicates

        // Use the TimeFactory to create and insert time slot data
        \App\Models\Time::factory(15)->create();
    }
}
