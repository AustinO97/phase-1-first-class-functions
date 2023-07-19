function spy() {
    console.log('callback');
}

function receivesAFunction(spy) {
    return spy();
}


function returnsANamedFunction() {
    return function x() {
        console.log('hi')
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log('hi')
    }
}