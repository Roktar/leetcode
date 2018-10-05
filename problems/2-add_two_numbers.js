/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    return calculation(getValue(l1), getValue(l2));
};

function getValue(node) {
    let new_arr = [];
    while(node) {
        new_arr.push(node.val);
        node = node.next;
    }
    return new_arr;
}

function calculation(a, b) {
    if( a.length != b.length )
        equalizeArray(a, b);
    let new_arr = [];
    let carry = 0;

    for(let i=0, len = a.length; i < len; i++ ) {
        let v = a[i] + b[i] + carry;
        if( v > 9 ) {
            carry = 1;
            v %= 10;
        } else
            carry = 0;
        new_arr.push(v);
    }
    if(carry > 0)
        new_arr.push(carry);
    return new_arr;
}

function equalizeArray(a, b) {
    let diff = (a.length > b.length ? a.length - b.length : b.length - a.length);
    let target_arr = (a.length > b.length ? b : a);
    
    for(let i=0; i < diff; i++)
        target_arr.push(0);
}