// BOOKS CONSTRUCTOR 
function Book(title,author,isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}
// UI CONSTRUCTOR 
function UI(){}

UI.prototype.addToBookList = function (book){
    const list = document.getElementById('book-list');
    // create element 
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `;
    list.appendChild(row);
}

UI.prototype.showAlert = function(message, className){
    // create div 
    const div = document.createElement('div');
    // className and message 
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    // get parents 
    const container= document.querySelector('.container');
    const form = document.querySelector('#form');
    // insert above form 
    container.insertBefore(div,form);
    // vanish after 3 sec 
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000);
}

UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

UI.prototype.deleteBook = function(target){
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
        showAlert('Book removed', 'success');
    }
}

// EVENT LISTENER 
document.getElementById('form').addEventListener('submit',
function(e){
    // get value from the form 
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;

    // instanciate book 
    const book = new Book(title,author,isbn);

    // instanciate UI 
    const ui = new UI();
    if(title === "" || author === "" || isbn ===""){
        ui.showAlert('Please fill all the fields','error');
    }else{
        // add to book list 
        ui.addToBookList(book);
        ui.showAlert('Book added','success')
        // clear fields 
        ui.clearFields();
    }
    e.preventDefault();
});

// EVENT LISTENER FOR UI 
document.getElementById('book-list').addEventListener('click',function(e){
    const ui = new UI();
    if (e.target.className === 'delete') {
        ui.showAlert('Book removed', 'success');
    }
    
    ui.deleteBook(e.target); 
      
})