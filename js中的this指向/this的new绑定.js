/**
 * 我们可以通过一个new 的关键字来绑定this
 */

function Parent(name,age) {
    this.name = name;
    this.age = age;
}

const P = new Parent('1',2);
console.log(P.age,P.name);
