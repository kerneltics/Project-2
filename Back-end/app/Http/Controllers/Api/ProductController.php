<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\City;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $products = Product::with('city')->paginate(6);
            if($products->isEmpty()) {
                return response()->json([
                    'status' => false,
                    'message' => 'No products found',
                ], 404);
            }
            return response()->json([
                'status' => true,
                'result' => $products
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    public function bestProducts(){
        try {
            // Get the last 3 products created
            $products = Product::with('city')->latest()->take(3)->get();

            if($products->isEmpty()) {
                return response()->json([
                    'status' => false,
                    'message' => 'No products found',
                ], 404);
            }

            return response()->json([
                'status' => true,
                'result' => $products
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $this->validate($request,[
                'name' => 'required',
                'image' => 'image|required',
                'price' => 'required',
                'description' => 'nullable',
                'number_of_rooms' => 'numeric|nullable',
                'number_of_bathrooms' => 'numeric|nullable',
                'area' => 'numeric|required',
                'city_id' => 'required',
            ]);

            if ($request->hasFile('image')) {

                    // Image handling
                    $imageURL = Cloudinary::upload($request->file('image')->getRealPath(), ['folder' => 'Osol'])->getSecurePath();
                    // Product creation (minimal change)
                    $product = Product::create([
                        'name' => $request->input('name'),
                        'price' => $request->input('price'),
                        'description' => $request->input('description'),
                        'image' => $imageURL,
                        'number_of_rooms' => $request->input('number_of_rooms'),
                        'number_of_bathrooms' => $request->input('number_of_bathrooms'),
                        'area' => $request->input('area'),
                        'user_id' => auth()->user()->id,
                        'city_id' => $request->input('city_id'),
                    ]);

                    return response()->json([
                        'status' => true,
                        'message' => 'Product created successfully',
                        'result' => $product,
                    ], 201);

            } else {
                // Create product without image (no significant change)
                $product = Product::create([
                    'name' => $request->input('name'),
                    'price' => $request->input('price'),
                    'description' => $request->input('description'),
                    'number_of_rooms' => $request->input('number_of_rooms'),
                    'number_of_bathrooms' => $request->input('number_of_bathrooms'),
                    'area' => $request->input('area'),
                    'user_id' => auth()->user()->id,
                    'city_id' => $request->input('city_id'),
                ]);

                return response()->json([
                    'status' => true,
                    'message' => 'Product created successfully',
                    'result' => $product,
                ], 201);
            }
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        try {
            $product = Product::with('city')->find($id);
            if(!$product) {
                return response()->json([
                    'status' => false,
                    'message' => 'product not found',
                ], 404);
            }
            return response()->json([
                'status' => true,
                'result' => $product
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,$id)
    {
        try {
            $this->validate($request,[
                'name' => 'required',
                'image' => 'image|nullable',
                'price' => 'required',
                'description' => 'nullable',
                'number_of_rooms' => 'numeric|nullable',
                'number_of_bathrooms' => 'numeric|nullable',
                'area' => 'numeric|required',
                'city_id' => 'required',
            ]);

            $product=Product::findOrFail($id);
            if ($request->user()->id !== $product->user_id) {
                return response()->json([
                    'status' => false,
                    'message' => 'Unauthorized'
                ], 401);
            }
            if($request->hasFile('image')){
                $imageURL = Cloudinary::upload($request->file('image')->getRealPath(), ['folder' => 'Osol'])->getSecurePath();

                $product->update([
                    'name' => $request->input('name'),
                    'price' => $request->input('price'),
                    'description' => $request->input('description'),
                    'image' => $imageURL,
                    'number_of_rooms' => $request->input('number_of_rooms'),
                    'number_of_bathrooms' => $request->input('number_of_bathrooms'),
                    'area' => $request->input('area'),
                    'city_id' => $request->input('city_id')
                ]);
                return response()->json([
                    'status'=>true,
                    'message'=>'product Created successfuly',
                    'result'=>$product
                ],201);
            } else {
                $product->update([
                'name' => $request->input('name'),
                'price' => $request->input('price'),
                'description' => $request->input('description'),
                'number_of_rooms' => $request->input('number_of_rooms'),
                'number_of_bathrooms' => $request->input('number_of_bathrooms'),
                'area' => $request->input('area'),
                'city_id' => $request->input('city_id')
                ]);

                return response()->json([
                    'status'=>true,
                    'message'=>'product Updated successfuly',
                    'result'=>$product
                ],201);
            }
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            $product = Product::find($id);
            if ($product && $product->user_id == auth()->user()->id) {
                Storage::delete('public/' . $product->image);

                $product->delete();
                return response()->json([
                    'status' => true,
                    'message' => 'product Delete successfuly',
                ]);
            } else {
                return response()->json([
                    'status' => false,
                    'message' => 'product not found',
                ]);
            }
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }
}
