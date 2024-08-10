let N = 6;
let str = "nature";
let object = {
  "a":0,
  "e":0,
  "i":0,
  "o":0,
  "u":0
};
for(let i = 0;i<str.length;i++){
  if(object[str[i]] !== undefined){
    object[str[i]] = 1;
  }
}
// console.log(object)
for(let val in object){
  if(object[val]===0){
    console.log(val)
  }
}