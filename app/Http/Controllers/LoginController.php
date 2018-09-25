<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use JWTAuth;
use JWTAuthException;
use Tymon\JWTAuth\Exceptions\JWTException;
use Hash;

class LoginController extends Controller
{
    private $user;

    public function __construct(User $user){
        $this->user = $user;
    }

    public function login(Request $request){
        $credentials = json_decode($request->getContent(), true);
        $token = null;
        try {
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json(['invalid_email_or_password'], 422);
            }
        } catch (JWTAuthException $e) {
            return response()->json(['failed_to_create_token'], 500);
        }
        return response()->json(compact('token'));
    }
    public function checkToken(Request $request) {
        try {
            $header = $request->header('Authorization');
            if (JWTAuth::toUser($header))
                return response() -> json(["message" => "ok"]);
            
        } 
        catch (JWTException $e) {
            return response() -> json(["message" => "Token_expired"]);   
        }
    }
    public function getUserInfo(Request $request){
        $user = JWTAuth::toUser($request->token);
        return response()->json(['result' => $user]);
    }
    public function getRole(Request $request) {
        $user = JWTAuth::toUser($request->token);
        $role = $user['role_id'];
        return response() -> json(['role' => $role]);
    }
}
