<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\TherapistController;

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


#THERAPIST ROUTES
Route::get("/alltherapist",[UserController::class,"therapist_index"]);

#TIMESLOT ROUTES
Route::get("/timeslot",[TimeController::class,"timeslots"]);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [UserController::class, 'user']);
    Route::post('logout', [UserController::class, 'logout']);

});
