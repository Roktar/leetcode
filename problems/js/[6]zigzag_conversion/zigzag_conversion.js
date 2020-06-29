/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1)
        return s;
    
    let arr = new Array(numRows).fill(0).map( () => []);
    let idx = 0, dir = -1;
    
    for(let i=0; i<s.length; i++) {
        arr[idx].push(s[i]);
        
        if(idx === numRows-1 || idx < 1)
            dir = -dir;
        
        idx += dir;
    }
    
    return arr.map( v => v.join`` ).join(``);
};