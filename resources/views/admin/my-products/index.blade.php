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
                                        My Products ({{ $products->count() }})
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
                        <form method="get" action="{{ route('admin.products.index') }}">
                            <div class="row justify-content-xxl-start">
                                <div class="col-xl-3 col-lg-6 col-md-4 col-sm-6 mb-4">
                                    <input type="text" name="service" class="form-control" placeholder="Service"
                                        @if ($request->service) value="{{ $request->service }}" @endif>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-md-4 col-sm-6 mb-4">
                                    <input type="text" name="name" class="form-control" placeholder="Name"
                                        @if ($request->name) value="{{ $request->name }}" @endif>
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
                                    <a href="{{ route('admin.products.index') }}" class="btn btn-outline-primary px-4">
                                        Cancel</a>
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
                    <th>Service</th>
                    <th>Service Type</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Category</th>
                    <th>Network</th>
                    <th>Description</th>
                    <th>Rate</th>
                    <th>Rate Percentage</th>
                    <th>Min</th>
                    <th>Max</th>
                    <th>Refill</th>
                    <th>Cancelling Available</th>
                    <th>Cancel</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    @if (count($products) > 0)
                        @php $i = $products->perPage() * ($products->currentPage() - 1) + 1; @endphp
                        @foreach ($products as $product)
                            <tr>
                                <td>{{ $i++ }}</td>
                                <td>{{ $product->service }}</td>
                                    @if ($product->service_type == App\Enums\ProductEnum::FREE)
                                <td>Free</td>
                                    @elseif($product->service_type == App\Enums\ProductEnum::HIGH_QUALITY)
                                        <td>High Quality</td>
                                    @else
                                        <td>Active</td>
                                @endif
                        <td>
                            @if ($product->image)
                                <div class=" w-25">
                                    <a class="image-popup-no-margins mr-2" href="{{ ($product->image['path']) }}">
                                        <img src="{{ ($product->image['path']) }}"  class="img-responsive"
                                            style="width:50px;"></a>
                                </div>
                            @endif
                        </td>
                        <td>{{ $product->name }}</td>
                        <td>{{ $product->type }}</td>
                        <td>{{ $product->category }}</td>
                        <td>{{ $product->network }}</td>
                        <td>{{ $product->description }}</td>
                        <td>{{ $product->rate }}</td>
                        <td>{{ $product->rate_percentage }}</td>
                        <td>{{ $product->min }}</td>
                        <td>{{ $product->max }}</td>
                        @if ($product->refill == App\Enums\ProductEnum::REFILL_YES)
                            <td>true</td>
                        @else
                            <td>false</td>
                        @endif
                        @if ($product->canceling_is_available == App\Enums\ProductEnum::CANCELING_IS_AVAILABLE)
                            <td>true</td>
                        @else
                            <td>false</td>
                        @endif
                        @if ($product->cancel == App\Enums\ProductEnum::CANCEL_YES)
                            <td>true</td>
                        @else
                            <td>false</td>
                        @endif
                        <td>
                            <div class="members-tools-button">
                                <a href="{{ route('admin.products.edit', $product->id) }}" class="btn btn-sm-icon me-3">
                                    <img src="{{ asset('admin/assets/images/icon/edit.png') }}">
                                </a>
                                <button class="btn btn-sm-icon me-3"
                                    onclick="sweetAlertAjax('delete','{{ route('admin.products.destroy', $product->id) }}', 'Are you sure you want to delete?')">
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
            {{ $products->appends(Request::all())->links() }}
        </div>
    </div>
@endsection
@section('js')
@endsection
