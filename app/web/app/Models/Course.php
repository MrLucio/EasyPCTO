<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
    */
    public $timestamps = false;

    public function businesses() {
        $this->hasMany('App\Models\Business', 'course');
    }

}
