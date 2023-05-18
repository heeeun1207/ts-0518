function gamBamBo(na: string, you: string) {
  let a, b, c;
  let ga: string = "가위";
  let ba: string = "바위";
  let bo: string = "보";
  // let resultBoolean: boolean = false;
  let resultWord: string = "";
  let resultObj: object = { na: ``, you: `` };
  // resultObj.na = "이김"; //*왜 에러?

  switch (na) {
    case ga:
      switch (you) {
        case ga:
          resultWord = "1-1비겼다";
          break;
        case ba:
          resultWord = "1-2졌다";
          break;
        case bo:
          resultWord = "1-3이겼다";
          break;
        default:
          resultWord = "1-4가위, 바위, 보만 입력 가능합니다.";
      }
      break;
    case ba:
      switch (you) {
        case ga:
          resultWord = "2-1이겼다";
          break;
        case ba:
          resultWord = "2-2비겼다";
          break;
        case bo:
          resultWord = "2-3졌다";
          break;
        default:
          resultWord = "2-4가위, 바위, 보만 입력 가능합니다.";
      }
      break;
    case bo:
      switch (you) {
        case ga:
          resultWord = "3-1졌다";
          break;
        case ba:
          resultWord = "3-2이겼다";
          break;
        case bo:
          resultWord = "3-3비겼다";
          break;
        default:
          resultWord = "3-4가위, 바위, 보만 입력 가능합니다.";
      }
      break;
    default:
      resultWord = "0-4가위, 바위, 보만 입력 가능합니다.";
  }

  return resultWord;
}
let me = "보";
let ner = "바바위";

console.log(gamBamBo(me, ner));