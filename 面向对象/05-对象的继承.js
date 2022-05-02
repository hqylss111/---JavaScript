// function Person(params) {
//     this.name = 'why';
//     // this.hello = function(){

//     // }
// };
// Person.prototype.eating = function(){
//     console.log( {this.name + ' eating');
// }

// function Studying(params) {
//     this.son = 111;
// }
// // 这样肯定是拿不到name  因为你是 跳过了__proto__ 直接指向了他的Prototype 这个一定要先前面
// Studying.prototype = new Person();

// Studying.prototype.hello = function(){
//     console.log('hello')
// }



// // 这个对象上添加了一个属性
// Studying.prototype.xxx  =() => {

// }
// // xxx就没了
// Studying.prototype = {};





/**
 * 使用   原型链继承的弊端
 * 1. 打印是看不成继承的属性的
 * 2. 如果继承的对象是引用类型 然后修改引用类型的值  会相互影响
 * 3。传递参数的问题 无法传递
 */

function Person(params) {
    this.name = 'why';
    this.list = [];
};
Person.prototype.eating = function () {
    console.log(this.name + ' eating');
}

function Studying(params) {
   
    this.son = 111;
}
// 这样肯定是拿不到name  因为你是 跳过了__proto__ 直接指向了他的Prototype 这个一定要先前面
Studying.prototype = new Person();

Studying.prototype.hello = function () {
    console.log('hello')
}

let s1 = new Studying();
let s2 = new Studying();

// 这个意思是获取了这个属性 然后往这个属性上添加了东西 使用了[[get]]操作 通过原型链找到了这个对象
s1.list.push('222');
// 这样才是给s1这个对象上添加了一个list属性  
s1.list = []; 
// // [] 或者 object 是引用类型 他会在堆内存中创建了一个地址 s1 s2通过原型链找到的都是同一个地址
console.log(s1.list); // ['222']
console.log(s2.list);//  ['222']

// 区别

s1.name  = 'hello';
//这个是字面类型 他是相当于在 s1这个对象上 添加了一个name属性 = hello
console.log(s1.name); // hello
console.log(s2.name);//  why

