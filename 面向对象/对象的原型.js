
/**
 * ## 每一个对象,都会有一个原型 [[prototype]] , 这个属性称为对象的原型是一个[[隐式原型]]。
 */

/**
 * 在es5之前，浏览器实现了 每个对象身上都有一个 __proto__
 * es5 以后可以使用Object.getPrototypeOf 查询某个对象的原型
 */


let obj = {
    age :1
};

obj.__proto__.name = 'name'

console.log(obj.name);

/**
 * 查找过程：
 * 1. 他会先从obj本身的对象上寻找name。
 * 2. 如果没有寻找到name 他会往对象的原型上寻找。
 */


 