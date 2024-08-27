function EvenOrOdd(number){
  if(number % 2==0){
    return true;
  }
  else{
    return false;
  }
}
let array = [1,2,3,4,5,6,7,8,9,10];
let count = 0;
for(let i = 0;i <array.length;i++){
  if(EvenOrOdd(array[i])){
    count++;
  }
}
console.log(count);