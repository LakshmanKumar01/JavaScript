let str = "sai";
let name = ""
for(let i = 0;i<str.length;i++){
  if(str[i] %2 == 1){
    name = name + str[i];
  }
}
console.log(name);