function gamBamBo(na, you) {

  //1. 이름 만들기
  //2. 규칙을 적어놓기(불변의 전제)
  //3. 

  //가위바위보 해석. 추상적인 것

  /**
   * 가위는 주먹한테 지고 보자기한테는 이긴다.
   * 바위는 보자기한테 지고 가위한테 이긴다.
   * 보자기는 가위한테 지고 주먹한테 이긴다.
  */

  //(가위 바위 보자기)만 입력해야 함.
  let rock, scissor, paper;
  rock = "바위"
  scissor = "가위"
  paper = "보자기"

  if (na === "가위") {
    //가위 vs 바위
    if (you == "바위") {
      console.log("나:", na, "너:", you);
      console.log(na, "가 졌습니다.")
      return false;
    }
    //가위 vs 가위
    if (you == "가위") {
      console.log("나:", na, "너:", you);
      console.log("비겼습니다.")
      return Boolean;
    }
    //가위 vs 보자기
    if (you == "보자기") {
      console.log("나:", na, "너:", you);
      console.log(you, "가 이겼습니다.")
      return true;
    }
  }


  if (na === "바위") {
    //바위 vs 바위
    if (you == "보자기") {

      console.log("나:", na, "너:", you);
      console.log(na, "가 졌습니다.")
      return false;
    }

    if (you == "바위") {
      console.log("나:", na, "너:", you);
      console.log("비겼습니다.")
      return;
    }

    if (you == "가위") {
      console.log("나:", na, "너:", you);
      console.log(you, "가 이겼습니다.")
      return;
    }
  }


  if (na === "보자기") {
    if (you == "가위") {

      console.log("나:", na, "너:", you);
      console.log(na, "가 졌습니다.")
      return false;
    }

    if (you == "보자기") {
      console.log("나:", na, "너:", you);
      console.log("비겼습니다.")
      return;
    }

    if (you == "바위") {
      console.log("나:", na, "너:", you);
      console.log(you, "가 이겼습니다.")
      return;
    }
  }

}

gamBamBo("가위", "가위")