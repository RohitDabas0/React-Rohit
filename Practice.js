// const main = document.getElementById("main-heading");
// console.log(main);

// const list = document.getElementsByClassName("day");
// console.log(list);

// const list1 = document.querySelectorAll(".day");
// console.log(list1);

// main.style.color="#bbf";
// // list.style.color="green";
// // list1.style.color = "green";


// const ul = document.querySelector('ul');
// const li = document.createElement('li');
// li.innerHTML = "Saturday";
// li.setAttribute('class','day');


// ul.appendChild(li);
// for(let i =0;i<list.length;i++){
//     list[i].style.color="turquoise"; 
// }



//TRAVERSING
const ul = document.querySelector('ul');
console.log(ul.parentNode.parentNode);
console.log(ul.parentElement);

const liNode=ul.childNodes[3];

liNode.style.color="red";

ul.children[0].style.backgroundColor="green";
ul.children[0].style.borderRadius="1rem";
ul.children[0].style.padding ="4px";
ul.children[0].style.margin="4px";   


const button1 = document.querySelector('#btn1');

button1.addEventListener("click",()=>alert('button 1'));

const button2 = document.querySelector('#btn2');

button2.addEventListener("click",()=>alert('button 2'));

const button3 = document.querySelector('#btn3');

button3.addEventListener("click",()=>alert('button 3'));

button3.addEventListener("mouseover",()=>button3.style.backgroundColor="green");



const reveal= document.querySelector('.reveal');
const hide=document.querySelector('.hidden');


function check(){
    if(reveal.classList.contains('hidden')){
        reveal.classList.remove('hidden');
    }else{
        reveal.classList.add('hidden');
    }
}

reveal.addEventListener("click",check);