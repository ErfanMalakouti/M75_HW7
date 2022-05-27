let binarySearch = function (arr, x) {
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === x) return true;
    else if (arr[mid] < x) start = mid + 1;
    else end = mid - 1;
  }
  return false;
};

console.log(binarySearch([1, 2, 3, 4], 4));
