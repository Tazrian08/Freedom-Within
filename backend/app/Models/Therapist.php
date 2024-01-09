<?php

namespace App\Models;

use App\Models\Contact;
use App\Models\Appointment;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Therapist extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
    ];

    public function contact(){
        return $this->hasMany(Contact::class);
        
    }

    public function appointment(){
        return $this->hasMany(Appointment::class);
        
    }
}
