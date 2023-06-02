// let character = 'yamato';
// let age = 30;
// let isBlackBelt = false;

import { type } from "os";

// // character = 20;
// age = 40;

// isBlackBelt = true;

// const circ = (diameter: number) => {
//     return diameter * Math.PI;
// }

// console.log(circ(7));

///ARRAY

let names = ['aaaa', 'bbbbbb', 'ccccc'];
names.push(11111);

////////explicit　before giving value////////

//1.types
let caracter : string;
let age : number;
let isLoggedIn : boolean;

//2.Array
let ninja: string[] = [];
//empty arrayを設定したい場合の書き方
ninja.push('yamamoto');

// 3.union type in Array (mix types)　もしくは何が入るかわからない場合はanyを使うといい！
let mixedarray: (string|number|boolean)[] = [];
mixedarray.push('hello');
mixedarray.push(44);
mixedarray.push(false);

console.log(mixedarray);
// console print ['hello', 44, false]

// 4.union type normal value
let uid: string|number;
uid = 'keiko'
uid = 222

//5. objects
let ninjaOne: object;
ninjaOne = {name:'keiko', age: 30}

let ninjaTwo : {
    name: string,
    age: number,
    beltColor: string
}
ninjaTwo = {name: 'keiko', age: 30, beltColor: 'black'}
//ここでもobjectのkeyを変えたり、objectの中の数を変えたりすることはできない！typeを変えたい場合は事前にANY で設定しておく


////////ANY TYPES////////
//ーーanyはどんなtypeでも受け入れられる（string|number| bpplean| array| object　全部可能）ーー
let age: any
age = 25

let age: any = 25;
//上と下は同じこと

age = {name:'yahoo', age: 30}
age = true;
age = 30;
age = 'anything is ok';

//Arrayの場合
let mixingarray: any[] = [];
mixingarray.push(5);
mixingarray.push('yaho');
mixingarray.push(true);

//Objectの場合 (ただし後でごちゃごちゃになりやすいの気をつけること)
let ninninarray: {name:any, age:any};
ninninarray = {name: 'keiko', age: 22};
ninninarray = {name: 22, age: 'keiko'};

// ==========FUNCTION================================
//Function は必ずbig letterで始まる！
let greet : Function;
greet = () => {
    console.log('hey');
}

// 実際に使うか渡らないvalueに関しては ? をつけることで、使わなくてもOK
//Defaultで事前にpassingしてしまう場合は (default = 10) & ? いらない
// c: number | string = 10
const add = (a: number, b: number, c?: number|string) => {
    console.log(a + b);
    console.log(c);
}
add(5, 10)

//この場合、resultのtypeはreturn a + b; と同じものになる！
const minus = (a: number , b:number ) => {
    return a + b;
}
let result = minus(10, 7);
//もし大きいFunctionになる場合は、事前にtypeをsetすること！
const minuss = (a: number , b:number ): number => {
    return a + b;
}
//functionが何もreturnしない場合はvoidをreturnすることになってる
const adddd = (a: number, b: number, c?: number|string):void => {
    console.log(a + b);
    console.log(c);
}
adddd(5, 10)

// Typeのdefineをなん度もするとcodeが長くなるので事前にvaliableを作っておくこと可能！
type StringOrNum = string | number;
type objWithName = {name: string, uid: StringOrNum}
const logDetail = (uid: StringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}
// const logs = (user: { name: string, uid: StringOrNum}) => {
const logs = (user: objWithName) => {
    console.log(`${user.name} has a uid of ${user.uid}`);
}





