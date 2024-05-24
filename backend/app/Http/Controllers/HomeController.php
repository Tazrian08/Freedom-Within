<?php

namespace App\Http\Controllers;

use App\Models\Home;
use App\Models\Organization;
use Illuminate\Http\Request;
use App\Http\Requests\StoreHomeRequest;
use App\Http\Requests\UpdateHomeRequest;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $home=Home::all();
        $organization=Organization::all();
        return response()->json([$home[0],$organization[0]]);

    }

    public function title_change(Request $request)
    {
        $home=Home::find($request->input('id'));
        $home->update([
            'title' => $request->input('title'),
         
        ]);
        return response()->json($home);
    }


    public function homedescription_change(Request $request)
    {
        $home=Home::find($request->input('id'));
        $home->update([
            'description' => $request->input('description'),
         
        ]);
        return response()->json($home);
    }


    public function orgname_change(Request $request)
    {
        $organization=Organization::find($request->input('id'));
        $organization->update([
            'name' => $request->input('name'),
         
        ]);
        return response()->json($organization);
    }


    public function address_change(Request $request)
    {
        $organization=Organization::find($request->input('id'));
        $organization->update([
            'address' => $request->input('address'),
         
        ]);
        return response()->json($organization);
    }



    
    public function map_change(Request $request)
    {
        $organization=Organization::find($request->input('id'));
        $organization->update([
            'maplink' => $request->input('maplink'),
         
        ]);
        return response()->json($organization);
    }


    public function contact_change(Request $request)
    {
        $organization=Organization::find($request->input('id'));
        $organization->update([
            'contact' => $request->input('contact'),
         
        ]);
        return response()->json($organization);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreHomeRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Home $home)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Home $home)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateHomeRequest $request, Home $home)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Home $home)
    {
        //
    }
}
