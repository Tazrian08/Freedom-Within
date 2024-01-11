<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Time;
use App\Models\Appointment;
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

        $date = $request->input('date');
        $carbonDate = Carbon::parse($date);
        $day = $carbonDate->dayOfWeek;


        $user_id=$request->input('user_id');

        $appointments=Appointment::where("user_id",$user_id)
        ->where("date",$date)
        ->get();

        if ($appointments->isEmpty()) {
            if ($day == Carbon::FRIDAY || $day == Carbon::SATURDAY){

                $timeslots=Time::whereNot('time_slot','10:00')
                ->whereNot('time_slot','19:00')
                ->whereNot('time_slot','20:00')
                ->get();



            } else {

                $timeslots=TIme::all();


            }

        } else {
            if ($day == Carbon::FRIDAY || $day == Carbon::SATURDAY) {
                $existingAppointments = Appointment::where("user_id", $user_id)
                    ->where("date", $date)
                    ->where("confirmation", 0)
                    ->pluck('time_id') // Assuming time_id is the foreign key referencing the Time model
                    ->toArray();
        
                $timeslots = Time::whereNotIn('id', $existingAppointments)
                    ->whereNotIn('time_slot', ['10:00', '19:00', '20:00'])
                    ->get();
            } else {
                $existingAppointments = Appointment::where("user_id", $user_id)
                    ->where("date", $date)
                    ->where("confirmation", 0)
                    ->pluck('time_id') // Assuming time_id is the foreign key referencing the Time model
                    ->toArray();
        
                $timeslots = Time::whereNotIn('id', $existingAppointments)
                    ->get();
            }
        }

        return response()->json($timeslots);
    }
 
}
