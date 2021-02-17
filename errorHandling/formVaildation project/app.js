document.getElementById('name').addEventListener('blur',validateName);
document.getElementById('zip').addEventListener('blur',validateZip);
document.getElementById('email').addEventListener('blur',validateEmail);
document.getElementById('phone').addEventListener('blur',validatePhone);

function validateName(){
    const name = document.getElementById('name');
    const re = /^[a-z]{2,10}$/i;
    if(!re.test(name.value)){
        name.classList.add('is-invalid');
    }else{
       
        name.classList.remove('is-invalid');
    }
}

function validateZip(){
    const zipCode = document.getElementById('zip');
    const re = /^[1-9]{5}(-[0-9]{4})?$/;
    if(!re.test(zipCode.value)){
        zipCode.classList.add('is-invalid');
    }else{
        zipCode.classList.remove('is-invalid');
    }    
}

function validateEmail(){
    const email = document.getElementById('email');
    const re =/^([\w_\-\.]+)@([\w_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if(!re.test(email.value)){
        email.classList.add('is-invalid');
    }else{
       
        email.classList.remove('is-invalid');
    }    
}

function validatePhone(){
    const phone = document.getElementById('phone');
    const re =/^(\(?\+977\)?[-. ])?\d{10}$/;
    if(!re.test(phone.value)){
        phone.classList.add('is-invalid');
    }else{
       
        phone.classList.remove('is-invalid');
    }  
}