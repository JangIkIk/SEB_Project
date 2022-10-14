
const newsURL = 'http://localhost:4999/data/latestNews';
const weatherURL = 'http://localhost:4999/data/weather';

function getNewsAndWeather() {
  // TODO: fetch을 이용해 작성합니다
  // TODO: 여러개의 Promise를 then으로 연결하여 작성합니다
  // fetch : 리소스의 경로를 나타내는 하나의 인수만 받는다
  // response : Response (en-US) 객체 역시 JSON 응답 본문을 그대로 포함하지는 않습니다.
  // Response는 HTTP 응답 전체를 나타내는 객체로,
  // JSON 본문 콘텐츠를 추출하기 위해서는 json() 메서드를 호출해야 합니다.
  // json()은 응답 본문 텍스트를 JSON으로 파싱한 결과로 이행하는, 또 다른 프로미스를 반환합니다.
  // console.log(newsURL);
  //해당링크
  // console.log(weatherURL);
  //해당링크
  // console.log(response);
  //ServerResponse {status: ƒ, links: ƒ, send: ƒ, json: ƒ, jsonp: ƒ, …}
  let obj = {};
  return fetch(newsURL)
  .then((response) => response.json())
  .then((response) => {
    
    obj.news = response.data;
    return fetch(weatherURL)
  })
  .then((response)=>response.json())
  .then((response)=>{
    obj.weather = response
    console.log(obj);
    return obj;
  })

}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeather
  }
}

getNewsAndWeather();