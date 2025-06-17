/*
    asynchronous.js 비동기 처리에 대한 이해
    자바스크립트 특징이 싱글 스레드, 비공기 처리를 한다
*/
console.log('== start ==');
// setTimeout 메소드는 인자 두 개를 보냄
// 1. 콜백
// 2. 밀리세컨드

setTimeout(() => console.log('gd'), 3000);
console.log('-- end --');
