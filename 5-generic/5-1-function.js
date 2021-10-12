{
    function checkNotNull(arg) {
        if (arg == null) {
            throw new Error("not valid number.");
        }
        return arg;
    }
    var result = checkNotNull(null);
    console.log(result);
}
