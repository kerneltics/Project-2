<?php

use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', AuthController::class.'@register');
Route::post('/login', AuthController::class.'@login');
Route::post('/logout', AuthController::class.'@logout')->middleware('auth:sanctum');

Route::get('/listings', ProductController::class.'@index');
Route::get('/featured-listing', ProductController::class.'@bestProducts');
Route::get('/listing/{id}', ProductController::class.'@show');
Route::put('/update-listing/{id}', ProductController::class.'@update')->middleware('auth:sanctum');
Route::post('/create-listing', ProductController::class.'@store')->middleware('auth:sanctum');
Route::delete('/delete-listing/{id}', ProductController::class.'@destroy')->middleware('auth:sanctum');
