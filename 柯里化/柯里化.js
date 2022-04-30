/**
 * 柯里化的理解：
 * 1. 讲一个函数传参，进行分解多个函数
//  * 2. 拆分逻辑，进行服用
//  */


// /**
//  * 如下例子： log函数
//  * # 功能： 打印一个 19：90 :DEBUGGER: 找到的bug
//  */

// const noLog = (time, type, message) => {
//     return `[${time}] - ${type} - ${message}`;
// };
// /**
//  *  使用。
//  *  但是我们发现一个'2020-4-27'  DEBUGGER 一直都是重复的输入
//  */
// noLog('2020-4-27', 'DEBUGGER', '找到了一个问题');
// noLog('2020-4-27', 'DEBUGGER', '找到了一个问题');
// noLog('2020-4-27', 'DEBUGGER', '找到了一个问题');
// noLog('2020-4-27', 'DEBUGGER', '找到了一个问题');
// noLog('2020-4-27', 'DEBUGGER', '找到了一个问题');
// /**
//  * 使用柯里化进行优化
//  * 下面就可以进行逻辑的抽离 每一个函数只做自己的事情。
//  */
// const nowAndDateLog = time => type => message => `[${time}] - ${type} - ${message}`;
// // 使用当前的时间
// const currentTimeLog = nowAndDateLog('2020-4-27');
// // debugger log
// const debuggerLog = currentTimeLog('DEBUGGER');
// console.log(debuggerLog('找到了问题'));
// console.log(debuggerLog('找到了问题1'));



function sun(a, b, c) {
    console.log(this)
    console.log(a, b, c, 'ccccc')
}

let obj = {
    sun
}

/**
 *  拿你需要穿入的变量和执行的函数相同
 * 
 * 
 *  柯里化是一个函数返回一个函数然后在返回一个函数
 *  组合是 结果依赖上一个函数的结果 在执行
 */

// fn 就是一个变量和他的作用域是没有关系的
function hyCurrying(fn) { // fn = obj.fn
    function Currying(...args) {
        if (args.length >= fn.length) {
            // 如果不绑定这个this fn 指向的是window 和Currying的作用域就是不同的 必须要保持一直
            // Currying ==> obj  fn === window
            // 为了this 统一
            return fn.call(this, ...args)
            // return fn(...args) // obj.fn
        } else {
            // args == 1 2你就没办法获取了 你只能在返回一个新的函数去接受2 然后在执行fn(新传递的值+旧传递的值)
            // fn()


            // 闭包
            // 为了this 统一
            function Currying2(...args2) {
                return Currying.call(this, ...args, ...args2)
                // return Currying(...args, ...args2)
            };
            
            // 这个返回新的函数是为了获取新传递的值和上一个函数拼接起来
            return Currying2
        };
    };
    return Currying;
}



let h = hyCurrying(sun)
h(1)(2)(3)

/**
 * 柯里化执行
 * 
 * 
 * 
 * fn就是一个变量 作用域是在他声明函数的时候就确认了
 * Currying的this 是在调用的时候确认的 如果他调用的时候不是全局 那就和fn的this 指向 不一致了！！！
 * 所以他要使用call 绑定  让fn 和Currying的this 保持一致
 */