<?php

namespace App\Http\Controllers;

class BasicTestController extends Controller
{
    public $pages = 'BasicTest';
    /**
     * Display a basic test 1 assessment.
     */
    public function basicTestFirst()
    {
        return inertia('BasicTest/FirstTest/Index');
    }
    
    /**
     * Display a basic test 2 assessment.
     */
    public function basicTestSecond()
    {
        return inertia($this->pages.'/SecondTest/Index');
    }

    /**
     * Display a basic test 3 assessment.
     */
    public function basicTestThird()
    {
        return inertia($this->pages.'/ThirdTest/Index');
    }

}
