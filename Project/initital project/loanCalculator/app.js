// listen for sunmit 
document.getElementById('loan-form').addEventListener('submit',function(e){
    // hide result 
    document.getElementById('results').style.display = 'none';
    // show loading 
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults,3000);
    e.preventDefault();
});

// calculate result 
function calculateResults(){
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('Total-payment');
    const totalInterest = document.getElementById('Total-interest');
    
    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayment = parseFloat(years.value) * 12;

    // monthly payment 
    const x = Math.pow(1 + calculatedInterest,calculatedPayment);
    const monthly = (principal*x*calculatedInterest)/(x-1);


    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly*calculatedPayment).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayment)- principal).toFixed(2);
        // show results 
        document.getElementById('results').style.display = 'block';
        // hide loading
        document.getElementById('loading').style.display = 'none';
    }else{
        showError('Please check your entry');
    }
}

function showError(error){
    // hide results 
    document.getElementById('results').style.display = 'none';
    // hide loading
    document.getElementById('loading').style.display = 'none';
    // create element 
    const errorDiv =document.createElement('div');
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    // add a  classs 
    errorDiv.className = 'alert alert-danger';
    // create textnode and append it to div 
    errorDiv.appendChild(document.createTextNode(error));
    // insert error 
    card.insertBefore(errorDiv,heading);
    // clear the error after 3 sec 
    setTimeout(clearError,3000);

}

function clearError(){
    document.querySelector('.alert').remove();
}