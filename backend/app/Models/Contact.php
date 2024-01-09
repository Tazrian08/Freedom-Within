<?php

namespace App\Models;

use App\Models\Therapist;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Contact extends Model
{
    use HasFactory;


    protected $fillable = [
        'therapist_id',
        'contact',
    ];


    public function therapist(){
        return $this->belongsTo(Therapist::class);
        
    }
}
