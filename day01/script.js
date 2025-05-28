const $screen = document.querySelector('#screen');
const $toggleButton = document.querySelector('#button');

console.log('screen', $screen);
console.log('toggleButton', $toggleButton);

let timeInterval;
let stopWatchOn = false;
let seconds = 0;

if ($screen && $toggleButton) {
  // 첫번째 아규먼트 : 문자열(이벤트 이름)
  // 두번째 아규먼트 : 함수 주소값 >> 콜백함수

  /*
  function clickBtn() {
    alert('zz');
  }
  $toggleButton.addEventListener('click', clickBtn);
  */

  /* 
  $toggleButton.addEventListener('click',      function () {
    alert('ㅋㅋㅋㅋ');
  });
  */
  $toggleButton.addEventListener('click', () => {
    stopWatchOn = !stopWatchOn; //토글
    console.log('stopWatchOn: ', stopWatchOn);
  });
}
