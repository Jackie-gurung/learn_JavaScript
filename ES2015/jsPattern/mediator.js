const User = function(name){
    this.name = name;
    this.chatroom = null;
}

User.prototype = {
    send : function(message,to){
        this.chatroom.send(message,this,to);
    },
    receive : function(message,from){
        console.log(`${from.name} to ${this.name} : ${message}`);
    }
}

const Chatroom = function(){
    let users = {};

    return{
        register : function(user){
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function(message,from,to){
            if(to){
                to.receive(message,from);
            }else{
                for(key in users){
                    if(users[key] !== from){
                        users[key].receive(message,from);
                    }
                }
            }
        }
    }
}


const jackie = new User('jackie');
const pema = new User('pema');
const lama = new User('lama');

const chatroom = new Chatroom();

chatroom.register(jackie);
chatroom.register(pema);
chatroom.register(lama);


jackie.send('hello');
jackie.send('tashi delek',lama)
