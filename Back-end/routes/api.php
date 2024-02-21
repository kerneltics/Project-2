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

Route::get('/products', ProductController::class.'@index');
Route::get('/bestProducts', ProductController::class.'@bestProducts');
Route::get('/product/{id}', ProductController::class.'@show');
Route::put('/updateProduct/{id}', ProductController::class.'@update')->middleware('auth:sanctum');
Route::post('/createProduct', ProductController::class.'@store')->middleware('auth:sanctum');
Route::delete('/deleteProduct/{id}', ProductController::class.'@destroy')->middleware('auth:sanctum');
