<script src="{{ asset('admin/assets/js/jquery-3.7.0.min.js') }}"></script>
<script src="{{ asset('admin/assets/js/jquery.validate.min.js') }}"></script>
<script src="{{ asset('admin/assets/js/bootstrap.bundle.min.js') }}"></script>
<script src="{{ asset('admin/assets/js/owl.carousel.min.js') }}"></script>
<script src="{{ asset('admin/assets/js/jquery.dataTables.js') }}"></script>
<script src="{{ asset('admin/assets/js/dataTables.bootstrap5.min.js') }}"></script>
<script src="{{ asset('admin/assets/js/select2.min.js') }}"></script>
<script src="{{ asset('admin/assets/js/apexcharts.js') }}"></script>
<script src="{{ asset('admin/assets/js/jquery-ui.js') }}"></script>
<script src="{{ asset('admin/assets/js/tag-input.js') }}"></script>
<script src="{{ asset('admin/assets/js/lottie-player.js') }}"></script>
<script src="{{ asset('admin/assets/js/jquery.magnific-popup.min.js') }}"></script>
<script src="{{ asset('admin/assets/js/sweetalert2.min.js') }}"></script>
<script src="{{ asset('admin/assets/js/sweet-alert-ajax.js') }}"></script>
<script src="{{ asset('admin/assets/js/pie-chart.js') }}"></script>
<script src="{{ asset('admin/assets/js/index.js') }}"></script>
<!-- Swiper Slider -->
<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
<!-- Pie chart js -->

<script src="{{ asset('admin/assets/js/pie-chart.js') }}"></script>
<script src="{{ asset('admin/assets/js/jquery.timepicker.min.js') }}"></script>
<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
@yield('js')
<script>
    $(".alert").fadeTo(3000, 500).slideUp(500, function() {
        $(".alert").slideUp(500);
    });

    $('.chart-success').pieChart({
        barColor: '#34C759',
        lineWidth: 8,
        size: 46,
        lineCap: 'square',
    });
    $('.chart-danger').pieChart({
        barColor: '#FF3B30',
        lineWidth: 8,
        size: 46,
        lineCap: 'square',
    });
    $('.chart-read').pieChart({
        barColor: '#0014ff',
        lineWidth: 8,
        size: 46,
        lineCap: 'square',
    });
</script>
