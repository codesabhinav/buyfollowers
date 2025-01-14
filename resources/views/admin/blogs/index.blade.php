@extends('layouts.master')
@section('css')
@endsection
@section('content')
    <div class="dashboard-body">
        <div class="cards shadow-none">
            <div class="card-body">
                <div class="row mb-2">
                    <div class="col-xl">
                        <form action="{{ url()->current() }}" method="get">
                            <div class="row justify-content-xl-end">
                                <div class="col mb-4">
                                    <h2 class="title-1" style="color:black">
                                        Blogs ({{ $blogs->count() }})
                                    </h2>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mb-3">
            <div class="col-xxl">
                <div class="row">
                    <div class="col-xxl">
                        <form method="get" action="{{ route('admin.blogs.index') }}">
                            <div class="row justify-content-xxl-start">
                                <div class="col-xl-3 col-lg-6 col-md-4 col-sm-6 mb-4">
                                    <input type="text" name="title" class="form-control" placeholder="Title"
                                        @if ($request->title) value="{{ $request->title }}" @endif>
                                </div>
                                <div class="col-auto mb-4">
                                    <button type="submit" class="btn btn-primary px-4">
                                        search
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M3.85002 10C3.85002 6.60347 6.60347 3.85002 10 3.85002C13.3966 3.85002 16.15 6.60347 16.15 10C16.15 13.3966 13.3966 16.15 10 16.15C6.60347 16.15 3.85002 13.3966 3.85002 10ZM10 2.15002C5.66459 2.15002 2.15002 5.66459 2.15002 10C2.15002 14.3355 5.66459 17.85 10 17.85C11.8615 17.85 13.5717 17.2021 14.9173 16.1194L20.399 21.6011C20.7309 21.933 21.2691 21.933 21.6011 21.6011C21.933 21.2691 21.933 20.7309 21.6011 20.399L16.1194 14.9173C17.2021 13.5717 17.85 11.8615 17.85 10C17.85 5.66459 14.3355 2.15002 10 2.15002Z"
                                                fill="#7C8DB5" />
                                        </svg>
                                    </button>
                                </div>
                                <div class="col-auto mb-2">
                                    <a href="{{ route('admin.blogs.index') }}" class="btn btn-outline-primary px-4">
                                        Cancel</a>
                                </div>
                                <div class="col-auto mb-2">
                                    <a href="{{ route('admin.blogs.create') }}" class="btn btn-outline-primary px-4">+
                                        Add new</a>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>

        <!-- Table -->
        <div class="table-design custom-table container-fluid py-2">
            <table class="table display mb-5">
                <thead>
                    <th>Sr. No</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    @if (count($blogs) > 0)
                        @php $i = $blogs->perPage() * ($blogs->currentPage() - 1) + 1; @endphp
                        @foreach ($blogs as $blog)
                            <tr>
                                <td>{{ $i++ }}</td>
                                <td>{{ $blog->title }}</td>
                                <td>{{ Str::limit(strip_tags(html_entity_decode($blog->description)), 50) }}</td>
                                <td>
                                    @if ($blog->image)
                                        <div class=" w-25">
                                            <a class="image-popup-no-margins mr-2"
                                                href="{{ getFilePath($blog->image->path) }}">
                                                <img src="{{ getFilePath($blog->image->path) }}" class="img-responsive"
                                                    style="width:50px;"></a>
                                        </div>
                                    @endif
                                </td>
                                <td>
                                    <div class="members-tools-button">
                                        <a href="{{ route('admin.blogs.edit', $blog->id) }}" class="btn btn-sm-icon me-3">
                                            <img src="{{ asset('admin/assets/images/icon/edit.png') }}">
                                        </a>
                                        <button class="btn btn-sm-icon me-3"
                                            onclick="sweetAlertAjax('delete','{{ route('admin.blogs.destroy', $blog->id) }}', 'Are you sure you want to delete?')">
                                            <img src="{{ asset('admin/assets/images/icon/delete.png') }}">
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        @endforeach
                    @else
                        <tr>
                            <td class="text-center" colspan="10">No Data Found </td>
                        </tr>
                    @endif
                </tbody>
            </table>
            {{ $blogs->appends(Request::all())->links() }}
        </div>
    </div>
@endsection
@section('js')
@endsection
