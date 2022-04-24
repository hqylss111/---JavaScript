// /**
//  * this 绑定优先级
//  * 1. new最高
//  * 2. 显示绑定
//  * 3. 隐式绑定
//  * 4. 默认绑定
//  */
// // function foo(params) {
// //  console.log(this);
// // }
// // foo.bind('abc').bind('efc')();



// function name(params) {
//     let target = [1, 2, 3];
//     let arr = [1, 2];

//     const set = new Set();

//     target.forEach(item => {
//         set.add(item)
//     })

//     arr.forEach(item => {
//         if (set.has(item)) {
//             set.delete(item);
//         }
//     })

//     console.log([...set]);

//     // target.forEach(item => {
//     //     map.(item, item)
//     // })

//     // arr.forEach(item => {
//     //     if (map.has(item)) {
//     //         map.delete(item);
//     //     }
//     // });

//     // console.log([...map])

//     // console.log(map,'--');


// }

// name();


var name = 'window';
 

var obj = {
    name: 'proent',
    foo: function (params) {
        console.log(this.name, '---')
    },
    foo1: () => {
        console.log(this.name, '-----')
    },
    foo3: function () {
        return function () {
            console.log(this.name);
        }
    },
    foo4:function(){
        return () => {
            console.log(this.name)
        }
    }
};
// obj.foo();// 显示绑定 在执行的时候显示绑定到了obj身上了
/**
 * 对象定义的时候和作用域是没有关系的，this是在调用的时候绑定this的  所以的他this 是全局
 */
// obj.foo1.call('1111');

// // 独立函数调用
// let cccc = obj.foo3()
// // 独立调用
// cccc()
obj.foo3.call('1111')()
// 意思是
let _foo3 =  obj.foo3.call('111');
_foo3(); //他还是独立调用 所以他的this是全局

obj.foo3().call('111')
// 意思是
let _callfoo3 = obj.foo3();
_callfoo3.call('111'); //111


/**
 * 箭头函数是没有this的 但是指向的上级函数 上级函数有this 所以他的this是显示绑定指向的
 * 是obj 然后他的this就是obj
 */
obj.foo4()();
/**
 *   这个意思是我先去修改foo4的this指向
 *  这个时候this指向的 '1' 然后我执行返回的箭头函数 这个时候this已经改变了 他去上级找 找到了1 然后是1 
 */
obj.foo4.call('1')()
/**
 * 他的this指向的是obj 因为箭头函数不能修改this 所以他去上级找还是找到的是obj
 */
obj.foo4().call(1);





/**
 * 对象和是没有作用域的
 */
var testObj = {
    name:'111',
    foo:function(){

    }
}


/**
 * 这样才会有作用域
 * 他的this 指向的是testobj
 */
function testObj(){
    this.name = 1111;
    this.foo = function(){

    }
};


{

}
// 和 
obj ={

}
// 不是一个东西 一个是块作用域 一个就是对象