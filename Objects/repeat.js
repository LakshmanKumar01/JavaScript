let array = [11,1,1,2,3,3,5,6,8,6,7,7,7];
let object = {}
for(let i = 0;i<array.length;i++){
  if(object[array[i]]===undefined){
    object[array[i]] = 1;
  }
  else{
    object[array[i]]++;
  }
}
// console.log(object);
for(let hi in object){
  if(object[hi] !=1){
    console.log(hi);
  }
}