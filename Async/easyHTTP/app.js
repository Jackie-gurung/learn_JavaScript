const  http = new easyHTTP;

// get post 
// http.get('https://jsonplaceholder.typicode.com/posts')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));
     

// // get single post 
// http.get('https://jsonplaceholder.typicode.com/posts/1')
//     .then(res => console.log(res))
//     .catch(err => res);
    
const data = {
    title: 'post one',
    body: 'this is custom post '
};

// post data
http.post('https://jsonplaceholder.typicode.com/posts',data)
    .then(res => console.log(res))
    .catch(err => console.log(err));

// // update data 
// http.put('https://jsonplaceholder.typicode.com/posts/1',data,function(err,response){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(response);
//     }
// })

// // delete post 
// http.delete('https://jsonplaceholder.typicode.com/posts/1',function(err,response){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(response);
//     } 
// });


