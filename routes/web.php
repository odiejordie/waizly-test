<?php

use App\Http\Controllers\BasicTestController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\LendingController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect('/login');
});

Route::middleware(['auth', 'verified'])->group(function () {
    # DASHBOARD
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard.index');
});

Route::middleware('auth')->group(function () {
    # LENDING
    Route::get('/lending', [LendingController::class, 'index'])->name('lending.index');

    # BASIC TEST
    Route::get('/problem-solving-test-1', [BasicTestController::class, 'basicTestFirst'])->name('basic.1');
    Route::get('/problem-solving-test-2', [BasicTestController::class, 'basicTestSecond'])->name('basic.2');
    Route::get('/problem-solving-test-3', [BasicTestController::class, 'basicTestThird'])->name('basic.3');

    # PROFILE
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
