<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LendingController extends Controller
{
    public function index() {
        return inertia('Lending/Index');
    }
}
