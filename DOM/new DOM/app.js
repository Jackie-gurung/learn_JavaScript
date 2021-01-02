// let val;
// val = document;
// val = document.all;
// val = document.all.length;
// val = document.html;
// val = document.all[4];
// val = document.body;
// val = document.URL;
// val = document.characterSet;


// // forms
// val = document.forms;
// val = document.forms.length;
// val = document.forms[0].method;

// // links
// val = document.links;
// val = document.links.length;
// val = document.links[3];
// val = document.links[3].id;
// val = document.links[3].className;
// val = document.links[3].classList;

// val = document.scripts;
// val = document.scripts[2].getAttribute("src");

// // val = document.images;
// // console.log(val);
// // let scripts = document.scripts;
// //this above give html collections not array
// let arr = Array.from(document.links)

// arr.forEach(function(scr){
//     console.log(scr);
// });


// // single selector using getElementById
// const taskTitle = document.getElementById('task-title');
// console.log(taskTitle);
// console.log(taskTitle.id);
// console.log(taskTitle.className);
// taskTitle.style.background= '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// // taskTitle.style.display = 'none';

// // change content 
// taskTitle.textContent = 'task title';
// taskTitle.innerHTML = '<span style = "color:blue"> task title</span>';

// // single selector using querySelector
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('li'));
// document.querySelector('li').style.background = 'red';
// document.querySelector('ul li').style.background = 'brown';
// document.querySelector('li:last-child').style.background = 'red'; 
// document.querySelector('li:nth-child(5)').style.background = 'green';
// document.querySelector('li:nth-child(even)').style.background = 'red';

// // multiple selector
// const lists = document.getElementsByClassName('collection-item');
// console.log(lists);
// lists[0].style.color = 'red';

// //to be more specific
// const lists = document.querySelector("ul").getElementsByClassName('collection-item');
// console.log(lists);
// lists[0].style.color = 'red';


// let lis = document.getElementsByTagName('li');
// console.log(lis);
// lis[3].style.color = 'yellow';

// lis = Array.from(lis);
// console.log(lis);

// lis.reverse();//this works only incase of array not html collection
// lis.forEach(function(src,index){
//     console.log(src);
//     src.style.color = "red";
//     src.textContent = `${index} : hello`;
// })

// const liodd = document.querySelectorAll('li:nth-child(odd)');
// console.log(liodd);
// liodd.forEach(function(src){
//     src.style.background = '#333';
//     src.style.padding = '5px';
//     // console.log(src);
// })
// const lieven = document.querySelectorAll('li:nth-child(even');
// for(let i= 0; i < lieven.length;i++){
//     lieven[i].style.background = '#f4f4f4';
// }


// child nodes
// let val;
// const list = document.querySelector('ul.collection');
// val = list.childNodes;
// val = list.childNodes[1];
// val = list.childNodes[1].nodeName;
// val = list.childNodes[1].nodeType;

// 1-Element
// 2-attributes
// 3-text-node
// 8-Comment
// 9-document-itself
// 10 - doctype

// //children
// val = list.children;
// val = list.children[0];
// val = list.children[1].textContent = 'jackie';
// val = list.children[3].children[0];
// list.children[3].children[0].id = 'text'; //adding id via JS

// val = list.firstChild;
// val = list.firstElementChild;
// val = list.lastElementChild;
// val =list.childElementCount;
// val = list.parentNode;
// val = list.parentElement;
// val =list.parentElement.parentElement;

// // sibling
// const lis = document.querySelector('li.collection-item')
// val = lis.nextElementSibling;
// val = lis.nextElementSibling.nextElementSibling.previousElementSibling;
// console.log(val);


// // creating and adding an element via js 
// const li = document.createElement('li');
// // ading a class 
// li.className = 'collection-item';
// // adding id 
// li.id = 'new-item';
// li.setAttribute('title' , 'new attributes');
// li.appendChild(document.createTextNode('new list item'));
// // adding the icon 
// const link = document.createElement('a');
// link.className  = "delete-item secondary-content" ;
// link.innerHTML = '<i class="fa fa - remove"></i>';

// document.querySelector('ul.collection').appendChild(li);
// li.appendChild(link);
// console.log(li);

// REPLACE ELEMENT 
// const newHeading = document.createElement('h5');
// newHeading.id ='text-title';
// newHeading.appendChild(document.createTextNode(' TASK - TITLE '));

// const oldHeading = document.getElementById('task-title');

// const parent = document.querySelector('.card-action');
// parent.replaceChild(newHeading,oldHeading);
// console.log(newHeading);


// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');
// lis[0].remove();
// list.removeChild(lis[4]);

// // classes and attributes 
// const firstli = document.querySelector('li:first-child');
// const link = firstli.children[0];

// let val;

// // class 
// val= link.className;
// val = link.classList;
// link.classList.add('task');
// link.classList.remove('task');


// //attributes 
// val = link.getAttribute('href');
// val = link.setAttribute('href','http://google.com');
// val = link.getAttribute('href');
// val = link.hasAttribute('href');
// val = link.hasAttribute('title');
// val = link.setAttribute('title','google');
// val = link.hasAttribute('title');
// link.removeAttribute('title');
// val = link;
// console.log(val);

// document.querySelector('.clear-tasks').addEventListener('click',function(e){
//     console.log('hello world');
//     e.preventDefault()
// });

// document.querySelector('.clear-tasks').addEventListener('click',onclick);
// function onclick(e){
//     let val;
//     val = e.target;
//     val =  e.target.id;
//     val = e.target.className;
//     val = e.target.classList;
//     // e.target.innerText = 'boom' ;
//     // event type 
//     val = e.type;
//     val = e.timeStamp;
//     // position of click relative to window and button itself 
//     val = e.clientX;
//     val = e.clientY;
//     // position of click relative to window and button itself
//     val = e.offsetX;
//     val = e.offsetY;
//     console.log(val);
// }


// eveents 
// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// // clearBtn.addEventListener("click",runEvent);
// // clearBtn.addEventListener('dblclick',runEvent);
// // clearBtn.addEventListener('mousedown', runEvent);
// // clearBtn.addEventListener('mouseup', runEvent);
// // card.addEventListener('mouseenter', runEvent); 
// // card.addEventListener('mouseleave', runEvent);
// // card.addEventListener('mouseover', runEvent);
// // card.addEventListener('mouseout', runEvent);
// card.addEventListener('mousemove', runEvent);



// // evet handler
// function runEvent(e){
//     console.log(`EVENT TYPE : ${e.type}`);
//     heading.textContent =  `Mouse X : ${e.offsetX} Mouse Y :${e.offsetY} `;
//     document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},100)`;
// }

// keyboard and input events 
const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// form.addEventListener('submit',eventHandler);
// taskInput.addEventListener('keydown',eventHandler);
// taskInput.addEventListener('keypress', eventHandler);
// taskInput.addEventListener('keyup', eventHandler);

// taskInput.addEventListener('focus', eventHandler);
// taskInput.addEventListener('blur', eventHandler);

// taskInput.addEventListener('cut', eventHandler);
// taskInput.addEventListener('paste', eventHandler);


//all input events 
// taskInput.addEventListener('input', eventHandler); 
// change event 
// select.addEventListener('change',eventHandler);


// function eventHandler(e){
    // console.log(`EVENT TYPE : ${e.type}`);
    // console.log(e.target.value);
    // heading.innerText = e.target.value;
    // console.log(taskInput.value);
    // e.preventDefault();
// }


// // EVENT BUBBLING 
// document.querySelector('.card-title').addEventListener('click',function(){
//     console.log('card-title');
// });

// document.querySelector('.card-content').addEventListener('click', function () {
//     console.log('card-content');
// });

// document.querySelector('.card').addEventListener('click', function () {
//     console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function () {
//     console.log('col');
// });


// // EVENT DELEGATION 
// document.body.addEventListener('click',deleteItem);
// function deleteItem(e){
//     if(e.target.parentElement.classList.contains('delete-item')){
//         console.log('delete item');
//         e.target.parentElement.parentElement.remove();
//     }
// }


// LOCAL STORAGE 
// localStorage.setItem('name','john');
// localStorage.setItem('age',21);
// SESSION STORAGE 
// sessionStorage.setItem('name','sonam');


// localStorage.removeItem('name'); 

// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');
// console.log(name,age);

// localStorage.clear();

document.querySelector('form').addEventListener('submit',function(e){
    const task = document.getElementById('task').value;

    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks',JSON.stringify(tasks));
    alert('task saved');
    e.preventDefault();
})


const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
    console.log(task);
})




