<header class="dashboard-header">
    <div class="row flex-md-row flex-column-reverse">
        <div class="col">
            <div class="page-title">
                <h1 class="large-title mb-1">Welcome Back,
                    {{ Auth::user()->name ?? '' }}
                </h1>
            </div>
        </div>

        <div class="col-auto mb-4">
            <div class="header-elements">
                <button class="btn sidebar-toggle" id="sidebar-toggle">
                    <i class="far fa-bars"></i>
                </button>
                @if (!Auth::guard('admin')->check())
                    <div class="dropdown ">
                        @if (Auth::check() && Auth::user()->role == App\Enums\RoleEnum::SUPER_ADMIN)
                            <a href="#" class="profile dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <p class="body">
                                    {{ Auth::user()->name }}
                                </p>
                            </a>
                        @else
                            <a href="" class="profile ">
                                <img src="{{ asset('assets/images/profile.png') }}">
                            </a>
                        @endif
                    </div>
                @endif
            </div>
        </div>
    </div>
</header>
