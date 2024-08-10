// Converting Array to Object
let array = ["sai","sai","kumar","pooji","pooji","vij","vij","lakshman"];
let object = {}
for(let i = 0; i<array.length;i++){
  if(object[array[i]] === undefined){
    object[array[i]] = 1;
  }
  else{
    object[array[i]]++;
  }
}
console.log(object);