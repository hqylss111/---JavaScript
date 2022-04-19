// var a = 100;

// function foo (){
//     console.log(a);
//       a = 200;
// }

// foo();



/**
 * 作用域面试提
 */
function foo() {
  var a = b = 10;
  // 他会解析下面的两行代码
  var a = 10; // a 是在foo 的 ao里面执行上下文中
  b = 10;
}

foo();

// console.log(a)
console.log(b);

