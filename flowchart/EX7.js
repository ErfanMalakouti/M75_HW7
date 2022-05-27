let arr = [1, 4, 6, 8, 2];
let i, j, min;
for (i = 0; i < arr.length - 1; i++) {
  min = i;
  for (j = i + 1; j < arr.length; j++)
    if (arr[j] < arr[min]) {
      min = j;
      let temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }
}
console.log(arr);
