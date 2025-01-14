@extends('layouts.app')
@section('content')
<style>
    body {
        padding: 0;
    }
</style>

<div class="login-bg" style="position: relative;">
    <div style="position: absolute;top:0;left:0;right:0;width:100%;margin:auto;z-index: 99;">
        <div style="width: 100%; height: calc(100vh - 56px); display: flex; justify-content: center;">
            <div style="width: 100%;">
                <div class="container mt-5">
                    <div class="row justify-content-center">
                        <div class="col-md-8 col-lg-6 col-xl-5">
                            <div class="card">
                                <div class="text-center account-logo-box">
                                    <div>
                                        <a href="" class="text-success">
                                            <span>
                                                <img src="{{ getSiteLogo('logo') }}" alt="logo"
                                                    height="50" style="margin-top:4%">
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div class="card-body">
                                    @if (session('error'))
                                    <h6 class="alert alert-danger">
                                        {{ session('error') }}
                                    </h6>
                                    @endif
                                    <form method="POST" action="{{ route('login') }}">
                                        @csrf
                                        <div class="form-group">
                                            <input id="email" type="email"
                                                class="form-control @error('email') is-invalid @enderror" name="email"
                                                value="{{ old('email') }}" required autocomplete="email" autofocus
                                                placeholder="Email">
                                            @error('email')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                            @enderror
                                        </div>
                                        <div class="form-group">
                                            <input id="password" type="password"
                                                class="form-control @error('password') is-invalid @enderror"
                                                name="password" required placeholder="Password">
                                        </div>
                                        <div class="form-group account-btn text-center mt-2">
                                            <div class="col-12">
                                                <button
                                                    class="btn width-md btn-bordered btn waves-effect waves-light"
                                                    type="submit" style="background-color:rgb(255, 0, 149);color:white">Log In</button>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
@section('footer-link')
@endsection
@section('js')
@endsection