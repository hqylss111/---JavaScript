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
            // 闭包
            // 为了this 统一
            function Currying2(...args2) {
                return Currying.call(this, ...args, ...args2)
                // return Currying(...args, ...args2)
            };
            return Currying2
        };
    };
    return Currying;
}


let objtest =  {
    list: hyCurrying(sun)
}


objtest.list(1,1,1);


/**
 * 柯里化执行
 * hyCurrying(10)(20)(30)
 * 
 * 
 * fn就是一个变量 作用域是在他声明函数的时候就确认了
 * Currying的this 是在调用的时候确认的 如果他调用的时候不是全局 那就和fn的this 指向 不一致了！！！
 * 所以他要使用call 绑定  让fn 和Currying的this 保持一致
 */