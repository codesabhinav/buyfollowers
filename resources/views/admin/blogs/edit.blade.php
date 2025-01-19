@extends('layouts.master')
@section('css')
@endsection
@section('content')
    <div class="dashboard-body">
        <form method="POST" class="custom-validation" action="{{ route('admin.blogs.update', $blog->id) }}"
            enctype="multipart/form-data">
            @csrf
            @method('PUT')
            <div class="row mb-2 justify-content-between">
                <div class="col-auto mb-4">
                    <h2 class="title-1" style="color: black;">Settings
                    </h2>
                </div>
                <div class="col-auto">
                    <div class="d-flex gap-3">
                        <button type="submit" class="btn btn-primary px-4">submit</button>
                        <a href="{{ route('admin.blogs.create') }}" type="button" class="btn btn-light px-4">cancel</a>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-body px-3">
                    <div class="form-group">
                        <div class="row align-items-center">
                            <div class="col-sm-2">
                                <label>{{ __('Title') }}
                                </label>
                            </div>
                            <div class="col-sm-4 mb-2">
                                <input type="text" name="title" id="title" class="form-control"
                                    value="{{ old('title', $blog->title) }}" maxlength="200"
                                    data-parsley-error-message="Title is Required" required>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="row align-items-center">
                            <div class="col-xl-2">
                                <label>{{ __('Logo') }} </label>
                            </div>
                            <div class="col-xl-10">
                                <div class="row align-items-center">
                                    <div class="col-auto">
                                        <label for="logo" class="btn btn-primary mb-0">choose
                                            file</label>
                                        <input type="file" name="logo" id="logo" hidden class="filestyle"
                                            onchange="loadFile(this)" 
                                            >
                                        <label for="logo" class="error" style="display: none;"></label>
                                    </div>
                                    <div class="col-auto">
                                        <div id="previewLogo"
                                            class="bg-light d-flex align-items-center justify-content-center mx-2 p-2"
                                            style="height:170px;width: 170px;background-image: url({{ getFilePath($blog->image->path ?? null) }});background-position: center center;background-size: cover;background-repeat: no-repeat;">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row align-items-center">
                            <label>{{ __('Description') }}</label>
                            <div class="col-12 mb-2">
                                <textarea name="description" id="description" class="form-control ckeditor"
                                    data-parsley-error-message="Description is Required" required>{{ old('description', $blog->description) }}</textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </div>
    </form>
    </div>
@endsection
@section('js')
    <script src="{{ asset('admin/assets/js/jquery.validate.min.js') }}"></script>
    <script src="{{ asset('admin/assets/js/parsley.min.js') }}"></script>
    <script src="https://cdn.ckeditor.com/4.16.2/standard/ckeditor.js"></script>

    <script>
        $(document).ready(function() {
            $('.ckeditor').ckeditor();
        });

        $(document).ready(function() {
            $(".custom-validation").parsley();
        });

        var loadFile = function(event) {
            $('#previewLogo').css('background-image', 'url()').css('background-position', 'center center').css(
                'background-size', 'cover').css('background-repeat', 'no-repeat').html('');
            var filePath = event.value;
            var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.jfif)$/i;
            if (!allowedExtensions.exec(filePath)) {
                alert('Please upload file having extensions .jpeg, .jpg .png only.');
                event.value = '';
            } else {
                if (event.files && event.files[0]) {
                    $("#logo").valid();
                    var reader = new FileReader();
                    reader.onload = function(e) {
                        $('#previewLogo').css('background-image', 'url(' + e.target.result + ')').css(
                            'background-position', 'center center').css('background-size', 'cover').css(
                            'background-repeat', 'no-repeat').html('');
                    };
                    reader.readAsDataURL(event.files[0]);
                }
            }
        };
    </script>
@endsection
