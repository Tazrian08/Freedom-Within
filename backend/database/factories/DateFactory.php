<?php

namespace Database\Factories;

use App\Models\Date;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Date>
 */
class DateFactory extends Factory
{
    protected $model = Date::class;

    public function definition()
    {
        // Generate a date within the next 50 years
        $date = $this->faker->dateTimeBetween('now', '+5 years')->format('Y-m-d');

        return [
            'date' => $date,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
