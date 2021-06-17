// function addUpTo(n) {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total
// }

// let t1 = process.uptime()
// addUpTo(1000000000)
// const t2 = process.uptime()
// console.log(`time elapsed: ${(t2 - t1) / 1000} seconds.`)

const nemo = ['nemo']
const everyone = ['dory', 'bruce', 'marlin', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank', 'nemo',]
const large = new Array(100000).fill('nemo')
function findNemo(array) {
  const t0 = process.uptime()
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Fund NEMO !')
    }
  }
  let t1 = process.uptime()
  console.log('Call to find Nemo took ' + (t1 - t0) / 1000 + ' milliseconds')
}

findNemo(everyone)