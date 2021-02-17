// const form =document.getElementById('form');
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const password2 = document.getElementById('password2');

// //function for showing error message
// function showError(input,message){
//     const formControl = input.parentElement;
//     formControl.className = 'form-control error';
//     const small = formControl.querySelector('small');
//     small.innerText = message;
// }

// //function for showing success message
// function showSuccess(input){
//     const formControl = input.parentElement;
//     formControl.className = 'form-control success';
// }

// //for checking email -correct:test@test.com
// function checkEmail(input){
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if(!re.test(input.value.trim())){
//         showError(input,'Email is not valid.')
//     }else{
//         showSuccess(input);
//     }
// }

// //for checking if field is empty
// function checkRequired(inputArr){
//     inputArr.forEach(function(input){
//         if(input.value.trim() === ''){
//             showError(input,`${getFieldName(input)} is required`);
//         }else{
//             showSuccess(input);
//         }
//     })
// }

// // for checking length 
// function checkLength(input,min,max){
//     if(input.value.length < min){
//         showError(input,`${getFieldName(input)} should be atleast ${min} character.`);
//     }else if(input.value.length > max){
//         showError(input,`${getFieldName(input)} should not be more than ${max} character.`);
//     }else{
//         showSuccess(input);
//     }
// }

// // for checking password 
// function checkPassword(input){
//     /* To check a password between 8 to 15 characters which contain at least 
//     one lowercase letter, one uppercase letter, one numeric digit, and 
//     one special character */
//     const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
//     if(!re.test(input.value)){
//         showError(input,'password is invalid');
//     }else{
//         showSuccess(input);
//     };
// }

// // function to match password
// function passwordMatch(password,password2){
//     if(password.value === password2.value){
//         showSuccess(password2);
//     }else{
//         showError(password2,'Passwords do not match.');
//     }
// }

// // to show first letter uppercase 
// function getFieldName(input){
//     return input.id.charAt(0).toUpperCase() + input.id.slice(1);
// }

// // Event listener 
// form.addEventListener('submit',function(e){
//     e.preventDefault();
//     checkRequired([username,email,password,password2]);
//     checkLength(username,3,15);
//     checkLength(password,6,12);
//     checkEmail(email);
//     checkPassword(password);
//     passwordMatch(password,password2);
// })

console.log('jackie');
console.log(2+2);