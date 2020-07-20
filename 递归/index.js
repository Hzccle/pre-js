//1-实现n介阶乘:1*2*3*4*5....
let getSum = function(n){
    if(n<=1) return 1;
    return getSum(n-1) * n;
}
let res = getSum(5)
console.log(res);
