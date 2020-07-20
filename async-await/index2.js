function num () {
    return '222胜多负少的'
}

async function getNum () {
    let res = await num()
    console.log(res);
    return res;
}
//async函数返回一个 Promise 对象。
//console.log(getNum());

//async函数内部return语句返回的值，会成为then方法回调函数的参数
let result = getNum().then(res=>console.log(res))
