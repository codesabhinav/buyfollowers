@extends('layouts.master')
@section('css')
    <style>
        .select2-container {
            width: 100% !important;
        }

        .select2-container--default .select2-selection--single {
            height: calc(2.25rem + 2px);
            line-height: calc(2.25rem);
        }

        .select2-container--default .select2-selection--single .select2-selection__rendered {
            padding: 0.375rem 0.75rem;
        }

        .select2-container--default .select2-selection--single .select2-selection__arrow {
            height: calc(2.25rem);
        }
    </style>
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
                                        API Products
                                    </h2>
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
                    <th>Name</th>
                    <th>Type</th>
                    <th>Category</th>
                    <th>Network</th>
                    <th>Description</th>
                    <th>Rate</th>
                    <th>Min</th>
                    <th>Max</th>
                    <th>Refill</th>
                    <th>Cancelling Available</th>
                    <th>Cancel</th>
                    <th>Action</th>
                </thead>
                <tbody id="product-list">
                </tbody>
            </table>
        </div>
    </div>

    <div class="modal fade" id="addServices" tabindex="-1" aria-labelledby="addServicesModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addServicesModalLabel">Add Service</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="addServicesForm" class="custom-validation" action="{{ route('admin.products.api.store') }}"
                        method="POST">
                        @csrf

                        <div class="mb-3">
                            <label for="nameInput" class="form-label" style="color: black">Name</label>
                            <input type="text" class="form-control" id="nameInput" name="name" disabled>
                        </div>

                        <div class="mb-3">
                            <label for="serviceType" class="form-label" style="color: black">Service Type</label>
                            <select class="form-select select2" id="serviceType" name="service_type" required>
                                <option value="" disabled selected>Select Service Type</option>
                                <option value="{{ App\Enums\ProductEnum::FREE }}">Free</option>
                                <option value="{{ App\Enums\ProductEnum::HIGH_QUALITY }}">High Quality</option>
                                <option value="{{ App\Enums\ProductEnum::ACTIVE }}">Active</option>
                            </select>
                        </div>

                        <div class="mb-3">
                            <label for="descriptionInput" class="form-label" style="color: black">Description</label>
                            <textarea class="form-control" id="descriptionInput" name="description" rows="3"
                                placeholder="Enter service description"></textarea>
                        </div>

                        <div class="mb-3 max-none" id="freeMaxLimitContainer">
                            <label for="freeMaxLimitInput" class="form-label" style="color: black">Max Limit</label>
                            <input type="text" class="form-control" id="freeMaxLimitInput" name="free_max"
                                onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                                placeholder="Enter Max Limit" data-parsley-error-message="Max is Required">
                        </div>

                        <div class="mb-3 d-none" id="rateInputContainer">
                            <label for="rateInput" class="form-label" style="color: black">Rate</label>
                            <input type="text" class="form-control" id="rateInput" name="rate"
                                onkeypress='return event.charCode >= 48 && event.charCode <= 57' placeholder="Enter rate"
                                disabled>
                        </div>

                        <div class="mb-3 d-none" id="ratePercentageContainer">
                            <label for="ratePercentageInput" class="form-label" style="color: black">Rate Percentage
                                (%)</label>
                            <input type="text" class="form-control" id="ratePercentageInput" name="rate_percentage"
                                onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                                placeholder="Enter rate percentage"
                                data-parsley-error-message="Rate Percentage is Required">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" form="addServicesForm" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('js')
    <script src="{{ asset('admin/assets/js/parsley.min.js') }}"></script>
    <script>
        $(document).on('click', '.add-services-btn', function() {
            $(".custom-validation").parsley();
            const service = $(this).data('service');
            const name = $(this).data('name');
            const type = $(this).data('type');
            const category = $(this).data('category');
            const network = $(this).data('network');
            const description = $(this).data('description');
            const rate = $(this).data('rate');
            const min = $(this).data('min');
            const max = $(this).data('max');
            const refill = $(this).data('refill');
            const canceling_is_available = $(this).data('canceling_is_available');
            const cancel = $(this).data('cancel');

            $('#addServicesForm').append('<input type="hidden" name="service" value="' + service + '">');
            $('#addServicesForm').append('<input type="hidden" name="name" value="' + name + '">');
            $('#addServicesForm').append('<input type="hidden" name="type" value="' + type + '">');
            $('#addServicesForm').append('<input type="hidden" name="category" value="' + category + '">');
            $('#addServicesForm').append('<input type="hidden" name="network" value="' + network + '">');
            $('#addServicesForm').append('<input type="hidden" name="rate" value="' + rate + '">');
            $('#addServicesForm').append('<input type="hidden" name="min" value="' + min + '">');
            $('#addServicesForm').append('<input type="hidden" name="max" value="' + max + '">');
            $('#addServicesForm').append('<input type="hidden" name="refill" value="' + refill + '">');
            $('#addServicesForm').append('<input type="hidden" name="canceling_is_available" value="' +
                canceling_is_available + '">');
            $('#addServicesForm').append('<input type="hidden" name="cancel" value="' + cancel + '">');

            $('#serviceType').val('').trigger('change');
            $('#rateInput').val(rate);
            $('#ratePercentageInput').val('');
            $('#freeMaxLimitInput').val('');
            $('#freeMaxLimitContainer').addClass('d-none');
            $('#rateInputContainer').addClass('d-none');
            $('#ratePercentageContainer').addClass('d-none');
            $('#nameInput').val(name);
            $('#addServices').modal('show');
        });

        $('#serviceType').on('change', function() {
            const selectedValue = $(this).val();
            const highQuality = "{{ App\Enums\ProductEnum::HIGH_QUALITY }}";
            const active = "{{ App\Enums\ProductEnum::ACTIVE }}";
            const free = "{{ App\Enums\ProductEnum::FREE }}";

            if (selectedValue === free) {
                $('#freeMaxLimitContainer').removeClass('max-none').removeClass('d-none');
                $('#rateInputContainer').addClass('d-none');
                $('#ratePercentageContainer').addClass('d-none');
                $('#ratePercentageInput').removeAttr('required');
                $('#freeMaxLimitInput').attr('required', true);
            } else if (selectedValue === highQuality || selectedValue === active) {
                $('#rateInputContainer').removeClass('d-none');
                $('#ratePercentageContainer').removeClass('d-none');
                $('#freeMaxLimitContainer').addClass('d-none');
                $('#ratePercentageInput').attr('required', true);
                $('#freeMaxLimitInput').removeAttr('required');
            } else {
                $('#rateInputContainer').addClass('d-none');
                $('#ratePercentageContainer').addClass('d-none');
                $('#freeMaxLimitContainer').addClass('d-none');
                $('#ratePercentageInput').removeAttr('required');
                $('#freeMaxLimitInput').removeAttr('required');
            }
        });

        $(document).ready(function() {
            const apiUrl = @json(getEnvironmentVariable('api_url'));
            const token = @json(getEnvironmentVariable('token'));

            function fetchProducts(searchQuery = '') {
                $.ajax({
                    url: `${apiUrl}?action=services&key=${token}`,
                    method: 'GET',
                    success: function(response) {
                        let productList = '';
                        if (response.length > 0) {
                            const filteredProducts = response.filter(product =>
                                product.name.toLowerCase().includes(searchQuery.toLowerCase())
                            );

                            if (filteredProducts.length > 0) {
                                filteredProducts.forEach((product, index) => {
                                    productList += `
                                    <tr>
                                        <td>${index + 1}</td>
                                        <td>${product.service}</td>
                                        <td>${product.name}</td>
                                        <td>${product.type}</td>
                                        <td>${product.category}</td>
                                        <td>${product.network}</td>
                                        <td>${product.description}</td>
                                        <td>${product.rate}</td>
                                        <td>${product.min}</td>
                                        <td>${product.max}</td>
                                        <td>${product.refill}</td>
                                        <td>${product.canceling_is_available}</td>
                                        <td>${product.cancel}</td>
                                        <td>
                                            <div class="members-tools-button">
                                                <button class="btn btn-sm-icon me-3 add-services-btn" 
                                                    data-service="${product.service}" 
                                                    data-name="${product.name}" 
                                                    data-type="${product.type}" 
                                                    data-category="${product.category}" 
                                                    data-network="${product.network}" 
                                                    data-description="${product.description}" 
                                                    data-rate="${product.rate}" 
                                                    data-min="${product.min}" 
                                                    data-max="${product.max}" 
                                                    data-refill="${product.refill}" 
                                                    data-canceling_is_available="${product.canceling_is_available}"
                                                    data-cancel="${product.cancel}"
                                                data-toggle="modal" data-target="#addServices">
                                                    <img src="{{ asset('admin/assets/images/icon/add.png') }}">
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                `;
                                });
                            } else {
                                productList = `
                                <tr>
                                    <td class="text-center" colspan="14">No Products Found</td>
                                </tr>
                            `;
                            }
                        } else {
                            productList = `
                            <tr>
                                <td class="text-center" colspan="14">No Data Found</td>
                            </tr>
                        `;
                        }
                        $('#product-list').html(productList);
                    },
                    error: function(error) {
                        console.error('Error fetching products:', error);
                        $('#product-list').html(`
                        <tr>
                            <td class="text-center" colspan="14">Failed to fetch data</td>
                        </tr>
                    `);
                    }
                });
            }

            fetchProducts();

            $('input[name="name"]').on('input', function() {
                const searchQuery = $(this).val();
                fetchProducts(searchQuery);
            });
        });
    </script>
@endsection
