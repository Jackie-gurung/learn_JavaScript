// customer button 
document.getElementById('button1').addEventListener('click',loadCustomer);

// for customers button 
document.getElementById('button2').addEventListener('click', loadCustomers);

// customer
function loadCustomer(){
     const xhr = new XMLHttpRequest();
     xhr.open('GET','customer.json',true);
     xhr.onload = function (){        
        if(this.status === 200){
            const customer = JSON.parse(this.responseText);
            output = `
             <ul>
                <li>NAME : ${customer.name}</li>
                <li>NAME : ${customer.id}</li>
                <li>NAME : ${customer.phone}</li>
                <li>NAME : ${customer.company}</li>
             </ul>
             <hr>
             `;
                document.getElementById('customer').innerHTML = output;   
        }
     }
     xhr.send();
}

// customers 
function loadCustomers() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'customers.json', true);
    xhr.onload = function () {
        if (this.status === 200) {
            const customers = JSON.parse(this.responseText);
            let output = ' ';
            customers.forEach(function(customer){
                output += `
                <ul>
                    <li>NAME : ${customer.name}</li>
                    <li>ID : ${customer.id}</li>                  
                    <li>PHONE : ${customer.phone}</li>
                    <li>COMPANY : ${customer.company}</li>
                </ul>
                <hr>
            `;
            });

            document.getElementById('customers').innerHTML = output;
        }
    }
    xhr.send();
}