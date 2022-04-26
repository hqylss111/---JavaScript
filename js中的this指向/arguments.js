
/**
 * 如下代码分析
 */
Array.prototype._splice = function (start, end) {
    // 这里的this 就是你传递过来的数组 arguments
    let arr = this;
    let newArr = [];
    
    start = start || 0;
    end = end || arr.length;

    console.log(arr.length)
    for (let index = start; index < end; index++) {
        newArr.push(arr[index])
    }
    return newArr
};

function foo(num1, num2, num2) {
    /**
     * 需求需要把arguments转成数组
     * 会使用下面的代码
     */

    /**
     * 对下面的代码进行分析
     * this就是在调用的时候进行绑定的
     * [].splice(1,1);
     * 1.目前你没有数组 没有办法进行调用调用函数你就必须从Array对象上拿到这个方法进行执行。
     * 2. 因为都没有办法执行了,然后你肯定是没办法知道这个数组是什么，所以你只能显示绑定this到arguments身上 所以他的this就指向到了arguments
     */

    let arr = Array.prototype._splice.call(arguments, 1, 2);

    console.log(arr)
}

foo(1, 2, 3)