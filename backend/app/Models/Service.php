<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        'type',
        'description',
    ];

    public function appointment(){
        return $this->hasMany(Appointment::class);
        
    }

    public function image(){
        return $this->hasOne(Image::class);
        
    }
}
