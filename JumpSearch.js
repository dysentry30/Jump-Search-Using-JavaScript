// * Reference https://www.geeksforgeeks.org/jump-search/
const arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610];
const target = 233;
// * Best Step is jumpIndex = sqrt(arr.length)
const jumpIndex = Math.floor(Math.sqrt(arr.length));
let res = undefined;
function JumpSearch(jump, target, arr) {
    // * After find element is greater than target,
    // * and then find target index using linear search
    if (arr[jump] > target || arr[jump] == undefined) {
        jump -= jump;
        res = LinearSearch(jump, target, arr);
    }
    // * if result greater than 0
    // * return result
    if (res > 0) {
        return res;

        // * if result not found then return Not Found
    } else if (res == -1) {
        return "Not Found";
    }
    return JumpSearch(jump += jumpIndex, target, arr);
}

function LinearSearch(pointer, target, arr) {
    if (pointer > arr.length - 1) {
        return -1;
    }
    if (target == arr[pointer]) {
        return pointer;
    }
    return LinearSearch(++pointer, target, arr);
}

console.time("Jump Search");
let result = JumpSearch(jumpIndex, target, arr);
console.timeEnd("Jump Search");
console.log(result);