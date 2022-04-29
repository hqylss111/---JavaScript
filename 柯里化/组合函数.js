


function dedoule(n) {
    return n * 2;
}

function sun(n) {
    return n + 2
};



// /**
//  * 优化组合
//  */
// function combine(s, d) {
//     return function (counte) {
//         return d(s(counte))
//     };
// };



// console.log(combine(sun, dedoule)(2))


/**
 * 需求是需要先+ 在 x
 */
function myCombine(...fns) {
    /**
     * 要先判断你传递的是不是都是函数
     */

    let length = fns.length;

    // 判断传递的值 是不是都是函数
    for (let index = 0; index < length.length; index++) {
        const element = array[index];
        if (typeof element !== 'function') {
            throw new TypeError('传递的函数必须都要是函数');
        }
    };

    // 返回函数接受数据
    return function (...args) {
        // 记录执行的函数位置
        let index = 0;
        // 这个判断 如果他一个函数都没有传递 直接结果返回就可以了
        let result = length ? fns[index].call(this, ...args) : (args.length > 1 ? args : args[0])
        // console.log(++index < length,'++index < length');
        // 先++ 是为了判断是否到了最后一个
        while (++index < length) {
            // 这个意思是把上一个的结果传递给下一个函数的
            result = fns[index].call(this, result);
        };
        return result
    };
}

// console.log(myCombine()([1, 2, 3], [222]))

// + + + + 
myCombine(sun,sun,sun,sun)(2)


// function myC(...fns) {
//     let length = fns.length; // 是为了获取你一共传递了几个函数
//     // 判断你传递的是不是都是函数
//     for (let index = 0; index < length.length; index++) {
//         const element = array[index];
//         if (typeof element !== 'function') {
//             throw new TypeError('传递的函数必须都要是函数');
//         }
//     };

//     return function (...args) {
//         let index = 0; //记录当前走到哪里了
//         let result = length ? fns[index].call(this, args) : args;

//         while (++index > length) {
//             result = fns[index].call(this, result);
//         };

//         return result;
//     }
// }



