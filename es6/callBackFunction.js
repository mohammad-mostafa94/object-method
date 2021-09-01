function square(number) {
    const result= number * number;
    console.log(result);
}

function higherOrderFunction(num,callback) {
    callback(num);
}
higherOrderFunction(6,square);