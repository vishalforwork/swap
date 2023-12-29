let a,b,c ;
console.log("working");

document.getElementById("btn").onclick = function(){
    a = document.getElementById("var1").value;
    b = document.getElementById('var2').value;
    let new_var = document.getElementById('new_var');
    console.log(new_var);
    c = a;
    a = b;
    b = c;
    console.log(a);
    console.log(b);
    let old_var =document.getElementById('old_var');
    old_var.innerHTML="Variable-1 BEFORE swapping: " + var1.value + " and Variable-2 BEFORE swapping " + var2.value ;
    new_var.innerHTML="Variable-1 AFTER swapping: " + a + " and Variable-2 AFTER swapping " + b ;
}