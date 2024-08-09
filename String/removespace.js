let word = "sai kumar";
let output = "";
for(let i = 0;i<word.length;i++){
  // if(word[i] == " "){
  //   output = output + "";
  // }
  // else{
  //   output = output +word[i];
  // }
  if(word[i]==" "){
    continue;
  }
  output = output + word[i];
}
console.log(output);