function transformFirstAndLast(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let obj = {};
  if (arr.length === 0) {
    return {};
  }
  obj[arr[0]] = arr[arr.length - 1];

  return obj;
}
