<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Business extends Model
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
        'phone' => null,
        'email' => null,
        'website' => null,
        'employees_number' => null,
        'course' => null,
        'ateco_code' => null,
        'agreement_date' => null,
    ];

    public function ateco() {
        $this->belongsTo('App\Models\Ateco', 'ateco');
    }

    public function address() {
        $this->belongsTo('App\Models\Address', 'address');
    }

    public function course() {
        $this->belongsTo('App\Models\Course', 'course');
    }

    public function type() {
        $this->belongsTo('App\Models\Type', 'type');
    }

}
