<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Image;
use App\Models\Contact;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class TherapistSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create a new user
        $user = User::create([
            'name' => 'Dr. Nasima Akter',
            'email' => 'msnasimaakter207@gmail.com',
            'password' => Hash::make('123456789'), // Hashed password
            'therapist_status' => 1,
            'admin_access' => 1,
            'description' => 'Counselor, Psychotherapist and Trainer. Founder and managing director, Freedom Within'
        ]);

        // Create the contacts for the user
        Contact::create([
            'user_id' => $user->id,
            'contact' => '01911258616'
        ]);

        Contact::create([
            'user_id' => $user->id,
            'contact' => '01774727059'
        ]);
        Image::create([
            'user_id' => $user->id,
            'path' => 'http://localhost:8000/images/nasima'
        ]);
    }

}
