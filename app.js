let history=[];
    function dis(val){
        try{
        document.getElementById("result").value = val;
        let a=document.getElementById("result").value ;
        let y=eval(a);
        console.log(y);
        addToHistory(y);
     }
        catch(e){
        alert("Use one operator at a time");
        document.getElementById("result").value = "" ;
        document.getElementById('history').innerHTML= history;
        }
    }
// function solve() 
// { 
//      try{
//     let x = document.getElementById("result").value; 
//     let y = eval(x);
//     // const arr1 =y.split();
//     document.getElementById("result").value = y;
//     addToHistory(y);
//  }
//     catch(e)
//     {
//         alert("Use one operator at a time");
//         document.getElementById("result").value = "" ;
//         document.getElementById('history').innerHTML= history;
//         // var a =history.slice(0,length-2);
//         // document.getElementById('history').innerHTML= a;
//         // document.getElementById("history").innerHTML = "" ;
//         // history=" ";
         
//     }  
// }
function clr() 
{ 
    document.getElementById("result").value = "" ;
    addToHistory('<br>');
}

function addToHistory(arr) {
    try{
    history += arr;
    console.log(history);
    document.getElementById('history').innerHTML = history;
    
}
catch(e){
    document.getElementById("history").innerHTML = "" ;
}
}