let edible = "xY";
let plants = "AYxxXY";
let object = {};
for(let i = 0; i < edible.length; i++){
  if(object[edible[i]] === undefined){
    object[edible[i]] = 1;
  }
  else{
    object[edible[i]]++;
  }
}
// console.log(object);
let count = 0;
for(let i = 0; i < plants.length; i++){
  if(object[plants[i]]){
    count++;
  }
}
console.log(count);