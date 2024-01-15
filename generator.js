
function* generator(num) {
    for (let i = 0; i <= num; i++) {
        yield i;
    }
}

for (const value of generator(1000000)) {
    console.log(value);
}