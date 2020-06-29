/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let v = parseInt([...x.toString()].reduce( (arr, v, i) => {
        if(arr.length > 0)
            arr.splice(0, 0, v);
        else
            arr.push(v);
        return arr;
    }, [] ).join(""));
    
    return v > (2**31-1) ? 0:v*(x<0? -1:1);
};

// 2
var reverse = function(x) {
    let v = Number([...(x < 0 ? x*(-1):x).toString()].reverse().join``);
    
    return v > 2**31-1 ? 0 : v*(x < 0 ? -1:1);
};