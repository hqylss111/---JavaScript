/**
 * this 的显示绑定
 *      是执行的时候去绑定的
 */

function foo(params) {
    console.log(this);
}

let obj = {
    name:'111'
};


foo.call(obj,'222');
foo.apply(obj,'2');
const fn = foo.bind(obj) //会返回一个新的函数
fn();