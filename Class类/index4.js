//1-类不存在变量提升
//new Foo(); // ReferenceError
//class Foo {}

//2-类和模块的内部，默认就是严格模式，所以不需要使用use strict指定运行模式。只要你的代码写在类或模块之中，就只有严格模式可用

//3-name属性
//由于本质上，ES6 的类只是 ES5 的构造函数的一层包装，所以函数的许多特性都被Class继承，包括name属性
class Point {} 
console.log(Point.name); //Point