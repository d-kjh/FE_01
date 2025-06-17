function fnA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('A');
      resolve('B');
    }, 3000);
  });
}
function fnB(item) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('B');
      resolve('C');
    }, 2000);
  });
}
function fnC(item) {
  setTimeout(() => {
    console.log(item);
  }, 2000);
}

fnA()
  .then((item) => fnB(item))
  .then((item) => fnC(item));
