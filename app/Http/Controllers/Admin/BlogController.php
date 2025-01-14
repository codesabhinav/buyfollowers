<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Traits\MediaUpload;
use App\Models\Blog;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class BlogController extends Controller
{
    use MediaUpload;

    public function index(Request $request)
    {
        $blogs = Blog::orderByDesc('id');
        if ($request->title) {
            $blogs->where('title', 'like', '%' . $request->title . '%');
        }
        $blogs = $blogs->paginate(25);
        return view('admin.blogs.index', compact('blogs', 'request'));
    }

    public function create()
    {
        return view('admin.blogs.add');
    }

    public function store(Request $request)
    {
        try {
            $data = $request->validate([
                'title' => ['required'],
                'logo' => ['required', 'image'],
                'description' => ['required'],
            ]);
            if (isset($request->logo)) {
                $data['media_id'] = $this->upload($request->logo)->id;
            }
            Blog::create($data);
            return redirect()->route('admin.blogs.index')->with('success', 'Blogs Added Successfully!');
        } catch (Exception $e) {
            Log::error("Store Blogs "  . $e->getMessage());
            return redirect()->back()->with(['error' => $e->getMessage()]);
        }
    }

    public function edit(Blog $blog)
    {
        return view('admin.blogs.edit', compact('blog'));
    }

    public function update(Blog $blog, Request $request)
    {
        try {
            $data = $request->validate([
                'title' => ['required'],
                'logo' => ['required', 'image'],
                'description' => ['required'],
            ]);
            if (isset($request->logo)) {
                $data['media_id'] = $this->upload($request->logo)->id;
            }
            $blog->update($data);
            return redirect()->route('admin.blogs.index')->with('success', 'Blogs Updated Successfully!');
        } catch (Exception $e) {
            Log::error("Update Blogs "  . $e->getMessage());
            return redirect()->back()->with(['error' => $e->getMessage()]);
        }
    }

    public function destroy(Blog $blog)
    {
        $blog->delete();
        return response()->json(["status" => 200, "message" => "Blog Deleted"]);
    }
}
