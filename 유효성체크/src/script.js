// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.

console.log("스크립트파일은 정상작동")




// keyup 이벤트는 키보드에서 키를 높을때 이벤트가 발생한다. => 한글자씩 입력이 될때마다 찍힌다.
// https://developer.mozilla.org/ko/docs/Web/API/Element/keyup_event

/*
[// <input type="text" id="username" placeholder="아이디" /> ] 아이디 입력란
1. 아이디 입력창에 네글자 이하이면 <div class="failure-message hide">아이디는 네 글자 이상이어야 합니다</div>
2. 아이디 입력창에 네글자 이상이면 <div class="success-message hide">사용할 수 있는 아이디입니다</div> 를출력
*/

// 아이디 입력란 전역변수선언
let id = document.querySelector("#username")
// 아이디 입력란 4글자 이상일때 전역변수 선언
let idTrue = document.querySelector(".success-message");
// 아이디 입력란 4글자 이하일때 전역변수 선언
let idFalse = document.querySelector(".failure-message");


// 아이디입력란에 키보드가 눌렸을떄 이벤트핸들러 실행
id.onkeyup = (()=>{
  console.log("아이디 이벤트핸들러실행")
  // console.log(id.value) // dom에서 접근한 id란 변수의 입력값을
  // 입력이될때마다 가져옴

  // 아이디가 4글자이상이면 ~
  if(isMoreThan4Length(id.value)){
    idTrue.classList.remove("hide")
    idFalse.classList.add("hide")
    // console.log("true");
  }
  // 아이디가 4글자이하이면 ~
  else{
    idFalse.classList.remove("hide")
    idTrue.classList.add("hide")
    // console.log("false");
  }
    
});

function isMoreThan4Length(value) { 
  return value.length >= 4;
}







/*
[<input type="password" id="password" placeholder="비밀번호" />] 패스워드 입력란
  <input type="password" id="password-retype" placeholder="비밀번호 확인"/> 패스워드 확인 입력란
1. 패스워드와 패스워드 확인이 일치하면 true 메세지를
2. 일치하지않는다면 <div class="mismatch-message hide">비밀번호가 일치하지 않습니다</div> 를 출력한다.
3. 비밀번호 확인창에 값이 입력되는동안 일치하지않으면  <div class="mismatch-message hide">비밀번호가 일치하지 않습니다</div> 가 출력되고 있어야한다.
*/

// 패스워드 입력란 전역변수 선언
let ps1 = document.querySelector("#password");
// 패스워드 확인 입력란 전역변수 선언
let ps2 = document.querySelector("#password-retype");
// 패스워드 일치하지않을시 문구
let psMath = document.querySelector(".mismatch-message");



ps2.onkeyup = (()=>{

  console.log(ps1.value,"패스워드1");
  console.log(ps2.value,"패스워드2");

  if(isMatch(ps1.value, ps2.value)){
    console.log("같음")
    psMath.classList.add("hide");

  } else{
    console.log("틀림")
    psMath.classList.remove("hide");
  }

})

function isMatch (password1, password2) {
  return password1 === password2;
}

//전화번호 숫가자아니면 안된다는문구
// 회원가입 아이디 비번을 입력하지않으면 회원가입버튼안눌리기

