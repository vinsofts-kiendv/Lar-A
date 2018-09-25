<?php

namespace App\Http\Middleware;

use Closure;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Hash;

class Teams
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
         try {
            $header = $request->header('Authorization');
            if (JWTAuth::toUser($header))
                return $next($request);
        } 
        catch (JWTException $e) {
            return response() -> json(["message" => "Token_expired"]);   
        }
    }
}
