<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Image;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Cookie;
use App\Http\Requests\UpdateUserRequest;

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
        
        $user=Auth::user();
        $contacts=Contact::where("user_id",$user->id)->get();
        $images=image::where("user_id",$user->id)->get();
        $image=$images[0];
        return response()->json(["user" => $user,"contacts"=>$contacts,"image"=>$image->path]);
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
        $therapists=User::where("therapist_status",1)
        ->with("contact")
        ->get();
        return response()->json($therapists);

    }

    public function name(Request $request)
    {
        $user=User::find($request->input('id'));
        
        $user->update(["name"=>$request->input('name')]);
        return response()->json("Success");

    }
    public function email(Request $request)
    {
        $user=User::find($request->input('id'));
        $user->update(["email"=>$request->input('email')]);
        return response()->json("Success");

    }

    public function password(Request $request)
    {
        $user=User::find($request->input('id'));
        $user->update(["password"=>Hash::make($request->input('password'))]);
        return response()->json("Success");

    }

    public function desc(Request $request)
    {
        $user=User::find($request->input('id'));
        $user->update(["description"=>$request->input('description')]);
        return response()->json("Success");

    }
    public function contact_change(Request $request)
    {
        $contact=Contact::find($request->input('id'));
        $contact->update(["contact"=>$request->input('contact')]);
        return response()->json("Success");

    }

    public function admin(Request $request)
    {
        $user=User::find($request);

        if ($user[0]->admin_access==0){
        $user[0]->update(["admin_access"=>1]);
        } else{
        $user[0]->update(["admin_access"=>0]);
        }
        return response()->json("Success");

    }

    public function search($search)
{
    if (!empty($search)) {
        $therapists = User::where('name', 'LIKE', '%' . $search . '%')
            ->orWhere('email', 'LIKE', '%' . $search . '%')
            ->orWhereHas('contact', function ($query) use ($search) {
                $query->where('contact', 'LIKE', '%' . $search . '%');
            })
            ->with('contact')
            ->get();
    } else {
        $therapists = User::with('contact')->get();
    }

    return response()->json($therapists);
}


}
