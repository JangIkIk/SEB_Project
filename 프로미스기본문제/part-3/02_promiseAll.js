function getNewsAndWeatherAll() {
  // TODO: Promise.all을 이용해 작성합니다


  const news = fetch(newsURL)
  .then((response) => response.json())

  const weather = fetch(weatherURL)
  .then((response)=>response.json())

  let obj = {};
  return Promise.all([news,weather])
  .then((value)=>{
    console.log(value);
    obj.news = value[0].data;
    console.log("newsobj",obj);
    obj.weather = value[1]
    console.log("obj",obj)
    return obj; 
  })
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAll
  }
}
