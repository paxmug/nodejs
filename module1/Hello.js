const Hello = name => {
    return {
            sayHello: () => {console.log("Hello " + name);}
    }
}
if (require.main === module) {
    Hello(process.argv[2]).sayHello();
} else {
    module.exports = Hello;
}
