<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'phone',
        'date',
        'time',
        'therapist_id',
        'service_id',
        'message',
        'appointment_type',
        
    ];

    public function therapist(){
        return $this->belongsTo(Therapist::class);
        
    }

    public function service(){
        return $this->belongsTo(Service::class);
        
    }
}
