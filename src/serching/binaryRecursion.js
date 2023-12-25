const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let counter = 0;

const binaryRecursionSearch = (array, start = 0, end = array.length, number) => {

  if (start > end)  return true


  while (start <= end) {``
    counter++;
    mid = Math.floor((left + right) / 2);

    if (array[mid] === number) return mid;

    if (number < array[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
};

console.log(binarySearch(arr, 15));
console.log(counter);
