// filter -> returns the array based on the condition and also change the length of the array
let array = [1,2,3,4,5,6];
let sol = array.filter(function(ele,ind){
  if(ele%2==0){
    return ele *2;
  }
  else{
    return 0;
  }
})
console.log(sol);