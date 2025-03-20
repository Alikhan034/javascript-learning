
/*try{
   // throw new SyntaxError;
//console.log(a+b);
}
catch(err){
   console.log(err);
   console.log("This line never reached");

}
console.log("this code never stop")*/


function addTwoNumber(a,b){ 
   try{
   if(typeof(a)!='number'){
      throw new ReferenceError("first parameter is not a number")

   } 
   else if(typeof(b)!='number'){
      throw new ReferenceError("2nd parameter is not a number")
   }
   else{
      console.log(a+b)
   }
   }
catch(err){
   console.log("Error!"+err);
}

}
addTwoNumber(5,"5");
console.log("Its is still working")
