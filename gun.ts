let a: null | string, b: null | string, c: null | string;
a = "가위"; // 가위
b = "바위"; // 바위
c = "보"; // 보 
let rules = [a, b, c];

function randomVal(): string {
  let randomNum = Math.round(Math.random() * (rules.length - 1));
  return rules[randomNum];
}

function isSame(na : string, you: string) : boolean {
  let result = false;
  if(na === you){
    result = true;
  }
  return result;
}

function compare(na: string, you: string): boolean | undefined{
  let result : boolean | undefined = false;
  if (isSame(na, you)) {
    result = undefined;
  } else {
    // 1차, 내가 가위를 내었을 때.
    // 가위 vs 바위
    if (na === a && you === b) {
      result = false;
      // 가위 vs 보
    } else if (na === a && you === c) {
      result = true;
    }
    // 2차, 내가 바위를 내었을 때
    // 바위 vs 가위
    if (na === b && you === a) {
      result = true;
      //바위 vs 보
    } else if (na === b && you === c) {
      result = false;
    }
    // 3차, 내가 보를 내었을 때
    // 보 vs 가위
    if (na === c && you === a) {
      result = false;
      //보 vs 바위
    } else if (na === c && you === b) {
      result = true;
    }
  }
  return result;
}
// 가위바위보 랜덤 제네레이터 만들기
function gamBamBoRand(me: string, round: number): object {
  // 1단계, 나와 상대의 가위바위보 지도 그리기.
  let my : string[] = [];
  let other : string[] = [];
  let winCount : number = 0;
  let loseCount : number = 0;
  let average : number = 0;
  for (let i = 0; i < round; i++) {
    my.push(randomVal());
    other.push(randomVal());
  }

  my.forEach((val,index)=>{
    let boolean = compare(val,other[index]);
    if( typeof(boolean) !== "undefined"){
      if(compare(val,other[index])){
        winCount++;
      } else {
        loseCount++;
      }
    }
    
  })
  average = Math.round((winCount / round) * 100) / 100;
  let resultobj : object = {
    me: me,
    round : round,
    myChoice: my,
    otherChoice: other,
    winCount: winCount,
    loseCount: loseCount,
    average: average
  };

  return resultobj;
}


console.log(gamBamBoRand("나", 10));