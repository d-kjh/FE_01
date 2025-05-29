//querySelector : JavaScript에서 HTML 요소를 선택할 때 사용하는 메서드
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
    $toggleButton.innerHTML = stopWatchOn ? '■' : '▶';
    // $toggleButton.style.backgroundColor = stopWatchOn ? 'tomato' : 'steelblue';
    $toggleButton.classList.toggle('stop-color');
    if (stopWatchOn) {
      // 첫번째 인자 : 콜백함수
      // 두번째 인자 : Number(ms)
      timeInterval = setInterval(() => {
        /*
        1초 > 100
        1분 > 60초 > 6000
        */
        seconds++;
        const mm = String(Math.floor(seconds / 6000) % 60).padStart(2, '0'); // 분
        const ss = String(Math.floor(seconds / 100) % 60).padStart(2, '0'); // 초
        const cs = String(seconds % 100).padStart(2, '0');
        $screen.innerText = `${mm}:${ss}:${cs}`;
      }, 10);
    } else {
      clearInterval(timeInterval);
      seconds = 0;
      $screen.innerText = '00:00:00';
    }
  });
}
