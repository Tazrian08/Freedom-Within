<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Patient;
use App\Models\Appointment;
use Illuminate\Http\Request;
use App\Http\Requests\StoreAppointmentRequest;
use App\Http\Requests\UpdateAppointmentRequest;

class AppointmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $patient = Patient::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'contact' => $request->input('contact'),
            'gender' => $request->input('gender'),
            'age' => (int)$request->input('age'),
        ]);

        $appointment = Appointment::create([
            'patient_id' => $patient->id,
            'user_id' => $request->input('user_id'),
            'service_id' => $request->input('service_id'),
            'time_id' => $request->input('time_id'),
            'appointment_type' => $request->input('apt_type'),
            'message' => $request->input('message'),
            'date' => $request->input('date'),
            'confirmation' => 0,
            'done' => 0,
        ]);

        return response()->json($appointment);
    }


    public function recreate(Request $request)
    {
        $patient = Patient::where('contact',$request->input('contact'))->get();

        if($patient->isEmpty()){
            return response()->json("Contact not found");
        }

        $appointment = Appointment::create([
            'patient_id' => $patient[0]->id,
            'user_id' => $request->input('user_id'),
            'service_id' => $request->input('service_id'),
            'time_id' => $request->input('time_id'),
            'appointment_type' => $request->input('apt_type'),
            'message' => $request->input('message'),
            'date' => $request->input('date'),
            'confirmation' => 0,
            'done' => 0,
        ]);

        return response()->json($appointment);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAppointmentRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $user_id=$id;
        $date = Carbon::now()->toDateString();
        $appointments=Appointment::where("user_id",$user_id)
        ->where('date', '>=', $date)
        ->where('confirmation',1)
        ->where('done',0)
        ->with('patient','user','time','service')
        ->get();

        return response()->json($appointments);
    }

    public function show2($id)
    {
        $user_id=$id;
        $date = Carbon::now()->toDateString();
        $appointments=Appointment::where("user_id",$user_id)
        ->where('date', '>=', $date)
        ->where('confirmation',0)
        ->with('patient','user','time','service')
        ->get();

        return response()->json($appointments);
    }

    public function show3($id)
    {
        $user_id=$id;
        $appointments=Appointment::where("user_id",$user_id)
        ->where('confirmation',1)
        ->with('patient','user','time','service')
        ->get();

        return response()->json($appointments);
    }

    public function confirm(Request $request)
    {
        $appointment=Appointment::find($request);
        $appointment[0]->update(['confirmation' => 1]);

        return response()->json("Success");
    }

    public function done(Request $request)
    {
        $appointment=Appointment::find($request);
        $appointment[0]->update(['done' => 1]);

        return response()->json("Success");
    }


    public function search($search)
{
    if (!empty($search)) {
        $appointments = Appointment::where('confirmation', 1)
            ->where('date', 'LIKE', '%' . $search . '%')
            ->orWhereHas('patient', function ($query) use ($search) {
                $query->where(function ($subQuery) use ($search) {
                    $subQuery->where('name', 'LIKE', '%' . $search . '%')
                        ->orWhere('email', 'LIKE', '%' . $search . '%')
                        ->orWhere('contact', 'LIKE', '%' . $search . '%');
                });
            })
            ->with('patient', 'user', 'time', 'service')
            ->get();
    } else {
        $appointments = Appointment::with('patient', 'user', 'time', 'service')->get();
    }

    return response()->json($appointments);
}



    public function search2(Request $request){
        $user_id=$request->input('id');
        $search=$request->input('search');
        $date = Carbon::now()->toDateString();
        $appointments=Appointment::where("user_id",$user_id)
        ->where('date', '>=', $date)
        ->where('confirmation',1)
        ->where('done',0)
        ->WhereHas('patient', function ($query) use ($search) {
            $query->where('name', 'LIKE', '%' . $search . '%')
                ->orWhere('contact', 'LIKE', '%' . $search . '%');
        })
        ->with('patient','user','time','service')
        ->get();

        return response()->json($appointments);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Appointment $appointment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAppointmentRequest $request, Appointment $appointment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Appointment $appointment)
    {
        //
    }
}
