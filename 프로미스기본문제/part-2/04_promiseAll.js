const { json } = require('express');
const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

const readAllUsers = () => {
  // TODO: Promise.all을 이용해 작성합니다

  console.log(user1Path);
  // 전역변수로 선언되어있는 유저1변수는 파일의 경로를 나타낸다 챕터 3에서 해당내용설명참고!
  let promise1 = getDataFromFilePromise(user1Path);
  // 파일의 위치를 알았다면 프로미스 생성자함수에 해당 파일의 경로를 인자로 전달한다
  // 프로미스 생성자함수에서는 파일시스템 모듈을 사용하였기때문에 해당파일이 인코딩이된후
  // 정상 적이면 resolve가 실행되어 해당파일의 data를 불러온다
  // 에러라면?? 당연히 reject
  
  console.log(user2Path);
  let promise2 = getDataFromFilePromise(user2Path);
  // 위와같은설명이므로 생략


  
  
  return Promise.all([promise1,promise2])
  // Promise.all은 Array와 같이 순회가 가능한 객체다 ([])를 이용해 사용한다
  // 이 메서드는 여러 프로미스의 결과를 집계할때 유용하다
  // 다음코드를 계속실행하기전에 서로 연관된 비동기 작업여러개가 모두 이행되어야 하는경우에사용!
  // 단 프로미스 중 하나라도 거부당한다면 즉시거부!
  .then((value) => {
    console.log(value);
    // then을 이용하며 전달받은 프로미스의 데이터를 확인한다면?
    // 하나의 배열 형태로 확인할수있다. 말그대로 배열형태!! 배열안에 오브젝트가 올수도있다는말이다

    // return  value.map((el)=> JSON.parse(el))
    return [JSON.parse(value)];
    // .map은 배열내의 모든요소를 순회한다. 위에서 말햇듯이 value에는 
    // 프로미스를 하나로 만든 배열의 형태를 가지고있다. 그안의 요소를 순회하여 새로운 배열을 반환한다
    // JSON.parse 는 계속인지하자 JSON형식의 파일을 자바스크립트 객체로!!
    // JSON파일의 형식은?? 키의 ""로 구분도 가능하다
    // map으로 순회하는 프로미스 배열의 모든 요소를 자바스크립트 객체로 변환해준다.
    //@@@
    // 여기서의문 value자체는 배열의 형태를 가지고있다 그렇다면
    // JSON.pares로만 파싱해준다면 자바스크립트의 객체를 배열의 형태로 반환 해줄텐데 왜안될까?
    
  })

}

readAllUsers()

module.exports = {
  readAllUsers
}