<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'price',
        'description',
        'cover',
        'number_of_rooms',
        'number_of_bathrooms',
        'area',
        'user_id',
        'city_id'
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function city()
    {
        return $this->belongsTo(City::class);
    }

    public function images(){
        return $this->hasMany(Image::class);
    }
}
