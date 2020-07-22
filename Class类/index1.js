//表达式 
/*
 * class一直是小写
 */
//initFn只能在当前类内部使用,外部只能使用myClass;initFn在内部使用时指的是当前的类
let myClass = class initFn {
    constructor (name) {
      this.name = name
    }
    say () {
        console.log(this.name);
        // console.log(initFn.name);
        // return initFn.name;        
    }
}
let res1 = new myClass('徐爱哦')
console.log(res1.say());