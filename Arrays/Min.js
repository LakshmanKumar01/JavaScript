let array = [1,90,-78,-44,6];
let min = Infinity;
for(let i = 0; i<=array.length;i++){
  if(array[i]<min){
    min = array[i];
  }
}
console.log(min);