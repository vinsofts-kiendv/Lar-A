<?php

namespace App\Http\Controllers;
use Mail;
use Illuminate\Http\Request;

class MailController extends Controller
{
    public function send() {

	      Mail::send('mail',[],function($msg){
	      	$msg->from('kien97841@gmail.com','VINSOFTS');
	        $msg->to('kiendv@vinsofts.net','Admin')->subject('Tieu De');
	      });
    }
}
