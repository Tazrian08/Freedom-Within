<?php

namespace App\Http\Controllers;

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
    public function show(Appointment $appointment)
    {
        //
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
