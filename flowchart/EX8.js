let arr = [21, 10, 13, 3, 7];
let i, key, j;
let n = arr.length;
for (i = 1; i < n; i++) {
  key = arr[i];
  j = i - 1;
  while (j >= 0 && arr[j] > key) {
    arr[j + 1] = arr[j];
    j = j - 1;
  }
  arr[j + 1] = key;
}
console.log(arr);
