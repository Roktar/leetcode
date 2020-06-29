6. ZigZag Conversion

> 함수 원형
var convert = function(s, numRows)

- 해당 문제는 입력문자열을 섞어 결과를 반환한다.
- 문자열을 가로방향으로 읽으면서 읽은 각 문자는 세로방향으로 써내려가는데 세로방향의 최대 진행방향은 numRows까지다.
- numRows가 3인 경우, s의 길이까지 0,1,2,1,0 을 반복한다.