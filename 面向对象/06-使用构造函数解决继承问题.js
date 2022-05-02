
/**
 * 
 * 使用   原型链继承的弊端
 * 1. 打印是看不成继承的属性的
 * 2. 如果继承的对象是引用类型 然后修改引用类型的值  会相互影响
 * 3。传递参数的问题 无法传递
 */

/**
  *借用构造函数解决继承问题 弊端
  1. Person至少会调用了两次
  2. 会在原来的原型对象上多了好几个属性 本来是不应该存在的这个对象
 */

function Person(name, list) {
    /**
     * 这里的this 其实就是Studying Studying.name = name  Studying.list = list
     */
    this.name = name;
    this.list = list;
};
Person.prototype.eating = function () {
    console.log(this.name + ' eating');
}

/**
 * ！！！！！ 借用构造函数解决继承问题
 */
function Studying(name, list, son) {
    Person.call(this, name, list); 
    this.son = son;
}

// 这样肯定是拿不到name  因为你是 跳过了__proto__ 直接指向了他的Prototype 这个一定要先前面
Studying.prototype = new Person();

Studying.prototype.hello = function () {
    console.log('hello')
}

let s1 = new Studying('ls',['1'],1);
let s2 = new Studying('mt',[2],'2');

// 问题1 打印是看不成继承的属性的
console.log(s1)

// 问题2  引用类型会相互影响  问题3 无法传递值 也解决了
s1.list.push('22222');
console.log(s1.list); // [1,'2222]
console.log(s2.list); // [2]





