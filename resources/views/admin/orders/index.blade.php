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
                                        Orders ({{ $orders->count() }})
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
                        <form method="get" action="{{ route('admin.orders.index') }}">
                            <div class="row justify-content-xxl-start">
                                <div class="col-xl-3 col-lg-6 col-md-4 col-sm-6 mb-4">
                                    <input type="text" name="order_id" class="form-control" placeholder="Order"
                                        @if ($request->order_id) value="{{ $request->order_id }}" @endif>
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
                                    <a href="{{ route('admin.orders.index') }}" class="btn btn-outline-primary px-4">
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
                    <th>Order ID</th>
                    <th>User</th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Link</th>
                </thead>
                <tbody>
                    @if (count($orders) > 0)
                        @php $i = $orders->perPage() * ($orders->currentPage() - 1) + 1; @endphp
                        @foreach ($orders as $order)
                            <tr>
                                <td>{{ $i++ }}</td>
                                <td>{{ $order->order_id }}</td>
                                <td>{{ $order->user->name }}</td>
                                <td>{{ explode(' | ', $order->product->name)[0] }}</td>
                                <td>{{ $order->quantity }}</td>
                                <td>{{ '$' . $order->amount }}</td>
                                <td>
                                    <select class="select2" style="width: 150px;" data-value="{{ $order->id }}">
                                        <option value={{ App\Enums\OrderEnum::IN_PROGRESS }}
                                            {{ $order->status == App\Enums\OrderEnum::IN_PROGRESS ? 'selected' : '' }}>
                                            In Progress
                                        </option>
                                        <option value={{ App\Enums\OrderEnum::COMPLETE }}
                                            {{ $order->status == App\Enums\OrderEnum::COMPLETE ? 'selected' : '' }}>
                                            Completed
                                        </option>
                                        <option value={{ App\Enums\OrderEnum::CANCEL }}
                                            {{ $order->status == App\Enums\OrderEnum::CANCEL ? 'selected' : '' }}>Rejected
                                        </option>
                                    </select>
                                </td>
                                <td>{{ Str::limit($order->link, 20) }}</td>
                            </tr>
                        @endforeach
                    @else
                        <tr>
                            <td class="text-center" colspan="10">No Data Found </td>
                        </tr>
                    @endif
                </tbody>
            </table>
            {{ $orders->appends(Request::all())->links() }}
        </div>
    </div>
@endsection
@section('js')
    <script>
        var updateOrderStatusUrl = "{{ route('admin.orders.update', ['order' => ':id']) }}";
    </script>
    <script>
        $(document).ready(function() {
            $('select.select2').on('change', function() {
                var selectElement = $(this);
                var selectedValue = selectElement.val();
                var id = selectElement.data('value');

                swal({
                    title: 'Are you sure?',
                    text: "Do you want to change the status of this order?",
                    icon: 'warning',
                    buttons: {
                        cancel: "No, keep it",
                        confirm: {
                            text: "Yes, change it!",
                            value: true,
                        },
                    },
                    dangerMode: true,
                }).then((willChange) => {
                    if (willChange) {
                        var url = updateOrderStatusUrl.replace(':id', id);
                        $.ajax({
                            url: url,
                            method: 'POST',
                            data: {
                                status: selectedValue,
                                _token: '{{ csrf_token() }}'
                            },
                            success: function(response) {
                                swal("Success", "Order status updated successfully!",
                                        "success")
                                    .then(() => {
                                        location.reload();
                                    });
                            },
                            error: function(error) {
                                swal("Error", "Failed to update order status.",
                                    "error");
                            }
                        });
                    } else {
                        location.reload();
                    }
                });

                selectElement.data('previous-value', selectElement.val());
            });
        });
    </script>
@endsection
