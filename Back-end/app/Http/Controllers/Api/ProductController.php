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
        $products=Product::all();
        return response()->json([
            'status'=>true,
            'products'=>$products
        ],200);
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
        if($request->has('image')){
            $imageName =time().'.'.$request->image->extension();
            Storage::disk('public')->put($imageName,file_get_contents($request->image));
            $product=Product::create([
                'name' => $request->input('name'),
                'price' => $request->input('price'),
                'description' => $request->input('description'),
                'image' => $imageName,
            ]);
            return response()->json([
                'status'=>true,
                'message'=>'product Created successfuly',
                'product'=>$product
            ],201);
        }else{
            $product=Product::create([
            'name' => $request->input('name'),
            'price' => $request->input('price'),
            'description' => $request->input('description'),

            ]);
            return response()->json([
                'status'=>true,
                'message'=>'product Created successfuly',
                'product'=>$product
            ],201);

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
                'status'=>true,
                'product'=>$product
            ],200);
        } catch (\Throwable $th) {
            return response()->json([
                'status'=>false,
                'message'=>$th->getMessage()
            ],500);
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
    public function update(Request $request, $id)
    {
        try {
            if($request->has('image')){
                $imageName =time().'.'.$request->image->extension();
                Storage::disk('public')->put($imageName,file_get_contents($request->image));
                $product = Product::find($id);
                $product->update($request->all());
                $product->image = $imageName;
                $product->save();
                return response()->json([
                    'status'=>true,
                    'message'=>'product updated successfuly',
                    'product'=>$product
                ],201);
            }else{
                $product = Product::find($id);
                $product->update($request->all());
                return response()->json([
                    'status'=>true,
                    'message'=>'product updated successfuly',
                    'product'=>$product
                ],201);
            }
        } catch (\Throwable $th) {
            return response()->json([
                'status'=>false,
                'message'=>$th->getMessage()
            ],500);
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
            'status'=>true,
            'message'=>'product Delete successfuly',
        ] );
    }
}