import Head from 'next/head';
import { useEffect, useState } from 'react';
import { getFlight } from '../api/FlightDataApi';
import FlightList from './component/FlightList';
import LoadingIndicator from './component/LoadingIndicator';
import Search from './component/Search';
import Debug from './component/Debug';
// 후반 테스트를 진행할 때 아래 import를 삭제합니다.

/*
1.search 함수는 자식으로부터 넘어온 객체를 전달받아
  상태객체(condition)이 중복검색유무를 판단하는것같다.
  출발지는 고정되어있지만 도착지에 대해서는 작성후 검색을 클릭시
  serach 함수가 실행!!

  2.getFlight는 condition의 조건이 바뀔때마다 어떻게인식하나? 3번째경우에서인식
  useEffect는 3가지조건을 담는다.
  - 컴포넌트 생성 후 처음 화면에 렌더링(표시)
  - 컴포넌트에 새로운 props가 전달되며 렌더링
  - 컴포넌트 상태(state)가 바뀌며 렌더링

  3.getFlight의 결과를 어떻게 받아 flightList 상태를 업데이트를 어떻게하고있나?
*/


export default function Main() {
  // 검색조건을 담는 state다
  // 초기값은 departure만 담고있다.
  const [condition, setCondition] = useState({
    departure: 'ICN',
  });
  

  // 항공편 리스트를 담는 state다
  // 초기값은 모든 항공리스트를 가지고있다(11개)
  const [flightList, setFlightList] = useState([]);
  const [isloading, setIsLoding] = useState(true)

  // console.log("flightList:",flightList)
  // 주어진 검색 키워드에 따라 condition 상태를 변경시켜주는 함수
  const search = ({ departure, destination }) => {
    // departure : ICN
    // destination : CJU
    if (condition.departure !== departure || condition.destination !== destination) {
      console.log('condition 상태를 변경시킵니다');
      // TODO: search 함수가 전달 받아온 '항공편 검색 조건' 인자를 condition 상태에 적절하게 담아보세요.
      setCondition({ departure, destination })
    }
  };

  // 컨디션에 항공리스트에있는 목록을 가지고있는지 판별한다.
  // 항공리스트가 필터함수를 통해 해당함수에 각각의 객체를넣어준다
  // 그 객체가 condition과 같다면 true를 반환?
  /*
  1. 검색조건 상태에 대한 값을 판별한다.
  2. filter함수를 통하여 항공편리스트의 배열안의 객체가 하나씩넘오온다.
  3. 넘어온 객체.departure === condition.departure 이 같다면 pass는 true
    => && 연산자를 사용한이유는 ? false일경우는 해당목록이 없기때문에 ?
    => 그렇다면 넘어온 객체와 condition 이 일치하지않을때 pass를 빼고는 안대나?
    => return flight.departure === condition.departure;
    => return flight.destination === condition.destination;
    => 위와 같이작성한다면 출발지만 입력해도 true를 계속만나기떄문에
    if문을 정상적으로 돌지않는다
    그렇기에 pass라는 변수를 만들어놓고 true를 할당후
    if문안에서 && 연산자를 사용한다면 출발지가 같다면 true를 반환하고
    다음 if문에서도 출발지는 같고 도착지를 넘어온객채에 맞게 판별이 가능하기때문에
    &&연산자를 사용한것! 이렇게된다면 마지막 return pass 이라고할때
    배열을리턴 출발지는 맞지만 도착지가 맞지않을경우는 false로 인한 배열을 리턴하지않는것!
  4. 넘어온 객체.destination === condition.departure 이같다면 true pass는 true
  
  */
  const filterByCondition = (flight) => {
    let pass = true;
    if (condition.departure) {
      pass = pass && flight.departure === condition.departure;
    }
    if (condition.destination) {
      pass = pass && flight.destination === condition.destination;
    }
    return pass;
  };

  global.search = search; // 실행에는 전혀 지장이 없지만, 테스트를 위해 필요한 코드입니다. 이 코드는 지우지 마세요!

  // TODO: Effeck Hook을 이용해 AJAX 요청을 보내보세요.
  // TODO: 더불어, 네트워크 요청이 진행됨을 보여주는 로딩 컴포넌트(<LoadingIndicator/>)를 제공해보세요.
  useEffect(() => {
    setIsLoding(true)
    getFlight(condition)
    .then((data)=>{
      setFlightList(data)
      setIsLoding(false)
    })
  },[condition])

  // TODO: 테스트 케이스의 지시에 따라 search 함수를 Search 컴포넌트로 내려주세요.
  return (
    <div>
      <Head>
        <title>States Airline</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>여행가고 싶을 땐, States Airline</h1>
        <Search onSearch={search}/>
        <div className="table">
          <div className="row-header">
            <div className="col">출발</div>
            <div className="col">도착</div>
            <div className="col">출발 시각</div>
            <div className="col">도착 시각</div>
            <div className="col"></div>
          </div>
          {/* <FlightList list={flightList.filter(filterByCondition)} /> */}
          {isloading ? <LoadingIndicator/> : <FlightList list={flightList} />}
          {/* 항공리스트를 담은 flightList는 filter함수를 통하여
           condition와 같은 값이있다면 true가발생하고 해당 리스트를 배열로반환한다.*/}
        </div>

        <div className="debug-area">
          <Debug condition={condition} />
        </div>
        <img id="logo" alt="logo" src="codestates-logo.png" />
      </main>
    </div>
  );
}
