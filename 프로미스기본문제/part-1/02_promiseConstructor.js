
// Promise 실행 함수가 가지고 있는 두 개의 파라미터 resolve 와 reject 는 각각 무엇을 의미하나요?

/**************************** * [resolve] -> 비동기의 데이터를 전달?
 주어진 값으로 이행하는 Promise 객체를 반환합니다. 이때 지정한 값이 then 가능한(then 메서드를 가지는) 값인 경우,
 Promise.resolve()가 반환하는 프로미스는 then 메서드를 "따라가서" 자신의 최종 상태를 결정합니다.
그 외의 경우, 반환된 프로미스는 주어진 값으로 이행합니다.

정의 : resolve 정상적인 호출이 이루어졌을경우
즉! 결과값, 데이터를 받는것! (완료???)

*********************************************************************/


/* ************************** reject 비동기 에러발생시의?
주어진 사유로 거부하는 Promise 객체를 반환합니다.

정의 : resolve 가 정상적인 호출이 이루어지지 않았을경우 실행되는 Error의 값
*****************************************************/



/* new Promise()를 통해 생성한 Promise 인스턴스에는 어떤 메서드가 존재하나요? 각각은 어떤 용도인가요?
Promise.prototype.catch()
프로미스에 거부 처리기 콜백을 추가하고,
콜백이 호출될 경우 그 반환값으로 이행하며 호출되지 않을 경우,
즉 이전 프로미스가 이행하는 경우 이행한 값을 그대로 사용해 이행하는 새로운 프로미스를 반환합니다.

Promise.prototype.then()
프로미스에 이행과 거부 처리기 콜백을 추가하고,
콜백이 호출될 경우 그 반환값으로 이행하며 호출되지 않을 경우(onFulfilled, onRejected 중 상태에 맞는 콜백이 함수가 아닐 경우)
처리된 값과 상태 그대로 처리되는 새로운 프로미스를 반환합니다.

정의 : 상태에 맞는 새로운 포르미스를 반환

Promise.prototype.finally()
프로미스의 이행과 거부 여부에 상관없이 처리될 경우 항상 호출되는 처리기 콜백을 추가하고,
이행한 값 그대로 이행하는 새로운 프로미스를 반환합니다.
*/


// Promise의 세 가지 상태는 각각 무엇이며, 어떤 의미를 가지나요?
// await 키워드 다음에 등장하는 함수 실행은 어떤 타입을 리턴할 경우에만 의미가 있나요?
// reject 될때까지 ?

// await 키워드를 사용할 경우, 어떤 값이 리턴되나요? 
// resovle, reject의 값을 프로미스 값을 반환한다 ??
// reject의 값을 반환하면 catch블록 으로 넘어감






// const sleep = (wait) => {
//   return new Promise((resolve) => {
//     // setTimeout(resolve, wait);
//     setTimeout(resolve, wait);
//   });
// }


// 출력을 보기위한
// const sleep = (wait) => {
//   return new Promise((resolve) => {
//     // console.log("wait:",wait)
//     // console.log("resolve:",resolve("??"))
//     // Promise.resolve(value)
//     setTimeout(()=>{
//       resolve("hello");
//     }, wait);
//   });
// }

// 에러를 보기위한
// const sleep = (wait) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//       reject(new Error("에러"));
//     }, wait);
//   });
// }


const sleep = (wait) => {
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve("hello");
      
    }, wait);
  });
}

// npm install underscore 터미널을 이용한 모듈 다운방법 
// 파일시스템 모듈은 파일을 읽거나 저장하는 기능을 구현!
// 파일을 읽을때는 readFile 메서드! => 로컬에 존재하는 파일을 읽어옴
// 파일저장은 writeFile 메서드!
// 공식문서 사이트 
//https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fs_fs_readfile_path_options_callback

// const _ = require('underscore') => 코드상단에 작성

/* 
path \<string> | \<Buffer> | \<URL> | \<integer>
path에는 파일 이름을 전달인자로 받습니다. 네 가지 종류의 타입을 넘길 수 있지만 일반적으로 문자열(<string>)의 타입을 받습니다.
다음은 `'etc/passwd' 라는 파일을 불러오는 예제입니다.
fs.readFile('/etc/passwd', ..., ...)
*/





