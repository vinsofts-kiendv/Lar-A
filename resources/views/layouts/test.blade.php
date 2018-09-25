
<form action="{{ url('/a') }}" method="post">
    {{ csrf_field() }}
    <input type="text" name="email">
    <input type="text" name="password">
    <input type="submit">
</form>