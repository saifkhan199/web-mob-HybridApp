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
document.write("<br>Yeah ! I can write HTML through JS");
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

//task 3
var birthYear=2000;
document.write("<br>My Year of Birth is: "+birthYear+"\n Data type of variable is: "+ typeof birthYear);

//Task 4
var name="saif";
var product="LCD";
var quantity="2";
var site="www.MySite.com"
document.write("<br>"+name+" Ordered "+quantity+" "+product+" on "+site);


//Chapter 4
//Task 1
var vari1,vari2,vari3;

//Task 3
document.write("<br><b>a)Rules for naming JS variables</b> <br><br>b) Variable names can only contain number, $ and _. For example $my_1stVariable<br>c) Variables must begin with a letter, $ or _. For example $name, _name or name<br>d) Variable names are case Sensitive<br>e) Variable names should not be JS Keyword<br></p>");

//Chapter 5
//Task 1 and 2
var _1=prompt("Enter first Number: ");
var _2=prompt("Enter Second Number: ");
document.write("<br>Sum of "+_1 +" and "+_2+" is: "+parseInt(parseInt(_1)+parseInt(_2)));
document.write("<br>Subtraction of "+_1 +" and "+_2+" is: "+parseInt(parseInt(_1)-parseInt(_2)));
document.write("<br>Product of "+_1 +" and "+_2+" is: "+parseInt(parseInt(_1)*parseInt(_2)));
document.write("<br>Modulas of "+_1 +" and "+_2+" is: "+parseInt(parseInt(_1) % parseInt(_2)));

//Task 3
var no;
document.writeln("<br><br>Value after variable declaration is: ??");
no=4;
document.writeln("<br>Initial Value: "+no.valueOf());
++no;
document.writeln("<br>Value after increment is: "+no.valueOf());
no=no+parseInt(7);
document.writeln("<br>Value after addition is: "+no.valueOf());
--no;
document.writeln("<br>Value after decrement is: "+no.valueOf());
document.writeln("<br>The remainder is : "+parseInt(no % parseInt(3)));

//Task 4
var cost=600;
document.writeln("<br> <br> The cost of Buying 5 Movie Tickets is: "+cost*5+"PKR");

//Task 5
document.writeln("<br><br> Table of 3<br>");
for(var i=1;i<=10;i++){
    document.writeln("<br> 3 X "+i+" = "+3*i);
}

//Task 6
var tempC=25;
var tempF=((tempC*9)/5)+32;
document.writeln("<br> <br>"+tempC+"C is: "+tempF+"F");
var tempF2=70;
var tempC2=((tempF2-32)*5)/9;
document.writeln("<br>"+tempF2+"F is"+tempC2+"C");

//task 7
var Price_of_item_1=100;
var Price_of_item_2=500;
var Ordered_quantity_of_item_1=3;
var Ordered_Quantity_of_item_2=1 
var Shipping_charges=100;
var total_cost=(Price_of_item_1*Ordered_quantity_of_item_1)+(Price_of_item_2*Ordered_Quantity_of_item_2)+Shipping_charges;
document.write("<br><b>Shopping Cart</b><br>");
document.writeln("<br>Price of item 1: "+Price_of_item_1+" <br>Ordered Quantity of item 1: "+Ordered_quantity_of_item_1+"<br>Price of item 2: "+ Price_of_item_2+"<br> Ordered Quantity of item 2: "+Ordered_Quantity_of_item_2+"<br>Shipping charges: "+Shipping_charges);
document.writeln("<br><br>Total Cost of Your Order: "+total_cost);

//task 8
var marksobt=850;
var markstot=980;
document.writeln("<br><br><b>Mark Sheet</b><br>");
document.write("Total Marks: "+markstot+"<br>Marks Obtained: "+marksobt+"<br>Percentage %: "+(marksobt/markstot)*100);

//task 9
var cost=(10*104.80)+(25*28);
document.write("<br><br><b>Currency Exchange</b>");
document.write("<br><br>Total Currency in PKR: "+cost);

//task 10
document.write("<br><br>Mathematical Operations<br>");
var a=5;
document.write("Ans: "+((a+5)*(10))/2);

//task 11
var currenty=2020;
var birthy=1998;
document.write("<br><br><b>Age Calculator</b><br>");
document.write("Current Year: "+currenty+"<br>Birth Year: "+birthy+"<br>Your Age: "+parseInt(parseInt(currenty)-parseInt(birthy)));

//task 12
var radius=4;
document.write("<br><br><b>The Geometrizer</b><br>Radius of Circle is: "+radius+"<br>Circumference of Circle is: "+(2*3.14*radius));
document.writeln("<br>Area of Circle is: "+(3.14*(radius*radius)));

//task 13
var snack="Pringles";
var age=22;
var maxyear=100;
var amountPD=2;
var supply=amountPD*(maxyear-age);

document.writeln("<br><br><b>The Lifetime Supply Calculator</b><br>");
document.writeln("favourite Snack: "+snack+"<br>Current Age: "+age+"<br>Estimated Maximum Age: "+maxyear+"<br>Amount of Snack Per Day"+amountPD);
document.writeln("<br>You will Need "+supply+" "+snack+" to last you untill the ripe old age of "+maxyear);

//Chapter 6-9
//task 1

var a=10;
document.writeln("<br><br>Result:");
document.writeln("<br>The Value of a is: "+a);
document.writeln("<br>----------------------------------<br>");
++a;
document.writeln("The value of ++a is: "+a);
document.writeln("<br>Now the Value of a is: "+a);
document.writeln("<br>----------------------------------<br>");

document.writeln("The value of a++ is: "+a++);
document.writeln("<br>Now the Value of a is: "+a);
document.writeln("<br>----------------------------------<br>");
--a;
document.writeln("The value of --a is: "+a);
document.writeln("<br>Now the Value of a is: "+a);
document.writeln("<br>----------------------------------<br>");

document.writeln("The value of a-- is: "+a--);
document.writeln("<br>Now the Value of a is: "+a);

//task 2
var a = 2, b = 1; 
var result = (--a) - (--b) + (++b) + (b--); 
document.writeln("<br><br>a="+a+"<br>b="+b);
document.writeln("<br>--a "+--a);
document.writeln("<br>--a "+--a);;
document.writeln("<br>--b "+--b);
document.writeln("<br>++b "+(++b));
document.writeln("<br>--a "+--a);
document.writeln("<br>--b "+--b);
document.writeln("<br>++b "+(++b));
document.writeln("<br>b-- "+b--);
document.writeln("<br>Result: "+result);

//task 3
var name=prompt("Enter Your Name: ");
document.writeln("<br><br>Welcome "+name);

//task 5
var a=prompt("Enter no to find table: ");
if(a=="")
{
    a=5;
}
document.writeln("<br><br> Table of "+a+"<br>");
for(var i=1;i<=10;i++){
    document.writeln("<br>"+a+" X "+i+" = "+a*i);
}




