<?php

namespace Database\Seeders;

use App\Models\Sales;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SalesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'employee_id' => '1',
                'sales' => 15000,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'employee_id' => '2',
                'sales' => 12000,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'employee_id' => '3',
                'sales' => 18000,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'employee_id' => '1',
                'sales' => 20000,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'employee_id' => '4',
                'sales' => 22000,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'employee_id' => '5',
                'sales' => 19000,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'employee_id' => '6',
                'sales' => 13000,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'employee_id' => '2',
                'sales' => 14000,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]
        ];

        Sales::truncate();
        Sales::insert($data);
    }
}
