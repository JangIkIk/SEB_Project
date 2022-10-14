
    // 상위부모 
    const main = document.querySelector("#container_main")
    // console.log(main,"main");

    // 출력화면 접근
    const H_screen = document.querySelector(".hd_screen input");
    // console.log(H_screen);

    // 버튼요소접근
    const M_btns = document.querySelectorAll(".common_flex");
    // console.log(M_btns);

    
    

    function add(n1,n2,n3){
    let result = 0;
    n1 = parseInt(n1);
    n2 = parseInt(n2);
        
    // 나누기
        if(n3 === "÷"){
           result += n1 / n2;
        } else if(n3 === "×"){
            result += n1 * n2;
         } else if(n3 === "-"){
            result += n1 - n2;
         }  else if(n3 === "+"){
            result += n1 + n2;

         }

        return String(result);

    }
    
    // 각역할의 변수들
    let firstNum, secondNum, operator, key;

    main.addEventListener("click", (event)=>{
    console.log("클릭핸들러");

        // 클릭이벤트가 발생한요소의 전체정보를담는다!
        let target = event.target
        // console.log(target);

        // 클릭이벤트가 발생한요소의 리스트를 가지고온다!
        let list = target.classList[0];
        // console.log(list);
        //   첫번째숫자   두번째숫자    연산기호!

        // 클래스가 number라면!!
        if(list === "number"){
            console.log(list,"타입")
            console.log(key,"key값이 유지되나 ?");

            if(key === 1 || H_screen.value === "0"){
                H_screen.value = target.value
                console.log("대입");
            } else {
                H_screen.value += target.value
                console.log("문자열붙이기");
            }

            key = 0;
        }


        // 클래스가operator 라면!!
        if(list === "operator"){
            // 연산기호를 누르기전의 첫번째값을 저장!
            firstNum = H_screen.value 
            console.log(firstNum,"첫번째값");

            // 연산기호 저장
            operator = target.value;
            console.log(operator,"연산기호저장");

            // 연산기호누른후의 표시를위한 key!
            key = 1;
            console.log(key,"key");
        }


        // 클릭요소의 value 값이 AC 라면
        if(target.value === "AC"){
            H_screen.value = "0"
            firstNum = undefined;
            secondNum = undefined;
            operator = undefined;
            key = 0;
        }

        // 클릭요소의 value 값이 = 라면
        if(target.value === "="){
            // console.log(firstNum,"첫번째값 유지?")
            // console.log(H_screen.value,"두번째값 유지?")
            // console.log(operator,"기호값 유지?")
            H_screen.value = add(firstNum,H_screen.value,operator);
        }
    })
    
    
    
    



// function Z_btns(){
    //     console.log("최소화");
    
    //     let cal = document.querySelector("#calculator")
    //     let btn = document.querySelectorAll(".hd_button input");
    
    
    //     for(let x of btn){
        //         console.log(`${x.value}`);
        
        //         x.onclick = ()=>{
            //             console.log(`${x.value}`)
            
            //             if( x.value === "×"){
                //                 cal.style.right = '200px';
                //                 // cal.style.transform = 'scale(0)';
                //             } else if( x.value === "-") {
                    
                    //                 cal.style.transform ='scale(1)';
                    //             } else if( x.value === "+"){
                        //                 cal.style.transform = 'scale(2)'; 
                        //             }
                        //         }
                        
                        //     }
                        // }
                        // window.addEventListener("DOMContentLoaded",()=>{
                            //  console.log("테스트");
                        
                        
                            //  클릭함수호출
                            //  C_btns();
                        
                        
                             //숨기기 클릭
                            //  Z_btns();
                        
                        
                        
                            //  let btn = document.querySelectorAll("#calculator #container_main .common_flex input");
                        
                            //     btn.addEventListener('click', function(event) {
                            //     // 버튼을 눌렀을 때 작동하는 함수입니다.
                            //     comsole.log("테스트");
                        
                        
                            //     // ...
                            // })
                        // })
                        
                        /****************** 로더영역 ******************/
                        
                        
                        
                        
                        