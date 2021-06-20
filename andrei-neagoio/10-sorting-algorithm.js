const print = console.log
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
print('numbers : ', numbers)
// [1] BUBBLE SORT
function bubbleSort(array) {
  const t1 = process.uptime()
  const length = array.length
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        // swap number
        let temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  const t2 = process.uptime()
  return print(`bubbleSort : ${t2 - t1} seconde`, array)
}
bubbleSort(numbers)

// [2]  SELECTION SORT
function selectionSorting(array) {
  const t1 = process.uptime()
  const length = array.length
  for (let i = 0; i < length; i++) {
    let min = i
    let temp = array[i]
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[min]) {
        // update minimum if current is lower that what we had previously
        min = j
      }
    }
    array[i] = array[min]
    array[min] = temp
  }
  const t2 = process.uptime()
  return print(`selectionSorting : ${t2 - t1} seconde`, array)
}
selectionSorting(numbers)

// [3]  INSERTION SORT
function insertionSort(array) {
  const t1 = process.uptime()
  const length = array.length
  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      // move number to the first position
      array.unshift(array.splice(i, 1)[0])

    } else {
      // find where number should go
      for (let j = 1; j < i; j++) {
        if (array[i] > array[j - 1] && array[i] < array[i]) {
          // move number to the right spot
          array.splice(j, 0, array.splice(i, 1)[0])
        }
      }
    }
  }
  const t2 = process.uptime()
  return print(`insertionSort : ${t2 - t1} seconde`, array)
}
insertionSort(numbers)

// [4] MERGE SORT
function mergeSort(array) {
  if (array.length === 1) {
    return array
  }
  // split array in into right and left
  const length = array.length
  const middle = Math.floor(length / 2)
  const left = array.slice(0, middle)
  const right = array.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}

print(`mergeSort: `)
function merge(left, right) {
  const result = []
  let leftIndex = 0
  let rightIndex = 0
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex])
      leftIndex++
    } else {
      result.push(right[rightIndex])
      rightIndex++
    }
  }
  print(left, right)
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

(() => {
  const t1 = process.uptime()
  const result = mergeSort(numbers)
  const t2 = process.uptime()
  print(`time: ${t2 - t1} \n`, result)
})()


// [5] QUICK SORT
function quickSort(array, left, right) {
  const length = array.length
  let pivot
  let partitionIndex

  if (left < right) {
    pivot = right
    partitionIndex = partition(array, pivot, left, right)
    quickSort(array, left, partitionIndex - 1)
    quickSort(array, partitionIndex + 1, right)
  }
  return array
}

function partition(array, pivot, left, right) {
  let pivotValue = array[pivot]
  let partitionIndex = left
  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, partitionIndex)
      partitionIndex
    }
  }
  swap(array, right, partitionIndex)
  return partitionIndex
}

function swap(array, firstIndex, secondIndex) {
  var temp = array[firstIndex]
  array[firstIndex] = array[secondIndex]
  array[secondIndex] = temp
}

(() => {
  const t1 = process.uptime()
  const result = quickSort(numbers, 0, numbers.length - 1)
  const t2 = process.uptime()
  print(`quickSort: ${t2 - t1} \n`, result)
})()

