/**
 * 存储属性描述符
 */

let obj = {
    name: '11',
    _age: 14
};

Object.defineProperty(obj, 'age', {
    enumerable: true, // 是否可配置
    configurable: true, // 是否可以获取
    get() {
        console.log('获取了')
        return this._age;
    },
    set(value) {
        console.log('设置了')
        this._age = value
    }
})


obj.age;
obj.age = 1


/**
 * 数据属性描述符
 * # 如果只是一个空的对象 他们的默认值都是 false
 */

Object.defineProperty(obj,'demo',{
    enumerable: true, // 是否可配置  类似delete
    configurable: true, // 是否可以获取 可以获取
    value:'111', // 值
    writable:true, //是否可以该写
})