const login=()=>{
    var provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
       
        var user = result.user;
        console.log("user==>",user);
        window.location=("chatScreen.html");
        // ...
      }).catch(function(error) {
       console.log("Error: ",error.message);
        // ...
      });
}