function timeout (ms) {
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
}
async function sleep () {
    for(let i=0;i<5;i++) {
        console.log(i);
       await timeout(1000);       
    }
}
sleep()