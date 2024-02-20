<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all();
        return response()->json([
            'status' => true,
            'products' => $products
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
       
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

        if ($request->has('image')) {
           
                // Image handling
                $imageName = time() . '.' . $request->image->extension();
                Storage::disk('public')->put($imageName, file_get_contents($request->image));
        
                // Product creation (minimal change)
                $product = Product::create([
                    'name' => $request->input('name'),
                    'price' => $request->input('price'),
                    'description' => $request->input('description'),
                    'image' => $imageName,
                    'number_of_rooms' => $request->input('number_of_rooms'),
                    'number_of_bathrooms' => $request->input('number_of_bathrooms'),
                    'area' => $request->input('area'),
                    'city_id' => $request->input('city_id'),
                ]);
               
                return response()->json([
                    'status' => true,
                    'message' => 'Product created successfully',
                    'product' => $product,
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
                'city_id' => $request->input('city_id'),
            ]);

        
            return response()->json([
                'status' => true,
                'message' => 'Product created successfully',
                'product' => $product,
            ], 201);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        try {
            $product = Product::find($id);
            return response()->json([
                'status' => true,
                'product' => $product
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
    public function update(Request $request,Product $product)
    {
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

        $product=Product::findOrFail($product->id);
        if($request->has('image')){
            $imageName =time().'.'.$request->image->extension();
            Storage::disk('public')->put($imageName,file_get_contents($request->image));
            $product->update([
                'name' => $request->input('name'),
                'price' => $request->input('price'),
                'description' => $request->input('description'),
                'image' => $imageName,
                'number_of_rooms' => $request->input('number_of_rooms'),
                'number_of_bathrooms' => $request->input('number_of_bathrooms'),
                'area' => $request->input('area'),
                'city_id' => $request->input('city_id')
            ]);
            return response()->json([
                'status'=>true,
                'message'=>'product Created successfuly',
                'product'=>$product    
            ],201);
        }else{
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
                'product'=>$product    
            ],201);
        }

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // $product = Product::findOrFail($id);
        $product = Product::find($id);

        Storage::delete('public/' . $product->image);

        $product->delete();
        return response()->json([
            'status' => true,
            'message' => 'product Delete successfuly',
        ]);
    }
}
