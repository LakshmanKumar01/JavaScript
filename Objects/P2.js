let N = 7;
let array = [3,5,3,3,8,5,6];
let object = {};
for(let i = 0;i<array.length;i++){
  if(object[array[i]] === undefined){
    object[array[i]] = 1;
  }
  else{
    object[array[i]]++;
  }
}
console.log(object)
let sum = 0;
for(let key in object){
  if(object[key]==1){
    sum = sum + Number(key);
  }
}
console.log(sum)