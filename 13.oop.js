var purchase1={
shoePrice:120,
tax:1.6,
totalprice:function(){
var cal=this.shoePrice*this.tax;
console.log("calculation: ",cal)
}
}
purchase1.totalprice();
var purchase2={
    carPrice:2000000,
    tax:4,
    totalprice:function(){
    var cal=this.carPrice*this.tax;
    console.log("calculation: ",cal)
    }
    }
    purchase2.totalprice();