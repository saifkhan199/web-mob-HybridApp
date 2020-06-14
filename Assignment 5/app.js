//Chapter 1
//Task 1
alert("Hi, Welcome to my Site");
//Task 2
window.confirm("Error ! Please Enter a Valid Password.");
//Task 3
alert("Hi, Welcome to JS Land\nHappy Coding !");
//Taks 4
alert("Welcome to JS Land");
alert("Happy Coding !");
//Task 5 from browser console
//alert("Hi, I can run JS from my web browser Console");
//Task 6
alert("Hi, Saif here !");

//Chapter 2
//Task 1
var username;
//Task 2
var myName="Saif Ullah Khan";
//Task 3
var myMessage="Hello World !";
alert(myMessage);
//Task 4
var name="saif";
var age=20;
var education="Certified Mobile Application Developer";
alert(name);
alert(age);
alert(education);
//Task 5
var food="PIZZA";
var len=food.length;
var arr=[];
var j=0;
for(var i=len; i>0; i--){
    arr[j]=(food.substr(0,i));
    j++;
}
alert(arr[0]+"\n"+arr[1]+"\n"+arr[2]+"\n"+arr[3]+"\n"+arr[4]);
//Task 6
var mail="Saif_khan@gmail.com";
alert("My email is: "+mail);
//Task 7
var book="A smarter way to learn JavaScript";
alert("Iam trying to learn from book "+book);
//Task 8
document.getElementById("p").innerHTML="Yeah ! I can write HTML through JS";
//Task 9
alert("▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬”");

//Chapter 3
//Task 1
var age=20;
alert("Iam "+age+" year old !");
//Task 2
var n = localStorage.getItem('counter');
 if (n === null) {
    n = 0;
 }
 
n++;
 
localStorage.setItem("counter", n);
 
alert("You have Visited this site "+n+" times !");

//Chapter 4
//Task 1
var vari1,vari2,vari3;
