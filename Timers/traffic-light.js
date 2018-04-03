const EventEmmiter = require('events').EventEmitter;

const light = new EventEmmiter();
light.on('green', () => {
   console.log("light turned green");
});
light.on('yellow', () => {
    console.log("light turned yellow");
});
light.on('red', () => {
    console.log("light turned red");
});

light.emit("green");
setInterval(() => {light.emit("green");},7000);

setTimeout(() => {
    light.emit("yellow");
    setInterval(()=> {light.emit("yellow");},7000);
},3000);

setTimeout(() => {
    light.emit("red");
    setInterval(()=> {light.emit("red");},7000);
},4000);