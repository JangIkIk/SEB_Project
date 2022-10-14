async function getNewsAndWeatherAsync() {
  // TODO: async/await 키워드를 이용해 작성합니다

  const news = await fetch(newsURL)
  .then((response) => response.json())

  const weather = await fetch(weatherURL)
  .then((response)=>response.json())

  let obj = {};
  obj.news = news.data;
  console.log("obj.news:",news.data);
  obj.weather = weather;

  return obj;
}
if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAsync
  }
}
