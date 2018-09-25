<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('email') -> unique();
            $table->string('email_personal') -> unique();
            $table->string('password');
            $table->string('image');
            $table->tinyInteger('gender');
            $table->date('date_of_birth');
            $table->integer('identify_id');
            $table->integer('phone_number');
            $table->string('current_address');
            $table->string('permanent_address');
            $table->string('graduate_from');
            $table->integer('salary');
            $table->string('bank_account_number');
            $table->text('hobby');
            $table->text('family_description');
            $table->text('language_skills');
            $table->float('leave_days');
            $table->integer('role_id');
            $table->integer('team_id');
            $table->tinyInteger('status');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
