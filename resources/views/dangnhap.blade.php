
<form action="{{ url('/dangnhap') }}" method="post">
    {{ csrf_field() }}
    <input type="text" name="username">
    <input type="text" name="password">
    <input type="submit">
</form>