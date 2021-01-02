document.getElementById('button').addEventListener('click',loadData);

function loadData(){
    // create an XHR Object
    const xhr = new XMLHttpRequest();

    // open 
    xhr.open('GET','data.txt',true);
    console.log('READYSTATE',xhr.readyState);

    xhr.onload = function(){
        console.log('READYSTATE', xhr.readyState);
        if(this.status === 200){
            // console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
        }
    }
    xhr.send();

    // status = 200 ok
    
    // readyState 
    // 0	UNSENT	Client has been created.open() not called yet.
    // 1	OPENED	open() has been called.
    // 2	HEADERS_RECEIVED	send() has been called, and headers    and status are available.
    // 3	LOADING	Downloading; responseText holds partial data.
    // 4	DONE	The operation is complete.
}