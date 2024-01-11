<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    use HasFactory;

    protected $fillable = [
        'patient_id',
        'date',
        'time_id',
        'user_id',
        'service_id',
        'message',
        'appointment_type',
        'confirmation',
        
    ];

    public function user(){
        return $this->belongsTo(User::class);
        
    }

    public function service(){
        return $this->belongsTo(Service::class);
        
    }

    public function time(){
        return $this->belongsTo(Time::class);
        
    }

    public function patient(){
        return $this->belongsTo(Patient::class);
        
    }
}
