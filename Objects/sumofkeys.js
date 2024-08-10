let array = [1,1,2,2,3,3,4,4,5,5,6,6,7,8,9];
let details={}
for(let i = 0;i<array.length;i++){
  if(details[array[i]] === undefined){
  details[array[i]] = 1;
  }
  else{
    details[array[i]]++;
  }
}
// console.log(details);
let sum = 0;
for(let key in details){
  if(details[key]>=2){
    sum = sum + Number(key);
  }
}

console.log(sum);