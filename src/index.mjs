/**
 * const let等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き"
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言"
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// letは再宣言不可能
// let val2 = "let再宣言";
// console.log(val2);

// const val3 = "const変数";
// console.log(val3);

// const変数は上書き不可
// val3 = "const変数上書き";

// const val3 = "const変数を再宣言";

// const val4 = {
//   name: "ジャケ",
//   age: 28,
// };
// console.log(val4);

// // constで定義したオブジェクトはプロパティの変更が可能
// val4.name = "jak"
// val4.addres = "hiroshima"
// console.log(val4);

// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);


/**
 * テンプレート文字列
 */
const name = "じゃyけ";
const age = 28;
// 私の名前はジャケです。年齢は２８歳です。

//従来の方法
const messege1 = "私の名前は" + name + "です。年齢は" + age + "歳です。"
console.log(messege1);

// テンプレート文字列を用いいた方法
const messege2 = `私の名前は${name}です。年齢は${age}歳です。
`
console.log(messege2);
