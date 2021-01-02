const posts = [
    {title:'post one',body:'this is post one.'},
    {title:'post two',body:'this is post two.'}
];



// promise
function createPost(post){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            posts.push(post);
            const error = false;
            if(!error){
                resolve();
            }else{
                reject('error: something went wrong');
            }
        },2000);
    })     
}
    
function getPost(){
    setTimeout(function(){
        let output ='';
        posts.forEach(function(post){
            output += `<li>${post.body}</li>`;

        });
        document.body.innerHTML = output;
    },1000);
}
    
createPost({title:'post three',body:'this is post three.'})
.then(getPost)
.catch(function(err){
    console.log(err);
});

getPost();