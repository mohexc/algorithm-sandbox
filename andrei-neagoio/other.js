// javascript is single threaded language that can be non-blocking

function setAsyncTimeout(cb, timeout = 0) {
  return new Promise(resolve => {
    setTimeout(() => resolve(cb()), timeout);
  })
};

(async () => {
  await setAsyncTimeout(() => { console.log('1') }, 3000);
  console.log('2')
  await setAsyncTimeout(() => { console.log('3') }, 1500);
  console.log('4')
  await setAsyncTimeout(() => { console.log('5') }, 2000);
})()