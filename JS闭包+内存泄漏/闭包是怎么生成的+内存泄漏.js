function foo() {
    var name = '1111';
    function bar() {
        console.log('bar', name);
    }
    return bar;
}

const fn = foo();
fn();

// 例子:
var age = 111
function test(params) {
    console.log(age); //他也是一个闭包 只不过他是访问的全局变量而已
}

/**
 * 闭包是怎么形成的:
 * # 函数是在执行的时候才会产生执行上下文的时候才会进行解析,会产生 上级作用域  ao  和执行体
 * 1. 会创建一个执行栈 和创建一个堆  堆里面有一个 foo 的地址 oxoo  bar ox11
 * 2. 开发词法解析
 * 然后fn =  oxoo()
 * 只想fn
 * 然后创建 fo 的ao对象
 * name = 11111; // 这个name 不会被销毁 因为bar 在指向他
 * 然后返回ox11
 * 执行结束 foo 跳出执行栈
 * 
 * 
 * 然后fn = ox11
 * 然后开始执行fn
 * 
 * 然后bar 有个执行上下文
 * 里面什么都没有 所以是空的
 * 
 * 然后打印 本来 foo执行完 这个函数就会被销毁 但是因为bar 访问了foo的name 所以他没有被销毁 这个js帮我们做的事情
 * 
 * 然后执行代码 
 * 打印了 bar 然后根据作用域链去寻找父作用域 找到了name 然后生成了闭包
 * 
 * 总结：一个函数: 访问了上级作用域的自由变量,就是闭包
 * 1 侠义的讲： 只要一个函数 访问了上级的自由变量 他就是闭包
 * 
 */


function foo1() {
    var name = '1111';
    function bar1() {
        console.log('bar',name);
    }
    return bar1;
}

const fn1 = foo();
fn();
/**
 * 销毁： 是指全局变量没有任何参数指向他的内存空间，他执行会玩就会销毁
 * bar1 parentScope 的ao 指向的 foo1 所以foo1函数执行完 就算执行完了他也不会被销毁 因为bar的作用域指向的是他
 * bar1 是被fn1 接受的 所以fn1   指向的是 ->bar1  然后bar1 作用域指向的是 => foo1   所以就形成了闭包 而且foo1 内存对象不会被销毁
 * fn1 执行完就会被销毁 但是foo1不会被销毁
 */


 function foo2() {
    var name = '1111';
    function bar2() {
        console.log('bar');
    }
    return bar1;
}

const fn2 = foo();
fn();
