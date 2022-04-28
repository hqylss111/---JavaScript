
// // /**
// //  * 如下代码分析
// //  */
// // Array.prototype._splice = function (start, end) {
// //     // 这里的this 就是你传递过来的数组 arguments
// //     let arr = this;
// //     let newArr = [];

// //     start = start || 0;
// //     end = end || arr.length;

// //     console.log(arr.length)
// //     for (let index = start; index < end; index++) {
// //         newArr.push(arr[index])
// //     }
// //     return newArr
// // };

// // function foo(num1, num2, num2) {
// //     /**
// //      * 需求需要把arguments转成数组
// //      * 会使用下面的代码
// //      */

// //     /**
// //      * 对下面的代码进行分析
// //      * this就是在调用的时候进行绑定的
// //      * [].splice(1,1);
// //      * 1.目前你没有数组 没有办法进行调用调用函数你就必须从Array对象上拿到这个方法进行执行。
// //      * 2. 因为都没有办法执行了,然后你肯定是没办法知道这个数组是什么，所以你只能显示绑定this到arguments身上 所以他的this就指向到了arguments
// //      */

// //     let arr = Array.prototype._splice.call(arguments, 1, 2);

// //     console.log(arr);

// //     // 他的this指向的是[] 隐式绑定
// //     [].splice();
// //     // 如果是这样调用的的话他的this指向的[1] 显示绑定this到[1]
// //     [].splice.call([1]);
// // }n

// // foo(1, 2, 3)



// // /**
// //  *  * 箭头函数是没有arguments
// //  * 但是他会往上层的作用域去找如果没有找到就会报错
// //  * 如下例子
// //  */
// // function foo(params) {

// //     let c = () => {
// //         console.log(arguments) // 1
// //     };
// //     c();
// // }
// // foo(1)





// // function sun(page,size) {

// //     const newSize = (page - 1) * size;

// //     const newPaage = (page * size) - 1;


// //     console.log(newSize,newPaage)
// //     return [0,9]

// // }
// // sun(3,10)


// // let str = ['2','2','2'];

// // const newSet = [...new Set(str)];

// // console.log(newSet,'---')

// // let c = [{
// //     paramGroupName: "222",
// //     paramGroupTypeName: "检测工序",
// //     paramGroupTypeUuid: "adgd85dfd40d4b8da48285c185ccaac5",
// //     paramGroupUuid: "03ed346bb3714d84ac187566410a3d09",
// //     productParamList: [{
// //         paramGroupName: "222",
// //         paramGroupTypeName: "检测工序",
// //         paramGroupTypeUuid: "adgd85dfd40d4b8da48285c185ccaac5",
// //         paramGroupUuid: "03ed346bb3714d84ac187566410a3d09",
// //     }]
// // }]


// // function demo(list) {
// //     const map = {};

// //     list.forEach(element => {
// //         if (!map[element.paramUuid]) {
// //             map[element.paramUuid] = element
// //         };
// //     });

// //     return Object.values(map);

// // }

// // let cc = demo(c)

// // console.log(cc)


// let data = [
//     {
//         paramGroupName: "222",
//         paramGroupTypeName: "检测工序",
//         paramGroupTypeUuid: "adgd85dfd40d4b8da48285c185ccaac5",
//         paramGroupUuid: "03ed346bb3714d84ac187566410a3d09",
//         productParamList: [{
//             checked: true,
//             id: "269",
//             isBulletProof: "0",
//             paramName: "轿车线温度计2",
//             paramUnit: "℃",
//             paramUuid: "bfed85df-e40d-4b8d-a482-85c185ccaac5",
//             showMethod: "PLAIN",
//             sourceType: 2,
//         }]
//     },
//     {
//         paramGroupName: "222",
//         paramGroupTypeName: "检测工序",
//         paramGroupTypeUuid: "adgd85dfd40d4b8da48285c185ccaac5",
//         paramGroupUuid: "03ed346bb3714d84ac187566410a3d09",
//         productParamList: [{
//             checked: true,
//             id: "269",
//             isBulletProof: "0",
//             paramName: "轿车线温度计2",
//             paramUnit: "℃",
//             paramUuid: "bfed85df-e40d-4b8d-a482-85c185ccaac5",
//             showMethod: "PLAIN",
//             sourceType: 2,
//         },
//         {
//             checked: true,
//             id: "268",
//             isBulletProof: "0",
//             paramName: "轿车线温度12",
//             paramUnit: "℃",
//             paramUuid: "shdhsge-e40d-4b8d-a482-85c185ccaac5",
//             showMethod: "PLAIN",
//             sourceType: 2,
//         }]
//     }

// ]

// let map = {

// }
// data.forEach(item => {
//     if (!map[item.paramGroupUuid]) {
//         map[item.paramGroupUuid] = item;
//     } else {
//         let sonMap = {};
//         let productParamList = [...item.productParamList, ...map[item.paramGroupUuid].productParamList];
//         productParamList.forEach(sonData => {
//             if (!sonMap[sonData.paramUuid]) {
//                 sonMap[sonData.paramUuid] = sonData;
//             }
//         })

//         console.log(Object.values(sonMap), 'Object.values(sonMap)')
//         map[item.paramGroupUuid].productParamList = Object.values(sonMap)
//     }
// })

// console.log(Object.values(map))


let obj = {a:1,b:2};


function demo (data){
   data = 1
}

demo(obj);

console.log(obj)


