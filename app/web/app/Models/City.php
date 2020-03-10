<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
    */
    public $timestamps = false;


    public function country() {
        $this->belongsTo('App\Models\Country', 'country');
    }

    public function addresses() {
        $this->hasMany('App\Models\Address');
    }

}
