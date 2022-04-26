Function.prototype._call = function (thisArg, ...args) {
  /**
   * 这里的fn 就类似于
   *  obj = {
   *   fn : function(){}
   * }
   */
  // fn 其实就是 foo函数
  let fn = this;

  /**
   * 问题：
   * 1.使用call的时候可以传递 this
   * 2.使用call的时候可以传递参数
   */


  /**
   *  (！！！把fn显示绑定到thisArge身上)
   *  (这个时候他的this 肯定是指向的是 thisArg这个对象身上)
   *  
   * 
   * 如果 我传递的 number 和 string  比如1.fn '222'.fn 肯定会报错的
   */
  // thisArg ? Object(thisArg) : window; 这个是为了 如果我传递的null或者undefined 我们的this 要指向到全局
  thisArg = thisArg ? Object(thisArg) : window;
  thisArg.fn = fn;
  return thisArg.fn(...args);
}

function foo(name) {
  console.log('foo', this, name)
}
/**
 * 这个就是显示绑定调用 绑定到了Function object身上了
 * 所以他的this -> Function
 */
foo._call(1, 1111)


Function.prototype._apply = function (thisArg, args) {
    /**
     * 现在的this 肯定是指向得是调用函数的本身
     * 比如现在肯定是foo函数
     */

    args = args || []

    if (!Array.isArray(args)) {
        console.log('--00')
        throw new Error('Uncaught TypeError: CreateListFromArrayLike called on non-object');
    }
    let fn = this;

    /**
     * 把函数fn 显示绑定到thisArg这个对象身上 这样this就会指向thisArg
     */
    // 增加这个判断是怕万一是 字符串或者数字 这样是没办法执行的所以要使用对象包裹
    // _apply() 1. 可以传递this 和 传递参数 参数是一个数组
    thisArg.fn = thisArg ? Object(fn) : window;
    return thisArg.fn(...args);
}

function foo(n1, n2) {
    console.log(n1,n2)
    return n1 + n2
}

/**
 *  它也是显示绑定到Function Objcct身上了
 *  所以他的this 肯定是指向的function
 */
const result = foo._apply({}, [1, 2]);
console.log(result);


Function.prototype._bind = function (thisArg, ...parentArg) {
  /**
   * 这个this是显示绑定
   * 绑定到的function 对象身上 所以他 this 肯定就是调用的函数本身
   */
  let fn = this;
  
  /**
   * 这个是判断thisarg 为空的时候
   * 如果不是就把假如是string和number 要转成对象  因为假如1.fn() '2232'.fn() 会报错
   */
  thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window;
  return function (...args) {
    /**
     * 这个是显示绑定 绑定到thisarg对象上 
     * 这样这个this 肯定是指向 thisArg这个对象上
     * 然后使用闭包 上面的thiarg不会被销毁的
     * 当我使用这个函数的时候 会往上找 然后找到的thisArg 然后找到thisArg对象 燃石thisArg就是使用传递过来的this
     */
    thisArg.fn = fn;
    return thisArg.fn(...[...parentArg, ...args]);
  }
}
function foo(num1, num2, num3) {
  console.log(num1, num2, num3, this);
  return num1 + num2 + num3
}
console.log(foo._bind({}, 1, 2)(1));