const arr = ["apple", "banana", "kola"];
arr.sort().reverse();

for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

for (let ar of arr) {
  console.log(ar);
}
