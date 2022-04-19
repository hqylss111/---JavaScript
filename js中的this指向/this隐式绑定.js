/**
 *  隐式绑定是在执行的绑定了对象例如：
 *  obj.fn() // 他是在执行的时候隐式绑定到了obj身上
 */

/**
 * 案例1
 */
const obj = {
    name:'obj',
    fu:function name(params) {
        console.log(this)
    }
};

const obj2 = {
    name:"obj2",
    fn:obj.fu, //this =>  obj2
};

obj2.fn(); // this =》 obj2 因为你执行的时候绑定的this是obj2 所以他隐式绑定到了obj2身上
