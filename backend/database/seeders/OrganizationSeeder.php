<?php

namespace Database\Seeders;

use App\Models\Organization;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class OrganizationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $organization=Organization::create([
            'name' => "Freedom Within",
            'address' => '13, 14 Salimullah Rd, Dhaka 1207',
            'maplink'=>"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17371.611131759113!2d90.36003689175185!3d23.749831598541363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf98a52b8b4f%3A0x3a470a7da7563907!2sFreedom%20Within!5e0!3m2!1sen!2sbd!4v1716110030074!5m2!1sen!2sbd",
            'contact'=>'01931-397333'
        ]);
    }
}


