// for_in.js 객체에 사용
const person2 = {
  name: '김옥히',
  age: 22,
  language: ['한국어', '영어', '프랑스어'],
  education: {
    school: '한국대',
    major: ['컴퓨터공학', '전자공학'],
    graduated: true,
  },
};
for (const item in person2) {
  console.log(item, ': ', person2[item]);
}

for (const item in person2) {
  console.log(item);
}
console.log('-=--------------------');
// 응용력


