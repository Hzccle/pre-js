function timeout (ms) {
  return new Promise((resolve,reject)=>{
      setTimeout(resolve,ms)
  })
}
async function asyncPrint (value,ms) {
    console.log(1111);
    await timeout(ms);
    console.log(value);//等待两秒后,打印此值
}
asyncPrint('hellow world',2000)