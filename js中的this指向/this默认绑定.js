/**
 * 总结：默认绑定
 *      只要是独立调用的函数 他的this 都是指向的是全局 node是{}  浏览器是window
 *      1. 是在定义的未知是没有关系的。
 *      2. this是在调用的时候绑定关系的
 */


// 案例1
function foo2(params) {
    function foo1(params) {
        console.log(this,'foooo1');
    }
    foo1()
}

function fo03(params) {
    foo2()
}


fo03();
// 他们三个的this 都是指向的全局
// 因为他是独立执行的 不是比如obj.axxx()  所以指向的都是全局
// 因为他是独立执行的函数  所以this指向 指向的是全局 win


/**
 * 案例2
 */
function foo1(params) {
    function bar(params) {
        
    }
    return bar
};

const fn = foo1();
fn(); // 因为他返回了一个函数fn接受了他 然后执行的时候他也是独立执行的所以的他的this肯定是指向的window


/**
 * 
 */