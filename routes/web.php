<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [PostController::class, 'index']);

Route::resource('posts', PostController::class)->except('index');

// Route::get('/', function () {
//     // return inertia('Home');

//     return Inertia::render('Home', ['name' => 'Mike']);
// });
// // Route::inertia('/', 'Home');


// Route::get('/about', function () {

//     return Inertia::render('About');
// });