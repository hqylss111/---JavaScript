// /**
//  * 不管函数或者构造函数的他原型链顶层都是 指向的是  [Object: null prototype] {}
//  * 
//  */




// /**
//  * * 1.对象
//  *  let obj = {};
//  *   object.__proto__ ->(顶层的对象) new Object.__proto__ ->  null
//  */
// let obj = {};
// console.log(obj.__proto__.__proto__) // null

// /**
//  * 2. 构造函数的原型链 最终也是指向的是 顶层的Object
//  */
// function Person() {
//     /**
//      * let mini = {};
//      * this = {};
//      * this.__proto___ = Person.prototype
//      * return {};
//      */
// };
// // 多指了一层是因为构造函数 内部会创建一个对象 然后这个对象有一个隐式原型 
// console.log(Person.prototype.__proto__.__proto__) // null


// function Person(params) {
//     this.name = 'why'
// };
// Person.prototype.eating = function(){
//     console.log(this.name + ' eating');
// }

// function Studying(params) {
//     this.son = 111;
// }
// // 这样肯定是拿不到name  因为你是 跳过了__proto__ 直接指向了他的Prototype
// Studying.prototype = Person.prototype;

// console.log(new Studying().eating())