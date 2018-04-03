const sum = (...args) => {
   const reducer = (accumulator, currentValue) => accumulator + currentValue;
   return args.reduce(reducer,0);
}
module.exports = sum;