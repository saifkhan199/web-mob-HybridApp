var sec=0;
var min=0;
var msec=0;
var interval;

var hsec=document.getElementById('sec');
var hmin=document.getElementById('min');
var hmsec=document.getElementById("msec");

function timer(){
    msec++;
    hmsec.innerHTML=msec;

    if(msec>=100){
        sec++
        hsec.innerHTML='&nbsp'+sec+" :";
        msec=0;
    
    }

    if(sec>=60){
        min++
        hmin.innerHTML='&nbsp'+min+" :";
        sec=0;
    
    }

}

function start(time){
    interval=setInterval(timer,time);
    document.getElementById("sbtn").disabled=true;
    document.getElementById("stopbtn").disabled=false;

}

function stop(){
    clearInterval(interval);
    document.getElementById("sbtn").disabled=false;

    document.getElementById("history").innerHTML+="Min: "+min+" Sec: "+sec+" Millisec: "+msec+"<br>";
    document.getElementById("stopbtn").disabled=true;
}

function reset(){
    sec=0;
    msec=0;
    min=0;
    hsec.innerHTML='&nbsp'+0+" :";
    hmin.innerHTML='&nbsp'+0+" :";
    hmsec.innerHTML='&nbsp'+0+"&nbsp";
}

