<?php

namespace App\Http\Controllers;

use App\Models\Image;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class TestController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all();
        return view('index')->with('products', $products);
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
        $request->validate([
            'name' => 'required',
            'cover'=>'required',
            'price' => 'required',
            'description' => 'nullable',
            'number_of_rooms' => 'numeric|nullable',
            'number_of_bathrooms' => 'numeric|nullable',
            'area' => 'numeric|required',
            'city_id' => 'required',
        ]);
        if ($request->hasFile("cover")) {
            $file = $request->file("cover");
            $imageName = time() . '_' . $file->getClientOriginalName();
            $file->move(\public_path("cover/"), $imageName);

            $product = new Product([
                'name' => $request->input('name'),
                'price' => $request->input('price'),
                'description' => $request->input('description'),
                'cover' => $imageName,
                'number_of_rooms' => $request->input('number_of_rooms'),
                'number_of_bathrooms' => $request->input('number_of_bathrooms'),
                'area' => $request->input('area'),
                // 'user_id' => auth()->user()->id,
                'city_id' => $request->input('city_id'),
            ]);
            $product->save();
        }
        if ($request->hasFile("images")) {
            $files = $request->file("images");
            foreach ($files as $file) {
                $imageName = time() . '_' . $file->getClientOriginalName();
                $request['product_id'] = $product->id;
                $request['image'] = $imageName;
                $file->move(\public_path("/images"), $imageName);
                Image::create($request->all());
            }
        }
        return redirect("/");
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $products = Product::findOrFail($id);
        return view('edite')->with('products', $products);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {

        $request->validate([
            'name' => 'required',
            'cover'=>'image|nullable',
            'price' => 'required',
            'description' => 'nullable',
            'number_of_rooms' => 'numeric|nullable',
            'number_of_bathrooms' => 'numeric|nullable',
            'area' => 'numeric|required',
            'city_id' => 'required',
        ]);
        $product = Product::findOrFail($id);
        
        if ($request->hasFile("cover")) {
            if (File::exists("cover/" . $product->cover)) {
                File::delete("cover/" . $product->cover);
            }
            $file = $request->file("cover");
            $product->cover = time() . "_" . $file->getClientOriginalName();
            $file->move(\public_path("/cover"), $product->cover);
            $request['cover'] = $product->cover;
        }
            $product->update([
                'name' => $request->input('name'),
                'price' => $request->input('price'),
                'description' => $request->input('description'),
                'cover' => $request->input('cover'),
                'number_of_rooms' => $request->input('number_of_rooms'),
                'number_of_bathrooms' => $request->input('number_of_bathrooms'),
                'area' => $request->input('area'),
                'city_id' => $request->input('city_id'),
            ]);
            
        
        if ($request->hasFile("images")) {
            $files = $request->file("images");
            foreach ($files as $file) {
                $imageName = time() . '_' . $file->getClientOriginalName();
                $request['product_id'] = $product->id;
                $request['image'] = $imageName;
                $file->move(\public_path("/images"), $imageName);
                Image::create($request->all());
            }
        }
        return redirect("/");
    }
    
    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $products = Product::findOrFail($id);

        if (File::exists("cover/" . $products->cover)) {
            File::delete("cover/" . $products->cover);
        }
        $images = Image::where("product_id", $products->id)->get();
        foreach ($images as $image) {
            if (File::exists("images/" . $image->image)) {
                File::delete("images/" . $image->image);
            }
        }
        $products->delete();
        return back();
    }
}
