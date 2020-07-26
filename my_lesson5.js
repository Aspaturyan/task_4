    // 1.

let n = [6, 9, 15, 64, 99];
function maxnum(my_arr) {
    let max_num = 0;
    let min_num = 0;
    for (let i= 0; i < my_arr.length; i++){
        if (my_arr[i] > max_num) {
            min_num = max_num;
            max_num = my_arr[i];
        }else if(my_arr[i] > min_num && my_arr[i]< max_num){
            max_num = my_arr[i];
        }
    }
    return max_num;
}
alert(maxnum([6, 9, 15, 64, 99]))

    // 2.

let my_arr_1 = [1, 2, 3, 4];
function reversArray (my_arr_1){
    let rev = [];
    for (let i = my_arr_1.length - 1; i >= 0; i--){
        rev.push(my_arr_1[i])
    }return rev;
}
alert(reversArray([1, 2, 3, 4]))

    //3.

let string = "You have a huge string Implement a function that returns all words in that string in array format"
function hugestring(string){
    let my_arr_str = string.split(" ");
    return my_arr_str;
}
alert(hugestring(string))