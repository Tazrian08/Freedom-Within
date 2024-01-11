<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Image;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Cookie;

class UserController extends Controller
{
    public function register(Request $request){
        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'description' => $request->input('description'),
            'therapist_status' => (int)$request->input('therapist_status'),
            'admin_access' => (int)$request->input('admin_access'),
            'password' => Hash::make($request->input('password'))
        ]);
    
        // Decode the JSON string to an array for 'contacts'
        $contacts = json_decode($request->input('contacts'), true);
    
        foreach ($contacts as $cnt) {
            $contact = Contact::create([
                'user_id' => $user->id,
                'contact' => $cnt
            ]);
        }
    
        $image = time() . '-' . $request->file('image')->extension();
        $request->file('image')->move(public_path('images'), $image);
    
        $img = Image::create([
            'user_id' => $user->id,
            'path' => asset('images/' . $image)
        ]);
    
        return response()->json($img->path);
    }

    public function login(Request $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json("Login Failed");
        }

        $user = Auth::user();

        $token = $user->createToken('token')->plainTextToken;

        $cookie = cookie('jwt', $token, 60 * 24); // 1 day

        return response([
            'message' => $token
        ])->withCookie($cookie);
    }

    public function user()
    {  
        return response()->json(Auth::user());
    }

    public function logout()
    {
        $cookie = Cookie::forget('jwt');

        return response([
            'message' => 'Success'
        ])->withCookie($cookie);
    }

    public function therapist_index()
    {
        $therapists=User::where("therapist_status",1)->get();
        return response()->json($therapists);

    }
}
