// function easyHTTP(){
//     this.http = new XMLHttpRequest();
// }

class easyHTTP{

// make an http GET request 
async get(url){
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
}

// make a POST request 
async post(url,data){
    const response = await fetch(url,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
    
}

}





// // make a PUT request 
// easyHTTP.prototype.put = function(url,data,callback){
//     this.http.open('PUT',url,true);
//     this.http.setRequestHeader('content-type','application/JSON');
//     let self =this;
//     this.http.onload = function(){
//         callback(null, self.http.responseText);
//     }
//     this.http.send(JSON.stringify(data));
// }

// // make an http DELETE request 
// easyHTTP.prototype.delete = function(url,callback){
//     this.http.open('DELETE',url,true);
//     let self = this;
//     this.http.onload = function(){
//         if(self.http.status === 200){
//             callback(null,'post deleted');
//         }else{
//             callback('Error : ' + self.http.status);
//         }
//     }
//     this.http.send();
// }