<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\BlogResource;
use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function index(){
        $blogs = Blog::all();

        if ($blogs->isEmpty()) {
            return $this->errorResponse(404, 'No data found');
        }
        
        return $this->sendResponse(BlogResource::collection($blogs), 200, 'Blogs get successfully');
    }

    public function show(Blog $blog)
    {
        if (!$blog) {
            return $this->errorResponse(404, 'No data available');
        }
        return $this->sendResponse(new BlogResource ($blog), 200, 'Product retrieved successfully');
    }
}
