// let str = "Hello";
function Reverse(string){
let rev = "";
for(let i = string.length-1;i>=0;i--){
  rev = rev + string[i];
}
  return rev;
}
let result = Reverse("String");
// console.log(result);
let array = ["madam","mom","dad","Noon","sun","hello"];
for(let i = 0;i<array.length-1;i++){
  let output = Reverse(array[i]);
  if(output === array[i]){
    console.log(array[i], "is palindrom");
  }
  else{
    console.log(array[i], "not a palindrom");
  }
}