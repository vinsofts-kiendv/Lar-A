<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
//        $this->call(TeamsTableSeeder::class);
        $this->call(UsersTableSeeder::class);

    }
}
class TeamsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('teams')->insert([
            array(
                'name' => 'Team 1',
                'description' => 'Lap trinh C',
                'logo' => 'a.jpg',
                'leader_id' => 1
            ),
            array(
                'name' => 'Team 2',
                'description' => 'Lap trinh C++',
                'logo' => 'a.jpg',
                'leader_id' => 1
            ),
            array(
                'name' => 'Team 3',
                'description' => 'Lap trinh JAV',
                'logo' => 'a.jpg',
                'leader_id' => 1
            ),
        ]);
    }
}
class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            array(
                'name' => 'Do Van Kien',
                'email' => 'kiendo56953@gmail.com',
                'email_personal' => 'kiendv34@vinsofts.net',
                'password' => bcrypt('123'),
                'image' => 'a.jpg',
                'gender' => 1,
                'date_of_birth' => '1995-05-06',
                'identify_id' => 123456789,
                'phone_number' => 123456789,
                'current_address' => 'Ha Noi',
                'permanent_address' => 'Ha Noi',
                'graduate_from' => 'Ha Noi',
                'salary' => 1,
                'bank_account_number' => '123456789',
                'hobby' => 'nothing',
                'family_description' => 'nothing',
                'language_skills' => 'nothing',
                'leave_days' => 1,
                'role_id' => 1,
                'team_id' => 1,
                'status' => 1
            )
        ]);
    }
}
