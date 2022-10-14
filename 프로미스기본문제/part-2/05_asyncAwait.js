const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

const readAllUsersAsyncAwait = async() => {
  // TODO: async/await 키워드를 이용해 작성합니다
  const user1 = await getDataFromFilePromise(user1Path)
  const user2 = await getDataFromFilePromise(user2Path)

  // aysnc 와 await는 프라미스를 좀더 편하게 사용할수있게 해준다
  // 단 aysnc를 사용 하기위해서는 async function 처럼 선언이 필요하다(그냥표현)
  // 위처럼 선언을 해줄경우 해당 function은 항상 프라미스를 반환한다.
  // 프라미스가 아닌 값을 반환해도 이행(resolve?)상태의 프라미스로 값을 감싸 이행된 프라미스가 반환
  // 즉 프라미스가 아닌값도 프로미스로 감싼다는거다
  // asysc 함수안의 await는 뭘까? 아주그냥 멋진녀석이란다. 알아보자
  // await 키워드를 만나다면 프라미스가 처리될때까지 기다린다.
  // 이것을 왜사용할까? DOM으로 예시를 들겠다. 데이터를 받아야만
  // HTML의 요소를 그릴수있다면?  동가적으로한다면 문제가 되지않겠지만
  // 비동기적일경우는 바로 다음코드로 넘어가게될것이고 그부분에서 그려지지않는상황이
  // 발생한다. 그런부분을 위해서일까? 해당 코드를 읽을때까지 기다려라는 키워드로 await을 쓴다고생각하자

  return [JSON.parse(user1), JSON.parse(user2)]
  // 배열의 형태로 JSON => 자바스크립트의 객체로 변환해서 리턴
}

// readAllUsersAsyncAwait();

module.exports = {
  readAllUsersAsyncAwait
}