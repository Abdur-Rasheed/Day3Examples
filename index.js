

/* rest and spread operators

res(...)
spread(...)


rest 



*/

//the following function multiplys numbers passed in the parameter
//rest
function multiply(paramter,anotherparameter,...args){// rest operator
  
//name2="Marry Doe"
//console.log(name2);
    //body
   console.log(args);
    let product=1;
    for(let i in args){
        product=product*args[i];

        console.log(product);
    }

/*    for(let index=0;index<args.length;index++){
    
    console.log(args[index]);
    prodcut=product*args[i];
    cosole.log(prodcut);
    }
    */
}

//name2="Marry Doe"
//console.log

multiply(2,4);
multiply(1,2,3,4,5);

/*function functionName(...argu){

}
*/


/*Spread Operator



*/


function sum(x,y,z){
    return x+y+z;
}
const numebers=[10,20,30];

console.log(sum(...numebers));//spread operator 10,20,30

/*
myFunction(...iterableObject)

*/

let t = document.getElementById("myDog")
//console.log(t);

let t1=document.getElementsByClassName("dogs");
console.log(t1);
//console.log(Array.isArray(t1));

let t2=document.getElementsByTagName("h1");
//console.log(t2);


/*We can also be able to use querySelector, querySelectorAll


Searching using CSS selectors
1.Class selector
2.id selector
3.element selector

*/

//the query selector will return only the firstelement that matches the CSS selector(s)
let t3 =document.querySelector(".dogs");
//console.log(t3);

//querySelectorAll. This returns all elemenents that match a specified CSS selector(s)
/*The Array.from(object) returns an array object from the given object
*/
let t4 =document.querySelectorAll(".dogs");

let arrayT4 = Array.from(t4);
//console.log((arrayT4));

let arrayT4B =[...t4];
console.log(arrayT4B);

let x=document.getElementById("mainBody").previousElementSibling;
console.log(x);


let x1=document.getElementById("mainBody");
x1.style.backgroundColor='yellow';

let newParagraph=document.createElement("p");
newParagraph.innerHTML="this is oue new parahraph";
document.getElementById("mainBody").appendChild(newParagraph);//
/*
#mainbody{
    background-color:yellow;
}
*/

/*
JS Events


Syntax dor addEventListener
document.addEventListener(event, function, useCapture);

event: This specifies the name of the event

function:This specifies the function that should run when the event occurs.
The first and second parameters are required.You must provide the event and the function

UseCapture:boolean value that specifies whether the event should be executed in the capturing and bubbling phase

*/

document.getElementById("myDog").addEventListener("click",test)


function test(){
    alert("today");
}