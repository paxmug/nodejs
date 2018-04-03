const start = Date.now();

const logElapsed = () => {
  console.log('%d milliseconds have passed', Date.now() - start);
};

const interval = setInterval(logElapsed, 500);

setTimeout(() => {clearInterval(interval);}, 5000);