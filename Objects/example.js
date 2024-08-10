let name = "prabhas";
let object = {}
for(let i = 0;i<name.length;i++){
  if(object[name[i]]===undefined){
    object[name[i]] = 1;
  }
  else{
    object[name[i]]++;
  }
}
console.log(object);