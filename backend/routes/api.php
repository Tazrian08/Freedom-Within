<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\TimeController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\TherapistController;
use App\Http\Controllers\AppointmentController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

#ADMIN ROUTES
Route::post("/register",[UserController::class,"register"]);
Route::post("/login",[UserController::class,"login"]);


#SERVICE ROUTES
Route::post("/create/service", [ServiceController::class,"create"]);
Route::get("/allservice",[ServiceController::class,"index"]);




#EVENT ROUTES
Route::post("/create/event", [EventController::class,"create"]);
Route::get("/allevents",[EventController::class,"index"]);
Route::delete("/delete_event/{id}",[EventController::class,"destroy"]);


#HOME ROUTES
Route::get("/allhome", [HomeController::class, "index"]);
Route::put("/title_change", [HomeController::class, "title_change"]);
Route::put("/homedescription_change", [HomeController::class, "homedescription_change"]);
Route::put("/orgname_change", [HomeController::class, "orgname_change"]);
Route::put("/address_change", [HomeController::class, "address_change"]);
Route::put("/map_change", [HomeController::class, "map_change"]);
Route::put("/orgcontact_change", [HomeController::class, "contact_change"]);

#THERAPIST ROUTES
Route::get("/alltherapist",[UserController::class,"therapist_index"]);
Route::get("/search/{searchTerm}",[UserController::class,"search"]);
Route::put("/name_change", [UserController::class, "name"]);
Route::put("/email_change", [UserController::class, "email"]);
Route::put("/password_change", [UserController::class, "password"]);
Route::put("/desc_change", [UserController::class, "desc"]);
Route::put("/contact_change", [UserController::class, "contact_change"]);
Route::put("/tog_admin", [UserController::class, "admin"]);
Route::post("/img_change", [UserController::class,"img_change"]);


#TIMESLOT ROUTES
Route::post("/timeslot",[TimeController::class,"timeslots"]);


// PATIENT ROUTES 
Route::get("/allpatient",[PatientController::class,"index"]);
Route::get("/select/{id}", [PatientController::class, "show"]);




#APPOINTMENT ROUTES
Route::post("/appointment",[AppointmentController::class,"create"]);
Route::post("/reappointment",[AppointmentController::class,"recreate"]);
Route::get("/tappt/{id}", [AppointmentController::class, "show"]);
Route::post("/tappt/search", [AppointmentController::class, "search2"]);
Route::get("/nappt/{id}", [AppointmentController::class, "show2"]);
Route::post("/nappt/search", [AppointmentController::class, "search1"]);
Route::put("/confirmation", [AppointmentController::class, "confirm"]);
Route::delete("/cancel/{id}", [AppointmentController::class, "destroy"]);
Route::put("/done", [AppointmentController::class, "done"]);
Route::get("/myappointments/{id}", [AppointmentController::class, "show3"]);
Route::get("/app_search/{search}", [AppointmentController::class, "search"]);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [UserController::class, 'user']);
    Route::post('logout', [UserController::class, 'logout']);

});
