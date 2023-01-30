
let history='';
function dis(val){
    document.getElementById("result").value += val;
    console.log(val);
    
}

function solve() 
{ 
 try{
let x = document.getElementById("result").value; 
let y = eval(x);
document.getElementById("result").value = y;
addToHistory(y);
}
catch(e)
{
    alert("Use one operator at a time");
    document.getElementById("result").value = "" ;
    document.getElementById('history').innerHTML= history;
    // var a =history.slice(0,length-2);
    // document.getElementById('history').innerHTML= a;
    // document.getElementById("history").innerHTML = "" ;
    // history=" ";
     
}  
}
function clr() 
{ 
document.getElementById("result").value = "" ;
addToHistory('<br>');
}

function addToHistory(value) {
try{
history += value;
console.log(history);
document.getElementById('history').innerHTML = history;

}
catch(e){
document.getElementById("history").innerHTML = "" ;
}
}