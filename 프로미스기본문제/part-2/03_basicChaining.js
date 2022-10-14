const { json } = require('express');
// const { resourceLimits } = require("worker_threads");
const path = require('path');
// 변수선언 = 요청(모듈이름)
// path 모듈은 Node.js에 내장되어 있어 별도의 라이브러리 설치없이 불러와서사용
// CommonJS 모듈 방식 : Node.js 서버를 위해 마나들어진 모듈시스템
// ES Module 모듈 방식 : import, export를 사용해 분리된 자바스크립트 파일끼리 서로접근가능

const { getDataFromFilePromise } = require('./02_promiseConstructor');
// require("파일경로")메서드를 통해 외부모듈을 가져올수 있다. node가 local object에 추가한 메서드
// console.log(getDataFromFilePromise);

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');
// __dirname는 현재 디렉토리 경로
// __filename은 현재파일정보.확장자
//path.join(합쳐질경로) =>하나의 경로(상대경로로 처리)로 합쳐 문자열 형태로 리턴

// HINT: getDataFromFilePromise(user1Path) 및 getDataFromFilePromise(user2Path)를 이용해 작성합니다
const readAllUsersChaining = () => {
  // TODO: 여러개의 Promise를 then으로 연결하여 작성합니다
  // Object.assign => JSOM 병함
  // JSON.parse() => JSON String 을 객체로 변환 (텍스트가 JSON형식으로 되어있어야함)
  // JSON.stringify => JSON객체를 String 객체로 변환
  // Array.join() => 배열의 모든요소를 연결해 하나의 문자열로만든다.
  // let result = [];

  // // getDataFromFilePromise(user1Path)// 객체를 가지고와서 변수에담는다
  // // .then((value)=>{
  // //   result.push(Object.entries(value));
  // //   return getDataFromFilePromise(user2Path)
  // // })
  // // .then((value)=>{
  // //   result.push(Object.entries(value));
  // //   return result;
  // // })
  // let promise = getDataFromFilePromise(user1Path).then((value) => {
  //   result.push(value);
  // })
  // let promise2 = getDataFromFilePromise(user2Path).then((value) => {
  //   result.push(value);
  // })
  
  // return new Promise((resolve,reject)=>{
  //   if (result.length <= 0) {
  //     reject('err')
  //   } else {
  //     resolve(result);
  //   }
  // });
  let result = [];
  return getDataFromFilePromise(user1Path)
  // promiseConstructor파일의 getDataFromFilePromise함수를 불러온다
  // 파일시스템 모듈을 이용하여 resolve, reject를 통하여 정상,에러를 확인후 가져온결과?
  .then((value)=>{
   // uese1Path의 value(내용데이터)를 받는다
   console.log(typeof value) 
       // type은 string이다 왜? 파일이 JSON.확장자
       // 알고가자 ! JSON형식은 객체 프로퍼티 이름은 
      //  쌍따옴표룰 감싸야하며 홑따옴표나 백틱은사용할수가없다. 
      // JSON으로 변환전 객체의 key:value 의 value가 홑따옴표로 되어있다면?
      // JSON으로 인코딩되면 쌍따옴표로 변환된다!
       console.log(value)
      // {
      //   "name": "김코딩",
      //   "age": 26,
      //   "sex": "Male",
      //   "company": {
      //     "name": "코드스테이츠"
      //   }
      // }
      // 위에서 설명한대로 문자열형식의 객체다
      let parsed1 = JSON.parse(value)
      // JSON.pares(변경할JSON객체) : JSON 에서 자바스크립트 객체로 변환하는 메서드
      // JSON.stringify(변경할객체) : 자바스크립트 객체에서 JSON객체로 변환하는 메서드
      result.push(parsed1)
      // 만들어 놓은 빈배열에 JSON에서 자바스크립트로 변환한것을 push
      return getDataFromFilePromise(user2Path)
      // 다음 유저2 데이터를 함수호출과 동시에 인자로 전달한다.
    })
    .then((value)=>{
      // 위에 then에서 함수에서 유저2를 호출했기때문에 현재 then에서는 유저1의 데이터가아닌 유저2의 데이터를가리킨다
      let parsed2 = JSON.parse(value)
      // 위와같이 JSON형식의 객체를 자바스크립트 객체로 변환
      result.push(parsed2)
      // 해당내용도 result배열에 push한다.
      return result;
      // 최종적으로 result에는 [유저1객체,유저2객체] 가들어가게되고
      // result의 값을 return한다!
    })
}





let r = readAllUsersChaining();
r.then((v) => {
  console.log(v);
})

// r.then((value)=>{
//   result.push(Object.entries(value));
//   return getDataFromFilePromise(user2Path)
// })
// .then((value)=>{
//   result.push(Object.entries(value));
//   return result;
// })

module.exports = {
  readAllUsersChaining
}