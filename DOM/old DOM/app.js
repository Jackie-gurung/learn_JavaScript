// let val;

// val = document;
// val = document.all;
// val = document.all[3];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.URL;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;


// val = document.links;
// val = document.links[0];
// val = document.links[0].className;
// val = document.links[0].classList;
// val = document.links[0].classList[0];

// val = document.scripts;
// val = document.scripts[0];
// val = document.scripts[2].getAttribute('src');
// console.log(val);

////////////////////////////////////////////////////////////////////////////

// DOM selection for single elements 

// document.getElementById()

// console.log(document.getElementById('task-title'));

// // get things from the element 
// console.log(document.getElementById('task-title').id);         
// console.log(document.getElementById('task-title').className);

// const  taskTitle = document.getElementById('task-title');
// taskTitle.style.background ='#333' ;
// taskTitle.style.color ='#fff' ;
// taskTitle.style.padding ='3px';


// // change content 
// taskTitle.textContent = 'jackie';
// taskTitle.innerText = 'Task List' 
// taskTitle.innerHTML = '<span style="color:red">jackie gururng</span>'

// // document.querySelector()
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card'));
// console.log(document.querySelector('h5'));

// const taskTitle = document.querySelector('li');
// taskTitle.style.color = 'red';

// document.querySelector('li:last-child').style.color = '#ccc';
// document.querySelector('li:nth-child(3)').style.color = 'red';
// document.querySelector('li:nth-child(4)').textContent = 'hello world';
// document.querySelector('li:nth-child(odd)').style.background = '#f4f4f4';
// document.querySelector('li:nth-child(even)').style.background = '#f9f9f9';

////////////////////////////////////////////////////////////////////////////

// // DOM selection for multiple elements 
// // document.getElementsByClassName 
// const items =  document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red'; 
// items[2].textContent = 'jackie'; 

/* using query Selector we can select  particular items and its nested elements but getElementsByClassName selects all */

// const listitems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listitems)

// document.getElementsByTagName 
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[2].textContent = 'jackie';

// convert html collection into array 
// lis= Array.from(lis);

// lis.reverse();

// lis.forEach(function(li, index){
//     console.log(li.className);
//     li.textContent = `${index}:jackie`;
// })
// console.log(lis);

// // document.querySelectorAll 

// const list = document.querySelectorAll(' ul.collection li.collection-item');

// // using queryselectorAll we dont have to convert it into array as it is node list

// list.forEach(function(list, index){
//     list.textContent = `${index}:jackie`;
//     list.style.color = 'red';
// });

// const liodd = document.querySelectorAll('li:nth-child(odd)');
// const lieven = document.querySelectorAll('li:nth-child(even)');

// liodd.forEach(function (li) {
//     li.style.background = '#7878';
// });

// for(let i = 0; i < lieven.length; i++){
//     lieven[i].style.background = '#f4f4f4';
// }

// console.log(list);

///////////////////////////////////////////////////////////////////////////

// let val;
// const list = document.querySelector('ul.collection');
// const listitem = document.querySelector('li.collection-item');

// val = list;
// val = listitem;

// //get childNodes
// //get childNodes take account of all comments,line break and all
// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[0].nodeType;
// lis = Array.from(list.childNodes);
// console.log(lis); 

//1-element
// 2-attributes(deprecated)
// 3-text node
// 4-Comment
// 5-document itself
// 6-doctype

// // get children element nodes
// val = list.children;
// val = list.children[0];
// val = list.children[0].nodeName;
// val = list.children[1].nodeType;
// list.children[0].textContent= 'jackie';

// // get children of children 
// val = list.children[2].childNodes;
// val = list.children[2].children;
// val = list.children[2].children[0];
// list.children[2].children[0].id='jackie';

// // get first child
// val = list.firstChild;
// val = list.firstElementChild;

// // get lat child 
// val = list.lastChild;
// val = list.lastElementChild;

// // count child element 
// val = list.childElementCount;

// // get parents nodes 
// val = listitem.parentNode;
// val = listitem.parentElement;
// val = listitem.parentElement.parentElement;

// // get next sibling 
// val = listitem.nextSibling;
// val = listitem.nextElementSibling;
// val = listitem.nextElementSibling.nextElementSibling;
// val = listitem.nextElementSibling.nextElementSibling.previousElementSibling;

// // get previous sibling 
// val =  listitem.previousSibling;
// val =  listitem.previousElementSibling;
// console.log(val);