const flights = require('../repository/flightList');
const fs = require('fs');

module.exports = {
  // [GET] /flight
  // 요청 된 파라미터 departure_times, arrival_times 값과 동일한 값을 가진 항공편 데이터를 조회합니다.
  // 요청 된 파라미터 departure, destination 값과 동일한 값을 가진 항공편 데이터를 조회합니다.
  findAll: (req, res) => {
    const { departure_times, arrival_times, destination, departure } = req.query;
    // TODO:

      
    if (departure_times && arrival_times) {
      let resultList = flights.filter((data) => {
        return (
          data.departure_times === departure_times &&
          data.arrival_times === arrival_times
        );
      });
      return res.json(resultList);
    }

    if (destination && departure) {
      let resultList = flights.filter((data) => {
        return data.destination === destination && data.departure === departure;
      });
      return res.json(resultList);
    }

    return res.json(flights)

  },
  // [GET] /flight/:ㅕㅕid
  // 요청 된 uuid 값과 동일한 uuid 값을 가진 항공편 데이터를 조회합니다.
  findById: (req, res) => {
    const { uuid } = req.params;
    // TODO:
    const result = flights.filter((data)=>{
      if(data.uuid === uuid){
        return true;
      }
    });

    return res.json(result);

    // test : af6fa55c-da65-47dd-af23-578fdba44bed
    // return res.json(flights.filter((data)=>{
    //   if(data.uuid === uuid){
    //     return true;
    //   }
    // }));


    // return res.json(flights)
  },

  







  // Advanced
  // [PUT] /flight/:uuid 요청을 수행합니다.
  // 요청 된 uuid 값과 동일한 uuid 값을 가진 항공편 데이터를 요쳥 된 Body 데이터로 수정합니다.
  update: (req, res) => {
    
    
     // TODO:
    //  const { uuid } = req.params;
    //  const bodyData = req.body;
    //  const beUpdatedIdx = flights.findIndex(flight => flight.uuid === uuid);
    //  const updatedFlight = { ...flights[beUpdatedIdx], ...bodyData }; //최종적으로 업데이트된 flight
    //  flights.splice(beUpdatedIdx, 1, updatedFlight);

    //  return res.status(200).json(updatedFlight);
  }
};


