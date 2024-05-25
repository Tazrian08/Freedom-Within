<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Image;
use Illuminate\Http\Request;
use App\Http\Requests\StoreEventRequest;
use App\Http\Requests\UpdateEventRequest;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $today = now()->toDateString();
    
        $events1 = Event::whereDate('date', '<', $today)->with("image")->get();
        $events2 = Event::whereDate('date', '>=', $today)->with("image")->get();
    
        return response()->json(['past_events' => $events1, 'future_events' => $events2]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $event=Event::create([
            'name' => $request->input('name'),
            'description' =>$request->input('description'),
            'time' =>$request->input('time'),
            'date' =>$request->input('date'),
        ]);

        $image = time() . '-' . $request->name . '.' . $request->file('image')->extension();

        $request->file('image')->move(public_path('images'), $image);
    
        $img = Image::create([
            'event_id' => $event->id,
            'path' => asset('images/' . $image)
        ]);
        return response()->json($img->path);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreEventRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Event $event)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Event $event)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEventRequest $request, Event $event)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $event=Event::find($id);
        $image=Image::where('event_id',$id)->first();
        if ($image) {
            $imagePath = public_path(str_replace(asset(''), '', $image->path));
            if (file_exists($imagePath)) {
                unlink($imagePath);
            }
            $image->delete();
        }
        $event->delete();
        return response()->json("Event Deleted");
    }
}
