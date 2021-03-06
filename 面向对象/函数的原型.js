/**
 * 函数也原型，函数的原型的prototype 是一个[[显示原型]]
 * 
 * [规范每一个构造函数的原型上都有constructor 他的value 会指向 构造函数本身]
 * 
 * 函数内部会创建一个对象 this指向这个对象 这个对象的__proto__ 会指向 函数的prototype  函数的prototype会指向内存中的一个对象
 * 对象里面都会有一个constructor(可以配置,不可以枚举,可写,value 会重新指向 会 函数创建的对象)
 * 
 */

// function Foo(params) {
//     /**
//      * 1. 创建一个对象
//      * 2. 改变this
//      * 3. 把对象的原型指向函数的原型prototype 
//      * 4. 返回对象
//      */
//     // const mini = {}; 
//     // this  = mini;
//     // this.__proto__ = Foo.prototype;
//     函数的
//     // return this;
// }   

// Foo.prototype  显示原型
// const foo = new Foo(); 
// const foo1 = new Foo()
/**
 * 1. 当我们创建构造函数的时候 他会在堆内存中创建一个地址
 *    然会他会有一个显示原型 指向某 个对象  假如地址如: 0x400
 *    foo.prototype = {};
 * 2. 当我们new Foo() 会返回给我们一个对象  ->  然会我这个对象的隐式原型[__proto__]  ->  会指向函数的prototype 然会他会指向ox400
 *    const foo = new Foo().__proto ->Foo.prototype  -> Object
 */

// console.log(foo.__proto__ === Foo.prototype);
// console.log(foo1.__proto__ === Foo.prototype)

/**
 * 理解函数的原型
 */
function Persion(params) {

}

let p1 = new Persion();

let p2 = new Persion();

p1.__proto__.name = '123';

/**
 * 这个修改为什么两个函数都可以拿到?
 * 答: 因为函数返回的对象 __proto__ 指向的是函数的 prototype 然后他们都会指向堆内存中的某个内存地址的对象
 */
console.log(p1.name, p2.name); // 123 123

/**
 * 修改原型方法
 */

// 第一种
Persion.prototype.name = '1112121';

// 直接修改
Persion.prototype = {
    constructor: Persion,
    name: '23232',
}
// 真实开发添加 constructor
Object.defineProperty(Persion, 'constructor', {
    configurable: true,
    enumerable: false,
    writable: true,
    value: Persion
})