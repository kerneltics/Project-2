<?php

use App\Http\Controllers\TestController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::get('/shows',[TestController::class,'index']);
Route::post('/products',[TestController::class,'store'])->name('store.products');
Route::get('/edit/{id}',[TestController::class,'edit']);
Route::put('/update/{id}',[TestController::class,'update'])->name('update.products');
Route::delete('/delete/{id}',[TestController::class,'destroy'])->name('delete.products');
