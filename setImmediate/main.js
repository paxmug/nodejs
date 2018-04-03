const foo = require('./foo');
console.log('a');
foo(() => {
    console.log('b');
});
console.log('c');
