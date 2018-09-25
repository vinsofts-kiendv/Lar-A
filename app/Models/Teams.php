<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Teams extends Model
{
    protected $table = 'teams';
    protected $fillable = [
      'name', 'description', 'logo', 'leader_id'
    ];
    public function users() {
    	return $this->hasOne('App\User','id','leader_id');
    }
}
