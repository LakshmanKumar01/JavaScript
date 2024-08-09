let n = 5;
for(let r = 1; r <= n; r++){
  let star = "";
  for(let c = 1; c <= n; c++){ 
    if((c == 1 && c == n) || (r == 1 || r == n))  {
      star = star + " " + "*";
    }
    
    }
  console.log(star)
  }
