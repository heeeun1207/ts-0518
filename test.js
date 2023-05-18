function gamBamBo(na,you){
  let gam , bam ,bo;
  gam = "가위",
  bam = "바위",
  bo ="보"
//* 구상중 
//가위는 주먹한테 지고 , 보자기 한테는 이긴다. 
//바위는 보자기한테 지고 , 가위 한테 진다.
//보는  가위한테 지고, 주먹한테 이긴다. 
  if( na === "가위" ) {
    if (you =="바위")
    console.log('나:' ,na , "너:", you);
    console.log(na, "가 졌습니다.")
    return false;
  }

  

  
// 첫번째 매개변수 na = 가위인경우 , you가 주먹이면 false
// 첫번째 매개변수 na = 바위인경우 , you가 가위이면 false
// 첫번째 매개변수 na = 보인경우 , you가 주먹이면 false
// 첫번째 매개변수와 비겼을때는 무승부 불리언이 아닌 뭐로 처리해야할까? 
// 

}
gamBamBo("가위","바위");
