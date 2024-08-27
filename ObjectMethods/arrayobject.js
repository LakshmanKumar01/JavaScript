let object ={
  array:["sai","kumar","madhav","abhi","jehu"],
  details:function() {
    for(let i=0;i<this.array.length;i++){
      console.log(this.array[i]);
    }
  }
}
object.details();