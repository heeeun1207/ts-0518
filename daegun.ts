// 가위바위보 알고리즘 작성법
// 우리는 주식이라는 이미지 때문에 이를 기계로 다룰 방법을 고려했지만, "주식"이라는 언어는 없기에 해당 데이터를 "어떻게" 분석하고 "어떻게" 추천할지 우리가 정의해주어야 한다.
// 그렇기에, 우리는 가위바위보 알고리즘을 작성해보며, 이른바 가위바위보 공식, 매커니즘을 만드는 법을 분석한다.
// 가위바위보, 가위 ga, 보 bo, 바위(주먹) ju,
// 생각이 엉킨 걸 풀어내는 중

// 생각 엉킨 것 정리하기 1단계 - 이름 만들기, 대전제
// 정확하게 함수 이름을 정해놓고 전해야 한다.
function gamBamBo(na: string, you: string): boolean {
  // 생각 엉킨 것 정리하디 2단계 - 규칙 적어놓기. 불변 전제
  // 설계에서는 불변 전제가 있다. 가위바위보에서도 그렇다. 아래의 전제는 불변전제로서 바뀌지 않는다.
  // 가위는 바위에게 지고, 보자기에게 이긴다.
  // 바위는 보자기에게 지고, 가위에게 이긴다.
  // 보는 가위에게 지고, 바위에게 이긴다.
  let rules = ["가위","바위","보"]
  let a: null | string, b: null | string, c: null | string;
  a = "ga"; // 가위
  b = "ju"; // 바위
  c = "bo"; // 보 

  let result: boolean = false;

  try {
    if (na !== a && na !== b && na !== c) {
      throw new Error("가위바위보에서 다른 거 내기 없기!");
      
    } else if(you !== a && you !== b && you !== c) {
      throw new Error("가위바위보에서 다른 거 내기 없기!");
    }
    

    // 같은 것을 냈을 경우
    if (na === you) {
      console.log("비겼습니다. 다시한번 하십시요.")
      result = false;
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
  } catch (err) {
    console.log("가위바위보에 다른거 내기 없기!")
  }

  return result;
}

console.log(gamBamBo("ja", "ga"));