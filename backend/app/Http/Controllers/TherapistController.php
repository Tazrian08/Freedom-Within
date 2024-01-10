<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\Therapist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\StoreTherapistRequest;
use App\Http\Requests\UpdateTherapistRequest;

class TherapistController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $therapists = Therapist::all();

        return response()->json($therapists);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $password="12345678";
        $therapist=Therapist::create([
            'name' => $request->input('name'),
            'email' =>$request->input('email'),
            'password' => Hash::make($password)
        ]);

       foreach($request->input('contacts') as $cnt){
        $contact=Contact::create([
            'therapist_id' => $therapist->id,
            'contact' =>$cnt
        ]);
       }
    
       return response()->json("Successful");

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTherapistRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Therapist $therapist)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Therapist $therapist)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTherapistRequest $request, Therapist $therapist)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Therapist $therapist)
    {
        //
    }
}
