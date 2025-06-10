// fn2.js 함수(2)

const sum = function (n1, n2) {
  console.log('함수호출!');
  return n1 + n2;
};

console.log('return함수 : ', sum(10, 20));

const copySum = sum;
const result = copySum(10, 30);
console.log('reseult : ', result);
