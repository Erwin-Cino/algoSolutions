//write a function that, given an integer N, return the maximum possible value obtainable by deleting one '5' digit from 
//digital representation of N. it is guaranteed N will contain at least one '5' digit.
// give N = 15958, the function sould return 1958

function maxFive(N) {
    let str = N.toString();
    let max = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '5') {
            str = str.slice(0, i) + str.slice(i + 1);
            max = Math.max(max, parseInt(str));
            str = N.toString();
        }
    }
    return max;
}