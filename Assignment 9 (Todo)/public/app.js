function add(){
//add items in list
var item=document.getElementById("items");
var li=document.createElement('li');
var ul=document.getElementById("to-do-items");
var text=document.createTextNode(item.value);
var fieldset=document.createElement('fieldset');

li.appendChild(text);

//delete button
var deletebtn=document.createElement('button');
var deltext=document.createTextNode('Delete');

deletebtn.setAttribute('class','btn');
deletebtn.setAttribute('onclick','deleteItem(this)');
deletebtn.setAttribute("style","margin: 3px");
deletebtn.appendChild(deltext);
li.appendChild(deletebtn);


//edit button
var editbtn=document.createElement("button");
var edittext=document.createTextNode("Edit");

editbtn.appendChild(edittext);
editbtn.setAttribute("onclick","editItem(this)")
li.appendChild(editbtn);

item.value="";
ul.appendChild(li);

}
function deleteItem(e){
    e.parentNode.remove();
}
function editItem(e){
    var val=e.parentNode.firstChild.nodeValue;
    var editedValue=prompt("Edit It now",val);

    e.parentNode.firstChild.nodeValue=editedValue;
}
function deleteAll(){
   document.getElementById('to-do-items').innerHTML="";
}
