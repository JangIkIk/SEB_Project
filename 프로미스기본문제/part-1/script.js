let player = document.querySelector('#player');
let title = document.querySelector('#title');

let btnCallback = document.querySelector('#btnCallback');
btnCallback.onclick = runCallback;

let btnPromise = document.querySelector('#btnPromise');
btnPromise.onclick = runPromise;

let btnAsync = document.querySelector('#btnAsync');
btnAsync.onclick = runAsync;

function runCallback() {
  resetTitle();
  playVideo();

  delay(1000, () => {
    pauseVideo();
    displayTitle();

    delay(500, () => {
      highlightTitle();

      delay(2000, resetTitle);
    });
  });
}

// function runPromise() {
//   resetTitle();
//   playVideo();

//   sleep(1000).then(() => {
//     pauseVideo();
//     displayTitle();
//   })
//     .then(sleep.bind(null, 500))
//     .then(highlightTitle)
//     .then(sleep.bind(null, 2000))
//     .then(resetTitle)
// }


// function runPromise() {
//   resetTitle();
//   playVideo();

//   sleep(1000)
//   .then((param) => {
//     console.log(param)
//     pauseVideo();
//     displayTitle();
//     return "world";
//   })
//     .then((param)=>{
//       console.log(param);
//       return sleep(5000);
//     })
//     .then(highlightTitle)
//     .then(sleep.bind(null, 2000))
//     .then(resetTitle)
// }

function runPromise() {
  resetTitle();
  playVideo();

  sleep(1000)
  .then((param) => {
    console.log(param)
    pauseVideo();
    displayTitle();
    return "world";
  })
    .then((param)=>{
      console.log(param);
      return sleep(5000);
    })
    .then(highlightTitle)
    .then(sleep.bind(null, 2000))
    .then(resetTitle)
    .catch(err => {
      console.log(err)
    })
}

async function runAsync() {
  resetTitle();
  playVideo();

  let a = await sleep(1000);
  console.log("1초후",a);
  pauseVideo();
  displayTitle();

  // let ss = await sleep(10000);
  // console.log("10초후:",ss);

  let b = await sleep(500);
  console.log("0.5초후",b);
  highlightTitle();

  let c = await sleep(2000);
  console.log("2초후",c);
  resetTitle();


// let returnValue = await sleep(1000);
// console.log(returnValue)
}


function resetTitle() {
  log('제목을 초기화합니다');
  title.classList.remove('visible', 'highlight');
}

function playVideo() {
  log('영상을 재생합니다');
  player.play();
}

function pauseVideo() {
  log('영상을 멈춥니다');
  player.pause();
}

function displayTitle() {
  log('제목을 표시합니다');
  title.classList.add('visible');
}

function highlightTitle() {
  log('제목을 강조합니다');
  title.classList.add('highlight');
}

function log(message) {
  let logger = document.querySelector('#logger');
  let l = document.createElement('div');
  l.textContent = `[${new Date().toISOString().slice(11, -5)}] ${message}`;
  logger.prepend(l);
}