const { USER_DATA } = require('../../db/data');

module.exports = (req, res) => {
  const { userId, password } = req.body.loginInfo;
  const { checkedKeepLogin } = req.body;
  console.log(req.body)
  
  const userInfo = {
    ...USER_DATA.filter((user) => user.userId === userId && user.password === password)[0],
  };
  console.log(userInfo)
  

  /*
   * TODO: 로그인 로직을 구현하세요.
   *
   * userInfo에는 요청의 바디를 이용해 db에서 조회한 유저정보가 담겨있습니다. 콘솔에서 userInfo를 출력해보세요.
   * 유저의 정보가 출력된다면 해당 유저가 존재하는 것임으로 로그인 성공에 대한 응답을 전송해야 합니다.
   * 만약 undefined가 출력된다면 해당하는 유저가 존재하지 않는 것임으로 로그인 실패에 대한 응답을 전송해야 합니다.
   *
   * 로그인 성공 시에는 클라이언트에 쿠키를 전송해야합니다. 쿠키의 cookieId에는 userInfo.id가 담겨야 합니다.
   * 테스트케이스에서 요구하는 쿠키 옵션을 모두 설정하세요.
   * 영속성있는 쿠키를 보내려면 max-age 또는 expires 옵션을 설정하세요.
   *
   * 클라이언트에게 바로 응답을 보내지않고 서버의 /useinfo로 리다이렉트해야 합니다.
   * express의 res.redirect 메서드를 참고하여 서버의 /userinfo로 리다이렉트 될 수 있도록 구현하세요.
   */

  const cookieOptions = {
    
    domain: 'localhost',
    path: '/',
    // 유효기간은 로그인 체크 여부에 따라 달라질테니 일단 패스합니다.
    // secure도 일단 패스하고, sameSite 옵션을 작성할 때 다시 확인합시다.
    httpOnly: true,
    
    // sameSite 옵션의 설정 값을 확인하면서 어떤 옵션을 설정하면 좋을지 살펴봅시다.
      // Lax : Get 요청만 쿠키 전송. 그런데 클라이언트에서 아이디랑 비밀번호를 POST로 보내주고 있으므로 지금 사용하기엔 부적합해요.
      // Strict : same-site만 가능. 그런데 클라이언트는 http 프로토콜 + 3000번 포트, 서버는 https 프로토콜 + 4000번 포트로 same-site가 아닙니다. 따라서 이 옵션도 부적합합니다.
      // 따라서 'none'이 가장 적합한 옵션값입니다. 그런데 이 옵션을 사용할 경우에는  secure 옵션이 필요하다고 해요. secure 옵션도 같이 작성해줍시다.
    sameSite: 'none',
    secure: true,
  
  }

  if(userInfo.id === undefined){
    res.status(401).send("아이디없음")
  } else if(checkedKeepLogin === true){
  // 로그인을 유지하고 싶은 경우, cookiesOption에 max-age 또는 expires 옵션을 추가로 설정해주겠습니다.

	// max-age 옵션으로 작성하는 경우
	cookieOptions.maxAge = 1000 * 60 * 30
	// 단위는 ms(밀리세컨드 === 0.001초)이니 주의하세요! -> 이렇게 작성할 경우 30분동안 쿠키를 유지합니다.

	// expires 옵션으로 작성하는 경우에는, 이렇게 작성하시면 됩니다.
	cookieOptions.expires = new Date(Date.now() + (1000 * 60 * 30) )
	// 지금 시간 + 30분 후에 쿠키를 삭제한다는 의미입니다.
	res.cookie('cookieId', userInfo.id, cookieOptions)
  res.redirect("/userinfo")
  } else{
    // 로그인을 유지하고 싶지 않은 경우, max-age 또는 expires 옵션을 작성하지 않은 상태 그대로 쿠키를 설정합니다.
    res.cookie('cookieId', userInfo.id, cookieOptions)
    res.redirect("/userinfo")
  }
};
