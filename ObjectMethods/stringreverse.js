let string ={
  array:["sai","kumar","madhav","abhi","jehu"],
  details: function(){
    let empty=[];
    for(let i=0;i<this.array.length;i++){
      let result = "";
      for(let j=this.array[i].length-1;j>=0;j--){
        result = result+this.array[i][j];
      }
      empty.push(result);
    }
    console.log(empty);
  },
}
string.details();