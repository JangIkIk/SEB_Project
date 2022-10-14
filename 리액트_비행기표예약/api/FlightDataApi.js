import flightList from '../resource/flightList';
import fetch from 'node-fetch';

if (typeof window !== 'undefined') {
  localStorage.setItem('flight', JSON.stringify(flightList));
}

export function getFlight(filterBy = {}) {
  // 초기값을 가지고 있는 매개변수
  // HINT: 가장 마지막 테스트를 통과하기 위해, fetch를 이용합니다. 아래 구현은 완전히 삭제되어도 상관없습니다.
  // TODO: 아래 구현을 REST API 호출로 대체하세요.

  let url = "http://ec2-13-124-90-231.ap-northeast-2.compute.amazonaws.com:81/flight?departure=ICN"
  if(filterBy.destination){
    url = url + "&destination=" + filterBy.destination
  }

  return fetch(url).then((el) => el.json())
}


/*
// // import json from '../resource/flightList'; 메인에 있던것




 API에 있던것
// let json = [];
  // if (typeof window !== 'undefined') {
  //   json = localStorage.getItem('flight');
  // }
  // const flight = JSON.parse(json) || [];

  // return new Promise((resolve) => {
  //   const filtered = flight.filter((flight) => {
  //     let condition = true;
  //     if (filterBy.departure) {
  //       condition = condition && flight.departure === filterBy.departure;
  //     }
  //     if (filterBy.destination) {
  //       condition = condition && flight.destination === filterBy.destination;
  //     }
  //     return condition;
  //   });

  //   setTimeout(() => {
  //     resolve(filtered);
  //   }, 500);
  // });

  https://www.youtube.com/watch?v=ZckRQ9Wodho
*/