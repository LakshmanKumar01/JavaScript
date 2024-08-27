let rectangle ={
  l:4,
  b:3,
  area:function(l,b){
    console.log("area",this.l*this.b);
  },
  perimeter:function(l,b){
    console.log("perimeter is",2*(this.l+this.b));
  },
}
rectangle.area();
rectangle.perimeter();