// ************************task 1*****************

function Plaindrome(){
    let str=document.getElementById('input').value;
    const case_sensitive=document.getElementById('select').value;
    const Plaindrome_msg=document.getElementById('Plaindrome_msg')
    if(case_sensitive=='True'){
        str=str.toLowerCase();
        console.log(str)
    }
    let reversedStr=str.split("").reverse().join("");
    if( str === reversedStr){
        Plaindrome_msg.textContent=`${str} is a Plaindrome .`;
         Plaindrome_msg.style.color='green';
          Plaindrome_msg.style.textAlign='center'
    }else{
        Plaindrome_msg.textContent=`${str} is not a Plaindrome .`;
        Plaindrome_msg.style.color='red'
    }
}


// ************************task 2*****************

const str=prompt("Please Enter the String....");
console.log(str);

function Number_of_e(str){
    let num_of_e=0;
for (let i =0 ;i < str.length ; i++){
    if (str[i] === 'e'){
        num_of_e += 1;
    }
}
 return"Number of 'e' in String is :"+num_of_e;
}
 alert( Number_of_e(str));

// ************************ task 3 *****************

function Welcome(){
const username=document.getElementById('name').value;
const age=document.getElementById('age').value;
const msg=document.getElementById('msg');
msg.style.textAlign='center';
if(username == ''){
    msg.textContent='please Enter Your Name';
    msg.style.color='red'
}else if(age <= 0 || age ==''){
    msg.textContent="Enter Valid Age";
    msg.style.color='red'
}else {
    msg.textContent=`Welcome ${username} , Your age is ${age}`
    msg.style.color='green'
}
}

// ************************ task 4 *****************

function Calcilate_Area(){
const radius=document.getElementById('Radius').value;
const area_msg=document.getElementById('area')
if(radius <= 0){
    area_msg.textContent="Please Enter radius large Than Zero ; "
    area_msg.style.color='red'
    area_msg.style.textAlign='center'
}else{
    const pi=Math.PI;
   const area= pi * Math.pow(radius,2);
   area_msg.textContent=`The circle’s Area is: ${area}`
   area_msg.style.color='green'
}
}

// ************************ task 5 *****************

function Square_root(){
    const num=document.getElementById('num').value;
    const Square=Math.pow(num,2);
    alert(`The Squar Root of ${num} is : ${Square}`)
} 



