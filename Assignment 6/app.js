//chapter 21-25

//task 1
var fname=prompt("Enter First Name: ");
var lname=prompt("Enter Last Name: ");
alert("Welcome "+fname+" "+lname);

//task 2
var model=prompt("Enter your Favourite Mobile Phone: ");
var string="My Favourite Mobile Phone is "+model;
document.write(string+"<br>Length of String is: "+string.length);

//task 3
var name="PAKISTAN";
document.write("<br>String: "+name+"<br>Index of Letter 'N' is: "+ name.indexOf('N'));

//task 4
var msg="Hello World !";
document.write("<br>String: "+msg+"<br>Last index of 'l' is: "+msg.lastIndexOf('l'));

//task 5
document.write("<br> String: "+name+"<br>Character at index '3' is: "+name.charAt(3));

//task 6
alert("Welcome Using concate()\nWelcome: "+fname.concat(" "+lname));

//task 7
 var city="Hyderabad";
document.write("<br>City: "+city+"<br>After Replacement: "+city.replace("Hydera","Islama"));

//task 8
var message = "<br>Ali and Sami are best friends. They play cricket and football together.";
document.write(message);

document.write(message.replace(/and/g, "&"));

//task 9
var value="472";
document.write("<br>Value: "+value+"<br>Type: "+typeof(value));
var value2=parseInt(value);
document.write("<br>Value: "+value2+"<br>Type: "+typeof(value2));

//task 10
var input=prompt("Enter string: ");
document.write("<br>User input: "+input+"<br>Upper Case: "+input.toUpperCase());

//task 11
document.write("<br>User input: "+input+"<br>Title Case: "+input.charAt(0).toUpperCase() + input.slice(1));

//task 12
var num=35.54;
document.write("<br>Value: "+num+"<br>Result: "+String(num).replace('.',''));

//task 13
var username=prompt("Enter your Username: ");
var patt=/^[A-Za-z]+$/;
if(!username.match(patt))
{
    alert("Inavlid Username !");
}
else{
    alert("Welcome !");
}

//task 14
var arr= ["cake", "apple pie", "cookie", "chips", "patties"];
var input=prompt("Welcome to ABC Bakery.. What do you want to Order ?");
var patt=new RegExp(input,'i'); //case insensitive comparision
var found;
for(var j=0; j < arr.length; j++)
{ 
    if(arr[j].match(patt))
    {
        document.write("<br>"+input+" is avaible at index "+j+" in our Bakery !");
        found=true;
    }
}
if(!found)
document.write("<br>We are Sorry "+ input+" is not Available in our bakery !");

//task 15
var pass=prompt("Enter Your Password: ");
if(!pass.match(/^[A-Za-z][A-Za-z0-9]{6,}$/)){
    alert("Invalid PAssword !");
}

//task 16
var string="University of Karachi";
var arr=string.split("");
for(var i=0;i<arr.length;i++){
    document.write("<br>"+arr[i]+"<br>");
}

//task 17
var input=prompt("Enter your String: ");
document.write("last Character of "+input+" is: "+input.slice(-1));

//task 18
var string="The quick brown fox jumps over the lazy dog";
var count=0;
var arr=string.split(" ");
for(var i=0;i<arr.length;i++){
    if(arr[i].match(/the/i))
    count++;
}
document.write("<br>There are "+count+" occurence(s) of word the");

//Chapter 26-30
//task 1
var no=3.45214;
document.write("<br>Number: "+no);
document.write("<br>Round Off Value: "+Math.round(no));
document.write("<br>Floor: "+Math.floor(no));
document.write("<br>Ceil: "+Math.ceil(no));

//task2
var no=-2.673;
document.write("<br>Number: "+no);
document.write("<br>Round Off Value: "+Math.round(no));
document.write("<br>Floor: "+Math.floor(no));
document.write("<br>Ceil: "+Math.ceil(no));

//task 3
var no=prompt("Enter the value: ");
document.write("<br>Absolute value of "+no+" is: "+Math.abs(no));

//task 4
document.write("<br>Random value of dice is: "+ parseInt( Math.floor(Math.random() * 6) + 1)); //random no between 1-6

//task 5
var r=parseInt( Math.floor(Math.random() * 2) + 1);
document.write("<br>"+r+"<br>Random Coin value: "+(r==1? "Tails":"Head"));

//task 6
document.write("<br>Random Number between 1 and 100 is "+ parseInt( Math.floor(Math.random() * 100) + 1)); //random no between 1-100

//task 7
var wei=prompt("Enter Your Weight: ");
document.write("<br>Weight of User is: "+wei.replace(/\D/g, "")+" Kilograms");

//task 8
var rand=parseInt( Math.floor(Math.random() * 10) + 1); //random no between 1-10
var guess=prompt("Enter any no between 1-10");
if(rand==guess){
    alert("Congratz !");
}
else{
    alert("Try Again ! The number is "+rand);
}

//Chapter 31-34
//task 1

var d = new Date();
document.write("<br>"+d);

//task 2
var months    = ['January','February','March','April','May','June','July','August','September','October','November','December'];
document.write("<br>Current Month: "+months[d.getMonth()]);

//task 3
var day=String(d);
document.write("<br>Today is: "+day.slice(0,3));

//task 4
if(day.slice(0,3)=="Sat" || day.slice(0,3)=="Sun"){
    document.write("<br>It’s Fun day");
}

//task 5
if(d.getDate()<16){

document.write("<br>First fifteen days of the month");
}
else
document.write("<br>Last fifteen days of the month");

//task 6
var today = new Date();
var getdate = new Date("1970-01-01");
var diffMs = ( today-getdate); // milliseconds between
var diffDays = Math.floor(diffMs / 86400000); // days
document.write("<br>Elapsed Minutes: "+(diffDays*24)/60+"<br>Elapsed Milliseconds: "+((diffDays*24)/60)*60000);

//task 7
var hours=d.getHours();
if(hours<12)
document.write("<br>Its AM");
else
document.write("<br>Its PM");

//task 8
var today = new Date();
var lastDayOfMonth = new Date(today.getFullYear(), today.getMonth()-(12-today.getMonth()), 0);
document.write("<br>"+lastDayOfMonth);

//task 9
var today = new Date();
var getdate = new Date("2015-06-18");
var diffMs = ( today-getdate); // milliseconds between
var diffDays = Math.floor(diffMs / 86400000); // days
document.write("<br>"+diffDays+" Days Passed since 1st Ramadan 2015");

//task 10
var today = new Date();
var getdate = new Date("2015-01-01");
var diffMs = ( today - getdate); // milliseconds between
var diffsecs = Math.floor(diffMs/1000); //seconds between
document.write("<br>"+diffsecs+" Seconds Passed Since begining of 2015 and Today");

//task 11
var d= new Date();
document.write("<br>Current Date:"+d);
d.setHours(-1);
document.write("<br>1 hour ago, it was: "+d);

//task 12
var today = new Date();
var hundredyearsback = new Date(today.getFullYear(), today.getMonth()-(1200), 0); //100 years = 1200 months
document.write("<br>Current date: "+today+"<br>100 years back it was: "+hundredyearsback);

//task 13
var age=prompt("Enter your Age: ");
document.write("<br>Your Birth Year is: "+(d.getFullYear()-age));

//task 14
var Customer_Name;
var Current_Month=months[d.getMonth()]; //previously declared
var Number_of_units;
var Charges_per_unit=16;
var Net_Amount_Payable;
var Late_Payment_Surcharge=350;
var Gross_Amount_Payable;

Customer_Name=prompt("Enter Your Name: ");
Number_of_units=prompt("Enter No of units: ");

//multiply by 100 and divide by 100 for 2 decimal places rounding
Net_Amount_Payable=Math.round(((parseInt(Number_of_units) * parseInt(Charges_per_unit))*100)/100);
Gross_Amount_Payable=Math.round(((Math.round(Net_Amount_Payable) + Late_Payment_Surcharge)*100)/100);

document.write("<br><br>Customer Name: "+Customer_Name);
document.write("<br>Month: "+Current_Month);
document.write("<br>Number of Units: "+Number_of_units);
document.write("<br>Charges Per Unit: "+Charges_per_unit);
document.write("<br><br>Net Amount Payable (Within Due Date): "+Net_Amount_Payable);
document.write("<br>Gross Amount Payable (After Due Date): "+Gross_Amount_Payable);

//chapter 35-38
//task 1

function dt()
{
    var d=new Date();
    return "<br>"+d;
}

//task 2
function greet(fname, lname){
    return "<br>Welcome "+fname+" "+lname;
}

//task 3
function sum(first,second){
    return parseInt(first)+parseInt(second);
}

//task 4
function calculator(num1, num2, opr){
    if(opr=='+'){
        return "<br>Sum is: "+ parseInt(parseInt(num1)+parseInt(num2));
    }
    else if(opr=='-'){
        return "<br>Difference is: "+parseInt(parseInt(num1)-parseInt(num2));
    }
    else if(opr=='*'){
        return "<br>Product is: "+parseInt(parseInt(num1)*parseInt(num2));
    }
    else if(opr=='/'){
        return "<br>Division is: "+parseInt(parseInt(num1)/parseInt(num2));
    }
    else
    return "<br>Wrong Input !";
}

//task 5
function square(no){
    return  Math.pow(no,2);
}

//task 6
function fact(no){
    if(no<1)
    return 1;
    else
    return no* fact(no-1);
}

//task 7
function count(start, end){
    for(var i=start; i<=end; i++){
        document.write("<br>"+i);
    }
}

//task 8
function hyp(base, perp){

    function squ(no){
        return Math.pow(no,2);
    }

    return squ(base)+squ(perp);
}

//task 9
function area(width, height){
    return width*height;
}

//task 10
function palindrome(word) {
    var re = /[^A-Za-z0-9]/g;
    word = word.toLowerCase().replace(re, '');
    
    for (var i = 0; i < word.length/2; i++) {

      if (word[i] !== word[word.length - 1 - i]) {

          return false;
      }
    }
    return true;
}

//task 11
function change(string){
    var arr=string.split(" ");
    var changed="";
    for(var i=0;i<arr.length;i++){
        changed+=" "+arr[i][0].toUpperCase()+arr[i].slice(1,arr[i].length+1);
    }
    return changed;
  
}

//task 12

function longest(string){
    var arr=string.split(" ");
    var count=0;
    var word="";
    for(var i=0;i<arr.length;i++){
        if(arr[i].length>count){
            count=arr[i].length;
            word=arr[i];
        }
    }
    return word;
}

//task 13
function occurence(string, letter){
    var counter=0;
    for(var i=0;i<string.length;i++){
        if(string[i]==letter){
            counter++;
        }
    }
    return counter;
}

//task 14
function calcCircumference(radius){
    return ((2*3.14)*radius);
}
function calcArea(radius){
    return ((3.14)*(radius*radius));
}


