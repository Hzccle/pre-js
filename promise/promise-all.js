//返回值组成一个数组，传递给回调函数
let promises = [1,2,3,4,5].map(id=>{
    return '/post'+id+'json'
})
Promise.all(promises).then(res=>console.log(res))