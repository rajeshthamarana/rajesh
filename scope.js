var x=5;
var y=6;
console.log("here x(=5), y(=6) are global variables, so used anywhere.");
function a(){
    console.log("------function a------");
    var x=24;
    console.log("here x(=24) is local variable, so used only inside function a.");
    console.log(x+", here x takes value which is local variable.")
    console.log("sum of x,y is "+(x+y));
    b();
}
function b(){
    console.log("------function b------");
    console.log(x+", here x takes value which is global variable");
    console.log("sum of x,y is "+(x+y));
}
a();