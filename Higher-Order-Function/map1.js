//map -> returns the same length of the array
let array = [1,2,3,4,5];
let res = array.map(function(element,index){
  if(element%2==0){
    return element;
  }
  else{
    return 0;
  }
})
console.log(res);