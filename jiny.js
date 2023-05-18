let rules =  {
  a : "가위",
  b : "바위",
  c : "보"
}
function GamBamBo(me, you) {
  if (me === rules.a && you === rules.b) {
      return "당신이 졌습니다.";
  }
  else if (me === rules.a && you === rules.c) {
      return "당신이 이겼습니다";
  }
  else if (me ===rules.a && you === rules.a) {
      return "비겼습니다.";
  }
  else if (me ===rules.b && you=== rules.a) {
      return "당신이 졌습니다.";
  }
  else if (me ===rules.b && you === rules.b) {
      return "비겼습니다.";
  }
  else if (me ===rules.b && you === rules.c) {
      return "당신이 이겼습니다";
  }
  else if (me ===rules.c && you=== rules.a) {
      return "당신이 졌습니다.";
  }
  else if (me ===rules.c && you === rules.b) {
      return "당신이 이겼습니다";
  }
  else if (me ===rules.c && you === rules.c) {
      return "비겼습니다.";
  }
  //가위는 주먹한테 지고 보자기는 이긴다
  //바위는 보자기한테 지고 가위는 이긴다
  //보는 가위한테 지고 주먹한테 이긴다.
}
console.log(GamBamBo('바위', '가위'));

//가상의 math.random 으로 -> 전제에 해당하는 가위바위보 랜덤 생성기 = 제너레이터 만들기 
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
console.log(getRandomInt(3));
//랜덤함수로 승률까지 나오게하기 -> 호출수 대비 승률 수 

//랜덤 -> 기초데잍터 -> 나 / 너 -> 가위바위보 (return boolean)-> 결과 (호출 대비 승률 수)
