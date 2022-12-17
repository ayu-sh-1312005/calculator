var btn=document.querySelectorAll(".btn");
var display=document.getElementById("ans-display");
console.log(display);
var str="";
console.log(btn);

Array.from(btn).forEach(function(element){
    element.addEventListener("click",function(e){
        console.log(e.target);
        if(e.target.innerHTML=="AC"){
            display.innerHTML=""; 
            str="";
        }else if(e.target.innerHTML=="C"){
            str=str.slice(0,str.length-1);
            display.innerHTML=str;
            console.log("cl");
        }
        else if(e.target.innerHTML=="="){
            str=eval(str);
            if(str==Infinity || str==NaN){
                display.innerHTML="ERROR";
                str="";
            }else{
            display.innerHTML=str;
            }
        }else{
        str+=e.target.innerHTML;
        console.log(e.target.innerHTML);
        console.log(str);
        display.innerHTML=str;
        }
    })
})