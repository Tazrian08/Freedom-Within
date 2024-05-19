<?php

namespace Database\Seeders;

use App\Models\Home;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class HomeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $home=Home::create([
            'title' => "Wellcome to Freedom within",
            'description' => 'Freedom Within works for well-being, autonomy and empowerment. It provides systematic and scientific counseling & psychotherapy,training for promoting change in human being, relationship enhancement, create awareness and self development for better living. Goal: Promotion of autonomy through gaining awareness, spontaneity and the capacity for intimacy.'        ]);
    }
}
