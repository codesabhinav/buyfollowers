@extends('layouts.master')
@section('css')
@endsection
@section('content')
<div class="dashboard-body">
    <form method="POST" class="custom-validation" action="{{ route('admin.payment.links.update',$payment->id) }}"
        enctype="multipart/form-data">
        @csrf
        @method('PUT')
        <div class="row mb-2 justify-content-between">
            <div class="col-auto mb-4">
                <h2 class="title-1" style="color: black;">Payment Links
                </h2>
            </div>
            <div class="col-auto">
                <div class="d-flex gap-3">
                    <button type="submit" class="btn btn-primary px-4">submit</button>
                    <a href="{{ route('admin.payment.links.index') }}" type="button" class="btn btn-light px-4">cancel</a>
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
                                value="{{ old('title' , $payment->title) }}" maxlength="200"
                                data-parsley-error-message="Title is Required" required>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <div class="row align-items-center">
                        <div class="col-sm-2">
                            <label>{{ __('Client Id') }}
                            </label>
                        </div>
                        <div class="col-sm-4 mb-2">
                            <input type="text" name="client_id" id="client_id" class="form-control"
                                value="{{ old('client_id', $payment->client_id) }}"
                                data-parsley-error-message="Client Id is Required" required>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <div class="row align-items-center">
                        <div class="col-sm-2">
                            <label>{{ __('Client Secret') }}
                            </label>
                        </div>
                        <div class="col-sm-4 mb-2">
                            <input type="text" name="client_secret" id="client_secret" class="form-control"
                                value="{{ old('client_secret', $payment->client_secret) }}"
                                data-parsley-error-message="Client Secret is Required" required>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <div class="row align-items-center">
                        <div class="col-sm-2">
                            <label>{{ __('Mode') }}
                            </label>
                        </div>
                        <div class="col-sm-4 mb-2">
                            <select class="form-select select2" id="mode" name="mode" data-parsley-error-message="Mode is Required" required>
                                <option value="" disabled {{ old('mode', $payment->mode) == '' ? 'selected' : '' }}>Select Mode</option>
                                <option value="{{ App\Enums\PaymentLinkEnum::TEST }}" {{ old('mode', $payment->mode) == App\Enums\PaymentLinkEnum::TEST ? 'selected' : '' }}>Test</option>
                                <option value="{{ App\Enums\PaymentLinkEnum::LIVE }}" {{ old('mode', $payment->mode) == App\Enums\PaymentLinkEnum::LIVE ? 'selected' : '' }}>Live</option>
                            </select>
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
    });
</script>
@endsection