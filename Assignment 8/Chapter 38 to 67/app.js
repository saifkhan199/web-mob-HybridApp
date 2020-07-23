//chapter 38- 42
function power(a,b){
return Math.pow(a,b)
}
document.write("2 to power 3 is: "+power(2,3));
function leap(){
    var year=prompt("Enter the Year: ");
    var check=(year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0); 
    document.write((check==true )? "<br>It is a leap Year":"<br>It is not a leap Year");
}
function area(){
    var s1=parseInt(prompt("Enter length of side 1: "),10);
    var s2=parseInt(prompt("Enter length of side 2: "),10);
    var s3=parseInt(prompt("Enter length of side 3: "),10);
    
    var area =S(s1,s2,s3)*((S(s1,s2,s3) - parseInt(s1))*(S(s1,s2,s3) -parseInt(s2))*(S(s1,s2,s3) -parseInt(s3)));
   
    document.write("<br>Area: "+area);
}
function S(a,b,c){
   return parseInt(((parseInt(a) +parseInt( b) +parseInt( c))/2));
  
}
function main(){
 var m1=parseInt(prompt("Enter Marks for Subject 1"));
 var m2=parseInt(prompt("Enter Marks for Subject 2"));
 var m3=parseInt(prompt("Enter Marks for Subject 3"));

 document.write("<br>Average="+average(m1,m2,m3));
 document.write("<br>Percentage="+percentage(m1,m2,m3)+"%");

}
function average(m1,m2,m3){
    return ( (parseInt(m1)+parseInt(m2)+parseInt(m3)) /3);
}
function percentage(m1,m2,m3){
    return (((parseInt(m1)+parseInt(m2)+parseInt(m3))/300)*100);
}
function getIndex(){
    var arr=["dog","apple","cat","eye","ball"];
    var found=false;
    var opt=prompt("Our array have words apple,dog,eye,cat,ball\nEnter Word to check its Index");
    for(var i=0;i<=opt.length;i++){
        if(arr[i]==opt)
        { alert("Index of "+opt+" is "+i);
         found=true;}
    }
    if(found==false)
     alert("Index not found !");

}
function rm(){
    var word=prompt("Enter word to remove vowel");
    var arr=word.split("");
    var arr2="";
    for(var i=0;i<arr.length;i++){
        if(arr[i]!='a' && arr[i]!='e' && arr[i]!='i' && arr[i]!='o' && arr[i]!='u'){
            arr2+=arr[i];
        }
    }
    alert("Without Vowel "+word+" is "+arr2);
}
function vowelSuccession(){
    
    var found = 0;

    var word=prompt("Enter a string: ");

    document.write("<br>Vowels in successions are :");

    for (var i = 0; i<word.length; i++)
    {
        if (isVowel(word[i]))
        {
            found++;
        }
        else
        {
            found = 0;
        }

        if (found == 2)
        {
            document.write("<br>", word[i - 1], word[i]);
            found = 1;
            
        }
    }


}

function isVowel(ch)
{
    switch (ch)
    {
        case 'A':
        case 'a':
        case 'E':
        case 'e':
        case 'I':
        case 'i':
        case 'O':
        case 'o':
        case 'U':
        case 'u':
            return 1;
        default:
            return 0;
    }
}
function distance(){
    
    var dis=parseInt(prompt("Enter Distance between Karachi and Islamabad (in Km): "));
    document.write("<br>Distance in Meter: "+meter(dis));
    document.write("<br>Distance in Feet: "+feet(dis));
    document.write("<br>Distance in Inches: "+inches(dis));
    document.write("<br>Distance in Centimeter: "+centimeter(dis));

}
function meter(dis){
    return dis*1000;
}
function feet(dis){
    return dis*3281;
}
function inches(dis){
    return dis*39370;
}
function centimeter(dis){
    return dis*100000;

}
function pay(){
    var hour=parseInt( prompt("Enter the hours you Worked: "));
    var bonus=0;
    if(hour>40)
    {
        for(var i=41; i<=hour; i++){
            bonus+=12;
        }
    }
    document.write("<br>Your Bonus is: "+bonus);
}
function note(){
    
	var amount=parseInt(prompt("Please input amount: "));

	document.write("<br>Required notes of Rs. 100  :"+ amount / 100);
    document.write("<br>Required notes of Rs. 50   :"+(amount % 100) / 50);
	document.write("<br>Required notes of Rs. 10   :"+ (((amount % 100) % 50) / 10));
	document.write("<br>Amount still remaining Rs. :"+ (((amount % 100) % 50) % 10));
}
leap();
area();
main();
getIndex();
rm();
vowelSuccession();
distance();
pay();
note();