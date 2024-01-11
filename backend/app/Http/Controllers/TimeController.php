<?php

namespace App\Http\Controllers;

use App\Models\Time;
use Illuminate\Http\Request;
use App\Http\Requests\StoreTimeRequest;
use App\Http\Requests\UpdateTimeRequest;

class TimeController extends Controller
{
    /**
     * Display a listing of the resource.
     */


    public function timeslots(Request $request)
    {
        $user_id=$request->input('user_id');
        $date=$request->input('date');

        $appointment=Appointment::where("user_id",$user_id)
        ->where("date",$date)
        ->get();

        if ($appointment->isEmpty()) {

        } else {

        }

    }
 
}
