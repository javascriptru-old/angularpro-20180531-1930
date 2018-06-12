
const oldSetTimeout = setTimeout;
setTimeout = (callback, time) => {
  console.log('setTimeout started!');
  oldSetTimeout(() => {
    callback();
    console.log('setTimeout finished!');
  }, time);
};

//----------------------------


setTimeout(() => {
  console.log('Time DONE!')
}, 3000);