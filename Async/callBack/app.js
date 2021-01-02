const posts = [
    {title:'post one',body:'this is post one.'},
    {title:'post two',body:'this is post two.'}
];

// // synchroneous callback function 
// function createPost(post){
//     setTimeout(function(){
//         posts.push(post);
//     },2000);
// }

// function getPost(){
//     setTimeout(function(){
//         let output ='';
//         posts.forEach(function(post){
//             output += `<li>${post.body}</li>`;

//         });
//         document.body.innerHTML = output;
//     },1000);
// }

// createPost({title:'post three',body:'this is post three.'});

// getPost();

// asynchroneous callback function 
function createPost(post,callback){
        setTimeout(function(){
            posts.push(post);
            callback();
        },2000);
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
    
createPost({title:'post three',body:'This is post three.'},getPost);

getPost();