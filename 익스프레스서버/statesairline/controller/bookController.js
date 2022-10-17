// POST /book에서 사용할 uuid입니다.
const { v4: uuid } = require('uuid');
// 항공편 예약 데이터를 저장합니다.
let booking = [];

module.exports = {
    
  // [GET] /book 요청을 수행합니다.
  // 전체 예약 데이터를 조회합니다.
  findAll: (req, res) => {
    return res.status(200).json(booking);
  },
  // [GET] /book/:phone 요청을 수행합니다.
  // 요청 된 phone과 동일한 phone 예약 데이터를 조회합니다.
  findByPhone: (req, res) => {
    const {phone} = req.params;
    const data = booking.filter(book => book.phone === phone);
    return res.status(200).json(data);

  },
  // [GET] /book/:phone/:flight_uuid 요청을 수행합니다.
  // 요청 된 id, phone과 동일한 uuid, phone 예약 데이터를 조회합니다.
  findByPhoneAndFlightId: (req,res) => {
    const {phone, flight_uuid} = req.params;
    // TODO:
    const data = booking.filter(book => book.phone === phone && book.flight_uuid === flight_uuid);
      return res.status(200).json(data);

    
  },
  // [POST] /book 요청을 수행합니다.
  // 요청 된 예약 데이터를 저장합니다.
  create: (req, res) => {
    // POST /book에서 사용할 booking_uuid입니다.
    const booking_uuid = uuid();
    // TODO:
    const {flight_uuid, name, phone} = req.body;
    // uuid, name, phone -> booking 배열 저장
    const data = {
      booking_uuid: booking_uuid,
      flight_uuid: flight_uuid,
      name: name,
      phone: phone
    };
    booking.push(data);
    // console.log(req)
    return res.json(booking);
  },

  // Optional
  // [DELETE] /book/:booking_uuid 요청을 수행합니다.
  // 요청 된 id, phone 값과 동일한 예약 데이터를 삭제합니다.
  deleteByBookingId: (req, res) => {
    const {booking_uuid} = req.params;
    booking = booking.filter(book => book.booking_uuid !== booking_uuid);
    return res.status(200).json({booking_uuid});
    // TODO:
  }
};
