let arr = [1,2,3,4,5,6,7,8,9,10];
let sol = arr.map(function(ele){
  return ele*3;
}).filter(function(ele){
  return ele%2==1;
})
console.log(sol);
