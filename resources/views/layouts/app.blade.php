<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=0'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="Description" content="">
    <meta name="Author" content=>
    <link rel="icon" href="" type="image/x-icon" />
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <input type="hidden" id="csrf-token" value="{{ csrf_token() }}">
    <meta name="Keywords" content="" />
    <title></title>

    @include('includes.admin.head')
</head>

<body>
    @yield('content')
    @yield('footer-link')
    @include('includes.admin.footer')

</body>

</html>
