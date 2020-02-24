//mutable code 

var sum = 2; 

function double() {
  sum *= 2;
}

function add(a){
  sum +=a;
}

double();
// double() = 4;
add(5);
//add(5) = 9
console.log('sum', sum);
//ouput is sum - 9


// 9 * 2 = 18
double();
// 18 + 5
add(5);
console.log('sum', sum);
