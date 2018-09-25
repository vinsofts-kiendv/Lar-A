<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Teams;
use DB;

class TeamsController extends Controller
{
    public function index() {
    	$teams = Teams::with('users')->get();
        return response() -> json($teams, 200); 
    }
    public function show($id) {
    	$teams = Teams::find($id);
    	return response() -> json($teams);
    }
    public function store(Request $request) {
    	$req = json_decode($request -> getContent(), true);
    	$team = new Teams;
    	$team -> name = $req['name'];
    	$team -> description = $req['description'];
    	$team -> logo = $req['logo'];
    	$team -> leader_id = $req['leader_id'];
    	$team -> save();
    	return response() -> json($team, 201);
    }
    public function update(Request $request, $id) {
    	$team = Teams::find($id);
    	$req = json_decode($request -> getContent(), true);
    	$team -> name = $req['name'];
        $team -> description = $req['description'];
        $team -> logo = $req['logo'];
        $team -> leader_id = $req['leader_id'];
    	$team -> save();
    	return response() -> json($team, 200);
    }
    public function delete($id) {
    	$team = Teams::destroy($id);
    	return response() -> json(null, 204);
    }
}
