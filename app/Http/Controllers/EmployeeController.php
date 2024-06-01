<?php

namespace App\Http\Controllers;

use App\Http\Resources\EmployeeResource;
use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         return EmployeeResource::collection(Employee::all());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $employee = Employee::create($request->all());
        return new EmployeeResource($employee);
    }

    /**
     * Display the specified resource.
     */
    public function show(Employee $employee)
    {
        dd($employee->toArray());
        return new EmployeeResource($employee);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Employee $employee)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Employee $employee)
    {
        $employee->name = $request->name;
        $employee->job_title = $request->job_title;
        $employee->salary = $request->salary;
        $employee->department = $request->department;
        $employee->join_date = $request->join_date;
        $employee->created_at = $request->created_a;
        $employee->save();

        return new EmployeeResource($employee);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Employee $employee)
    {
        $employee->delete();

        return response()->json(["data" => '', "messagge" => "Deleted"], 200);
    }
}
