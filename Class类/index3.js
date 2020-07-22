//类的属性名可以是变量
let item = 'say'
class Person {
  constructor() {

  }
  [item] () {
      console.log('hello world');
  }
}
new Person().say()