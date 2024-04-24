// example 01
console.log('example 01');
function example1() {
    var x = 10;
    if (true) {
        var x = 20;
        console.log('x =', x); // Output: 20
    }
    console.log('x =', x); // Output: 20
}

example1(); // function call

// example 02
console.log('example 02');
function example2() {
    let x = 10;
    if (true) {
        let x = 20;
        x = 30;
        console.log('x =', x); // Output: 20
    }
    console.log('x =', x); // Output: 10
}

example2();

// example 03
console.log('example 03');
function example3() {
    const x = 10;
    if (true) {
        const x = 20;
        console.log('x =', x); // Output: 20
    }
    console.log('x =', x); // Output: 10
}

example3();
