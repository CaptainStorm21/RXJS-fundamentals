//immutable with function expression

function double(a){
  return a * 2;
}

function add(prev, a){
  return prev + a;
}

//output is 13
let res  = add(double(2), 9);
console.log('sum', res);

//output is 9
res1 = add(double(2), 5);
console.log('sum', res1);

//output is 14
res = add(double(2), 10);
console.log('sum', res);


//functions rely only on function params therefore there is no mutation
