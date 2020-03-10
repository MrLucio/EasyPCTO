<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
    */
    public $timestamps = false;


    /**
     * The model's default values for attributes.
     *
     * @var array
    */
    protected $attributes = [
        'cap' => null,
        'city' => null,
    ];

    public function city() {
        $this->belongsTo('App\Models\City', 'city');
    }

    public function businesses() {
        $this->hasMany('App\Models\Business', 'address');
    }

}
