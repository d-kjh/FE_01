//for_of.js 배열에 사용
const myArray = ['A', 'B', 'C', 'D'];

console.log('Array.isArray(myArray)', Array.isArray(myArray));
for (const item of myArray) {
  console.log(item);
}

// 유사 배열
const myArray2 = {
  0: '가',
  1: '나',
  2: '다',
  3: '라',
  length: 4,
};
// 에러 발생
// for (const item of myArray2) {
//   console.log(item);
// }
for (let i = 0; i < myArray2.length; i++) {
  console.log('for', myArray2[i]);
}

const myArray2Iterable = Array.from(myArray2); // 유사 배열을 진짜 배열로 만든다

for (const item of myArray2Iterable) {
  console.log(item);
}
