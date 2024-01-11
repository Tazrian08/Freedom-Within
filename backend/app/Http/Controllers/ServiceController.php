<?php

namespace App\Http\Controllers;

use App\Models\Image;
use App\Models\Service;
use Illuminate\Http\Request;
use App\Http\Requests\StoreServiceRequest;
use App\Http\Requests\UpdateServiceRequest;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $services = Service::all();

        return response()->json($services);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $service=Service::create([
            'type' => $request->input('type'),
            'description' =>$request->input('description')
        ]);

        $image = time() . '-' . $request->name . '.' . $request->file('image')->extension();

        $request->file('image')->move(public_path('images'), $image);
    
        $img = Image::create([
            'service_id' => $service->id,
            'path' => asset('images/' . $image)
        ]);
        return response()->json($img->path);

    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreServiceRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Service $service)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Service $service)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateServiceRequest $request, Service $service)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Service $service)
    {
        //
    }
}
