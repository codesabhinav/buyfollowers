@extends('layouts.master')
@section('css')
@endsection
@section('content')
<div class="dashboard-body">
    <form method="POST" class="custom-validation" action="{{ route('admin.products.api.store') }}"
        enctype="multipart/form-data">
        @csrf
        <div class="row mb-2 justify-content-between">
            <div class="col-auto mb-4">
                <h2 class="title-1" style="color: black;">Edit Product
                </h2>
            </div>
            <div class="col-auto">
                <div class="d-flex gap-3">
                    <button type="submit" class="btn btn-primary px-4">submit</button>
                    <a href="{{ route('admin.products.index') }}" type="button" class="btn btn-light px-4">cancel</a>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-body px-3">
                <div class="form-group">
                    <div class="row align-items-center">
                        <div class="col-sm-2">
                            <label>{{ __('Service') }}
                            </label>
                        </div>
                        <div class="col-sm-4 mb-2">
                            <input type="text" name="service" id="service" class="form-control"
                                value="{{ old('service', $product->service) }}" readonly>
                        </div>
                    </div>
                </div>

                <input hidden name="network" value="{{ old('network', $product->network) }}">
                <input hidden name="type" value="{{ old('type ', $product->type ) }}">

                <div class="form-group">
                    <div class="row align-items-center">
                        <div class="col-sm-2">
                            <label>{{ __('Name') }}
                            </label>
                        </div>
                        <div class="col-sm-4 mb-2">
                            <input type="text" name="name" id="name" class="form-control"
                            data-parsley-error-message="Name is Required"
                                value="{{ old('name', $product->name) }}" maxlength="200" required>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <div class="row align-items-center">
                        <div class="col-sm-2">
                            <label>{{ __('Service type') }}<span class="text-danger">*</span></label>
                        </div>
                        <div class="col-sm-4 mb-2">
                            <select class="form-control select2" id="service_type" name="service_type" data-parsley-error-message="Service is Required" required>
                                <option value="{{ App\Enums\ProductEnum::FREE }}"
                                    {{ old('service_type', $product->FREE ?? '') == App\Enums\ProductEnum::FREE ? 'selected' : '' }}>
                                    Free
                                </option>
                                <option value="{{ App\Enums\ProductEnum::HIGH_QUALITY }}"
                                    {{ old('service_type', $product->service_type ?? '') == App\Enums\ProductEnum::HIGH_QUALITY ? 'selected' : '' }}>
                                    High Quality
                                </option>
                                <option value="{{ App\Enums\ProductEnum::ACTIVE }}"
                                    {{ old('service_type', $product->service_type ?? '') == App\Enums\ProductEnum::ACTIVE ? 'selected' : '' }}>
                                    Active
                                </option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <div class="row align-items-center">
                        <div class="col-sm-2">
                            <label>{{ __('Category') }}
                            </label>
                        </div>
                        <div class="col-sm-4 mb-2">
                            <input type="text" name="category" id="category" class="form-control" data-parsley-error-message="Category is Required"
                                value="{{ old('category', $product->category) }}" maxlength="200" required>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <div class="row align-items-center">
                        <div class="col-sm-2">
                            <label>{{ __('Description') }}
                            </label>
                        </div>
                        <div class="col-sm-4 mb-2">
                            <input type="text" name="description" id="description" class="form-control"
                                value="{{ old('description', $product->description) }}" maxlength="200">
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <div class="row align-items-center">
                        <div class="col-sm-2">
                            <label>{{ __('Rate') }}
                            </label>
                        </div>
                        <div class="col-sm-4 mb-2">
                            <input type="text" name="rate" id="rate" class="form-control" data-parsley-error-message="Rate is Required"
                                value="{{ old('rate', $product->rate) }}" maxlength="200" required>
                        </div>
                    </div>
                </div>

                <div class="form-group" id="rate_percentage_field" style="display: none;">
                    <div class="row align-items-center">
                        <div class="col-sm-2">
                            <label>{{ __('Rate Percentage(%)') }}
                            </label>
                        </div>
                        <div class="col-sm-4 mb-2">
                            <input type="text" name="rate_percentage" id="rate_percentage" class="form-control"
                                value="{{ old('rate_percentage', $product->rate_percentage) }}" onkeypress='return event.charCode >= 48 && event.charCode <= 57' data-parsley-error-message="Rate percentage is Required">
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <div class="row ">
                        <div class="col-sm-2">
                            <label>{{ __('Min') }}</label>
                        </div>
                        <div class="col-sm-4 mb-2">
                            <input type="text" name="min" id="min" class="form-control" 
                                value="{{ old('min', $product->min) }}" onkeypress='return event.charCode >= 48 && event.charCode <= 57' data-parsley-error-message="Min is Required" required>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <div class="row ">
                        <div class="col-sm-2">
                            <label>{{ __('Max') }}</label>
                        </div>
                        <div class="col-sm-4 mb-2">
                            <input type="text" name="max" id="max" class="form-control" data-parsley-error-message="Max is Required"
                                value="{{ old('max', $product->max) }}" onkeypress='return event.charCode >= 48 && event.charCode <= 57' required>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <div class="row align-items-center">
                        <div class="col-sm-2">
                            <label>{{ __('Refill') }}<span class="text-danger">*</span></label>
                        </div>
                        <div class="col-sm-4 mb-2">
                            <select class="form-control select2" id="refill" name="refill" data-parsley-error-message="Refill is Required" required>
                                <option value="{{ App\Enums\ProductEnum::REFILL_YES }}"
                                    {{ old('refill', $product->refill ?? '') == App\Enums\ProductEnum::REFILL_YES ? 'selected' : '' }}>
                                    True
                                </option>
                                <option value="{{ App\Enums\ProductEnum::REFILL_NO }}"
                                    {{ old('refill', $product->refill ?? '') == App\Enums\ProductEnum::REFILL_NO ? 'selected' : '' }}>
                                    False
                                </option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <div class="row align-items-center">
                        <div class="col-sm-2">
                            <label>{{ __('Cancelling is Available') }}<span class="text-danger">*</span></label>
                        </div>
                        <div class="col-sm-4 mb-2">
                            <select class="form-control select2" id="canceling_is_available" name="canceling_is_available" data-parsley-error-message="Cancelling is Required" required>
                                <option value="{{ App\Enums\ProductEnum::CANCELING_IS_AVAILABLE }}"
                                    {{ old('canceling_is_available', $product->canceling_is_available ?? '') == App\Enums\ProductEnum::CANCELING_IS_AVAILABLE ? 'selected' : '' }}>
                                    True
                                </option>
                                <option value="{{ App\Enums\ProductEnum::CANCELING_NOT_AVAILABLE }}"
                                    {{ old('canceling_is_available', $product->canceling_is_available ?? '') == App\Enums\ProductEnum::CANCELING_NOT_AVAILABLE ? 'selected' : '' }}>
                                    False
                                </option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <div class="row align-items-center">
                        <div class="col-sm-2">
                            <label>{{ __('Cancel') }}<span class="text-danger">*</span></label>
                        </div>
                        <div class="col-sm-4 mb-2">
                            <select class="form-control select2" id="cancel" name="cancel" data-parsley-error-message="Cancel is Required" required>
                                <option value="{{ App\Enums\ProductEnum::CANCEL_YES }}"
                                    {{ old('cancel', $product->cancel ?? '') == App\Enums\ProductEnum::CANCEL_YES ? 'selected' : '' }}>
                                    True
                                </option>
                                <option value="{{ App\Enums\ProductEnum::CANCEL_NO }}"
                                    {{ old('cancel', $product->cancel ?? '') == App\Enums\ProductEnum::CANCEL_NO ? 'selected' : '' }}>
                                    False
                                </option>
                            </select>
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
                                        onchange="loadFile(this)">
                                    <label for="logo" class="error" style="display: none;"></label>
                                </div>
                                <div class="col-sm-4">
                                    <div class="profile-image w-32px">
                                        <div id="previewLogo"
                                            class="bg-light d-flex align-items-center justify-content-center mx-2 p-2"
                                            style="height:170px; background-position: center center; background-size: cover; background-repeat: no-repeat; background-image: url({{ getFilePath($product->image->path ?? null) }});">
                                        </div>
                                    </div>
                                </div>
                            </div>
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

<script>
    $(document).ready(function() {
        $(".custom-validation").parsley();
        toggleRatePercentageField();
        $('#service_type').change(function() {
            toggleRatePercentageField();
        });
    });

    function toggleRatePercentageField() {
        var serviceType = $('#service_type').val();
        if (serviceType === '{{ App\Enums\ProductEnum::HIGH_QUALITY }}' || serviceType === '{{ App\Enums\ProductEnum::ACTIVE }}') {
            $('#rate_percentage_field').show();
            $('#rate_percentage').attr('required', true);
        } else {
            $('#rate_percentage_field').hide();
            $('#rate_percentage').removeAttr('required');
            $('#rate_percentage').val('');
        }
    }

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