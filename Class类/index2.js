//表达式
/**
 * 省略class类名
 */
let myClass = class {
    constructor (name,age) {
        this.name = name,
        this.age = age
    }
    say () {
        return this.name+','+this.age
    }
}
let res = new myClass('liming',18)
  console.log(res.say()); 
/*--------------------------------------------------------*/

//快速执行
let myClass1 = new class {
    constructor (name) {
        this.name = name
    }
    say () {
        console.log(this.name);
    }
}('可好看')
myClass1.say();