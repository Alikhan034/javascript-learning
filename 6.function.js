/*function addsum(a,b){
    var c=a+b;
    console.log(c);
}

addsum(5,7);
addsum(65   ,45);*/
/*

function arrlist(arr){
    for(var i=0;i < arr.length;i++){
    console.log(arr[i]);
}}
var color=["blue","Red","Green","Orange"];
arrlist(color);

*/


function letterFinder(word,match){
    for(let i=0;i<word.length;i++){
        if(word[i]==match){
            console.log('Found the', match, 'at', i);
        }
        else{
            console.log('---No match found at', i);
        }
    }

}
letterFinder("test","t")

