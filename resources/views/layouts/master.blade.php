<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=0'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="Description" content="">
    <meta name="Author" content="">
    <link rel="icon" href="" type="image/x-icon">
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <input type="hidden" id="csrf-token" value="{{ csrf_token() }}">
    <meta name="Keywords" content="" >
    <title>Buy Followers</title>
     @include('includes.admin.head')
</head>

<body>
    <aside class="sidebar-wrap">
        <div class="sidebar">
            <div class="bg-shadow"></div>
            @include('includes.admin.sidebar')
        </div>
        <div class="main-container">
            <section class="dashboard-content">
                <!-- Header -->
                @include('includes.admin.header')
                @include('includes.message')
                @yield('content')

            </section>
        </div>
    </aside>
    @include('includes.admin.footer')
</body>

</html>
