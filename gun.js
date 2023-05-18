var a, b, c;
a = "가위"; // 가위
b = "바위"; // 바위
c = "보"; // 보 
var rules = [a, b, c];
function randomVal() {
    var randomNum = Math.round(Math.random() * (rules.length - 1));
    return rules[randomNum];
}
function isSame(na, you) {
    var result = false;
    if (na === you) {
        result = true;
    }
    return result;
}
function compare(na, you) {
    var result = false;
    if (isSame(na, you)) {
        result = undefined;
    }
    else {
        // 1차, 내가 가위를 내었을 때.
        // 가위 vs 바위
        if (na === a && you === b) {
            result = false;
            // 가위 vs 보
        }
        else if (na === a && you === c) {
            result = true;
        }
        // 2차, 내가 바위를 내었을 때
        // 바위 vs 가위
        if (na === b && you === a) {
            result = true;
            //바위 vs 보
        }
        else if (na === b && you === c) {
            result = false;
        }
        // 3차, 내가 보를 내었을 때
        // 보 vs 가위
        if (na === c && you === a) {
            result = false;
            //보 vs 바위
        }
        else if (na === c && you === b) {
            result = true;
        }
    }
    return result;
}
// 가위바위보 랜덤 제네레이터 만들기
function gamBamBoRand(me, round) {
    // 1단계, 나와 상대의 가위바위보 지도 그리기.
    var my = [];
    var other = [];
    var winCount = 0;
    var loseCount = 0;
    var average = 0;
    for (var i = 0; i < round; i++) {
        my.push(randomVal());
        other.push(randomVal());
    }
    my.forEach(function (val, index) {
        var boolean = compare(val, other[index]);
        if (typeof (boolean) !== "undefined") {
            if (compare(val, other[index])) {
                winCount++;
            }
            else {
                loseCount++;
            }
        }
    });
    average = Math.round((winCount / round) * 100) / 100;
    var resultobj = {
        me: me,
        round: round,
        myChoice: my,
        otherChoice: other,
        winCount: winCount,
        loseCount: loseCount,
        average: average
    };
    return resultobj;
}
console.log(gamBamBoRand("나", 10));
