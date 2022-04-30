function receivesAFunction(bananas) {
    return bananas();
}

function returnsANamedFunction() {
    return receivesAFunction
}



function returnsAnAnonymousFunction() {
    return function () { }
}