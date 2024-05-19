<?php

namespace Database\Seeders;

use App\Models\Image;
use App\Models\Service;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $service1=Service::create([
            'type' => "Individual Counseling",
            'description' => 'Individual therapy, also known as counseling or psychotherapy, is a form of treatment where a person works one-on-one with a trained therapist in a safe, caring, and confidential environment. This type of therapy aims to help individuals explore their feelings, beliefs, and behaviors, work through challenging or influential memories, identify aspects of their lives they want to change, better understand themselves and others, set personal goals, and work toward desired change. It is commonly used to address a wide range of issues, including depression, anxiety, relationship difficulties, and trauma.'
        ]);
        Image::create([
            'service_id' => $service1->id,
            'path' => 'http://localhost:8000/images/service1.jpg'
        ]);

        $service2=Service::create([
            'type' => "Couple Counseling",
            'description' => 'Couple therapy, also known as couples counseling or marriage counseling, is a type of therapy that helps couples of all types recognize and resolve conflicts and improve their relationships. Through therapy, couples can discuss issues in their relationship, improve communication skills, develop better understanding and empathy, and work towards strengthening their emotional connection. The therapist provides a neutral space for partners to express their concerns and work on strategies to enhance their relationship.'
        ]);
        Image::create([
            'service_id' => $service2->id,
            'path' => 'http://localhost:8000/images/service2.jpg'
        ]);
        $service3=Service::create([
            'type' => "Family Counseling",
            'description' => 'Family counseling, also known as family therapy, is a form of treatment designed to address specific issues affecting the health and functioning of a family. It can help family members improve communication, resolve conflicts, and understand and handle special family situations, such as death, divorce, or illness. The therapist works with the entire family or individual members, helping them to strengthen their relationships and navigate challenges together, fostering a healthier family dynamic.'
        ]);
        Image::create([
            'service_id' => $service3->id,
            'path' => 'http://localhost:8000/images/service3.jpg'
        ]);

        $service4=Service::create([
            'type' => "Group Counseling",
            'description' => 'Group counseling involves one or more therapists working with several people at the same time. This form of therapy allows participants to share their experiences and support each other in a structured setting. It provides an opportunity for individuals to learn from others facing similar issues, gain different perspectives, practice new behaviors, and develop social skills. Group counseling can be particularly effective for issues such as addiction, grief, trauma, and social anxiety, providing a sense of community and collective healing.'
        ]);
        Image::create([
            'service_id' => $service4->id,
            'path' => 'http://localhost:8000/images/service4.jpg'
        ]);
    }
}
