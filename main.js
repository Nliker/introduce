let target=document.querySelector("#dynamic");
function randomString(){
    let stringArr=["이름 : 서정현 나이 : 26  목표 : 숲을 보는 개발자"];
    let selectStringArr=stringArr[0].split("");
    return selectStringArr;
}
//타이핑 리셋
function resetTyping(){
    target.textContent="";
    dynamic(randomString());
}
//한글자씩 텍스트 출력 함수
function dynamic(Arr){
    if(Arr.length>0){
        target.textContent+=Arr.shift();
        setTimeout(function(){
            dynamic(Arr);
        },80);
    }else{
        setTimeout(resetTyping,3000);
    }
}
dynamic(randomString());

function blink(){
    target.classList.toggle("active");
}
setInterval(blink,500);