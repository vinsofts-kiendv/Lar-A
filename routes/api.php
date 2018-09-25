<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:  POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: *');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('auth/register', 'LoginController@register');
Route::group(['middleware' => 'jwt.auth'], function () {
    Route::get('user-info', 'LoginController@getUserInfo');
    Route::get('checkRole', 'LoginController@getRole');
});

Route::post('login', 'LoginController@login');
Route::get('checkToken', 'LoginController@checkToken');

Route::group(['middleware' => 'teams.auth'], function() {
	Route::get('teams', 'TeamsController@index');
	Route::get('teams/{id}', 'TeamsController@show');
	Route::post('teams', 'TeamsController@store');
	Route::put('teams/{id}', 'TeamsController@update');
	Route::delete('teams/{id}', 'TeamsController@delete');
	Route::get('users','UsersController@index');
});
