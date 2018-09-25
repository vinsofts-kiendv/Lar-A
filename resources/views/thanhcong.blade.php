@if(Auth::check())
    <h1>Dang nhap thanh cong</h1>
    @if(isset($data))
        {{ $data['name'] }}
        {{ $data['email'] }}
        <a href="{{ url('logout') }}">Logout</a>
    @endif
@else
    <h1>Ban chua dang nhap</h1>
@endif