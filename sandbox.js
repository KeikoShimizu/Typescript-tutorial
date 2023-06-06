"use strict";
// let character = 'yamato';
// let age = 30;
// let isBlackBelt = false;
Object.defineProperty(exports, "__esModule", { value: true });
// // character = 20;
// age = 40;
// isBlackBelt = true;
// const circ = (diameter: number) => {
//     return diameter * Math.PI;
// }
// console.log(circ(7));
///ARRAY
var names = ['aaaa', 'bbbbbb', 'ccccc'];
names.push(11111);
////////explicit　before giving value////////
//1.types
var caracter;
var age;
var isLoggedIn;
//2.Array
var ninja = [];
//empty arrayを設定したい場合の書き方
ninja.push('yamamoto');
// 3.union type in Array (mix types)　もしくは何が入るかわからない場合はanyを使うといい！
var mixedarray = [];
mixedarray.push('hello');
mixedarray.push(44);
mixedarray.push(false);
console.log(mixedarray);
// console print ['hello', 44, false]
// 4.union type normal value
var uid;
uid = 'keiko';
uid = 222;
//5. objects
var ninjaOne;
ninjaOne = { name: 'keiko', age: 30 };
var ninjaTwo;
ninjaTwo = { name: 'keiko', age: 30, beltColor: 'black' };
//ここでもobjectのkeyを変えたり、objectの中の数を変えたりすることはできない！typeを変えたい場合は事前にANY で設定しておく
////////ANY TYPES////////
//ーーanyはどんなtypeでも受け入れられる（string|number| bpplean| array| object　全部可能）ーー
var age;
age = 25;
var age = 25;
//上と下は同じこと
age = { name: 'yahoo', age: 30 };
age = true;
age = 30;
age = 'anything is ok';
//Arrayの場合
var mixingarray = [];
mixingarray.push(5);
mixingarray.push('yaho');
mixingarray.push(true);
//Objectの場合 (ただし後でごちゃごちゃになりやすいの気をつけること)
var ninninarray;
ninninarray = { name: 'keiko', age: 22 };
ninninarray = { name: 22, age: 'keiko' };
// ==========FUNCTION================================
//Function は必ずbig letterで始まる！
var greet;
greet = function () {
    console.log('hey');
};
// 実際に使うか渡らないvalueに関しては ? をつけることで、使わなくてもOK
//Defaultで事前にpassingしてしまう場合は (default = 10) & question ? はいらない
// c: number | string = 10
var add = function (a, b, c) {
    console.log(a + b);
    console.log(c);
};
add(5, 10);
//この場合、resultのtypeはreturn a + b; と同じものになる！
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 7);
//もし大きいFunctionになる場合は、事前にtypeをsetすること！
var minuss = function (a, b) {
    return a + b;
};
//functionが何もreturnしない場合はvoidをreturnすることになってる
var adddd = function (a, b, c) {
    console.log(a + b);
    console.log(c);
};
adddd(5, 10);
var logDetail = function (uid, item) {
    console.log("".concat(item, " has a uid of ").concat(uid));
};
// const logs = (user: { name: string, uid: StringOrNum}) => {
var logs = function (user) {
    console.log("".concat(user.name, " has a uid of ").concat(user.uid));
};
//===========　typeが混ざっている場合 ==========================
//ex:1
var green;
//ex:2
var calc;
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
//ex:3
var loglogs;
loglogs = function (ninja) {
    console.log("".concat(ninja.name, " is ").concat(ninja.age, " years old"));
};
