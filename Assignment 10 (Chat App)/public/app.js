let val=document.getElementById('msg');
var send=()=>{
    var pushMsg={
        message: val.value,
    }
    
    //empty the textbox
    document.getElementById("msg").value="";

    //store in DB
    firebase.database().ref('Messages').push(pushMsg);

};

var get=()=>{
    firebase.database().ref('Messages').on('child_added',function(data){

    //show on screen
     var p=document.createElement("p");
     var text=document.createTextNode(data.val().message);
     p.appendChild(text);
     var messages=document.getElementById("messages");
     messages.appendChild(p);
   
    })
}

var logout=()=>{
    firebase.auth().signOut()
    .then(()=>{
        window.location="index.html"
    })
    .catch(()=>{
        console.log(error.message)
    })
}
 get();