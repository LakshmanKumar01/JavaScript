let array = [1,-2,3,-1,0,-99];
let output = [];
for(let i = 0; i<= array.length-1;i++){
  if(array[i] < 0){
    output.push(0);
  }
  else{
    output.push(array[i]);
  }
}
console.log(output);