<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;

    protected $fillable = [
        'path',
        'service_id',
        'event_id',
    ];


    public function service(){
        return $this->belongsTo(Service::class);
        
    }

    public function event(){
        return $this->belongsTo(Event::class);
        
    }
}
