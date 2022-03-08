// test1

/**
 * @description 大写首字母
 * @param {string} str
 */
function capitalize(str) {
    return str = str[0].toUpperCase() + str.substring(1).toLowerCase()
}

// 测试用例
console.log(capitalize("SArah")); // "Sarah"
console.log(capitalize("amy")); // "Amy"
console.log(capitalize("jaCkSon")); // "Jackson"

// test2

/**
 * @param {string} str
 */
function getLastCharacter(str) {
    return str[str.length - 1]
}

// 测试用例
console.log(getLastCharacter("SArah")); // "h"
console.log(getLastCharacter("amy")); // "y"
console.log(getLastCharacter("jaCkSon")); // "n"

// test3
/**
 * @param {string} str
 */
function skipFirstCharacter(str, num) {
    return str.substring(num)
}

// 测试用例
console.log(skipFirstCharacter("Javascript", 2)); // "vascript"
console.log(skipFirstCharacter("Hello", 1)); // "ello"

// test4

/**
 * @param {string} firstStr
 * @param {string} lastStr
 */
function concatString(firstStr, lastStr) {
    return str = firstStr + ' ' + lastStr
}

// 测试用例
console.log(concatString("Jennie", "Kim")); // "Jennie Kim"
console.log(concatString("Lisa", "La")); // "La Lisa"


//  test5
/**
 * @param {string} name
 */
function sayHi(name) {
    return 'Hello' + ' ' + name
}

//测试用例
console.log(sayHello("Amy")); // "Hello Amy"


// test6
/*
实现一个字符串头尾去除空格的函数
注意需要去除的空格，包括全角、半角空格
*/
function diyTrim(str) {
    return str.trim()
}

// 测试用例
console.log(diyTrim(' a f b    ')); // ->a f b
console.log(diyTrim('    ffdaf    ')); // ->ffdaf
console.log(diyTrim('1    ')); // ->1
console.log(diyTrim('　　f')); // ->f
console.log(diyTrim('  　  a f b 　　 ')); // ->a f b
console.log(diyTrim(' ')); // ->
console.log(diyTrim('　')); // ->
console.log(diyTrim('')); // ->

// test7

/*
去掉字符串str中，连续重复的地方
*/
function removeRepetition(str) {
    var result = "";
    len = str.length;
    for (i = 0; i < len; i++) {
        if (str[0] == str[1]) {
            str = str.slice(1)
        } else {
            result = result + str[0]
            str = str.slice(1)
        }
    }
    return result
}

// 测试用例
console.log(removeRepetition("aaa")); // ->a
console.log(removeRepetition("abbba")); // ->aba
console.log(removeRepetition("aabbaabb")); // ->abab
console.log(removeRepetition("")); // ->
console.log(removeRepetition("abc")); // ->abc

// test8
/**
* @@param {string} str 
* @return {Boolean} 如果是返回 true，如果不是回文字符串 返回 false
*/
function isPalindromicString(str) {
    var newStr = str.split('').reverse().join('');
    return str == newStr ? true : false
}

// 测试用例
console.log(isPalindromicString("aaa")); // ->true
console.log(isPalindromicString("madam")); // ->true
console.log(isPalindromicString("hello")); // ->false

