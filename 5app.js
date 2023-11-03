function fd(amount,years){
    var p=parseInt(amount);
    var n=parseInt(years);

    var m=(p*5.5*n/100)

    var IA=p;
    var Return=m.toFixed(2);
    var totalvalue=(p+m).toFixed(2);
    document.getElementById("demo").innerHTML="Invested Amount: "+IA+"<br>"+"Est.return: "+Return+"<br>"+"Total Value: "+totalvalue;
}
function lic(amount,years){
    var p=parseInt(amount);
    var n=parseInt(years);
    var m=(p*7*n/100)
    var IA=p;
    var Return=m.toFixed(2);
    var totalvalue=(p+m).toFixed(2);
    document.getElementById("demo").innerHTML="Invested Amount: "+IA+"<br>"+"Est.return: "+Return+"<br>"+"Total Value: "+totalvalue;
}
function sensex(amount,years){
    var p=parseInt(amount);
    var n=parseInt(years);
    var m=(p*15*n/100)

    var IA=p;
    var Return=m.toFixed(2);
    var totalvalue=(p+m).toFixed(2);
    document.getElementById("demo").innerHTML="Invested Amount: "+IA+"<br>"+"Est.return: "+Return+"<br>"+"Total Value: "+totalvalue;
}
function ppf(amount,years){
    var p=parseInt(amount);
    var n=parseInt(years);

    var m=(p*7.1*n/100)

    var IA=p;
    var Return=m.toFixed(2);
    var totalvalue=(p+m).toFixed(2);
    document.getElementById("demo").innerHTML="Invested Amount: "+IA+"<br>"+"Est.return: "+Return+"<br>"+"Total Value: "+totalvalue;
}
function po(amount,years){
    var p=parseInt(amount);
    var n=parseInt(years);

    var m=(p*4*n/100)

    var IA=p;
    var Return=m.toFixed(2);
    var totalvalue=(p+m).toFixed(2);
    document.getElementById("demo").innerHTML="Invested Amount: "+IA+"<br>"+"Est.return: "+Return+"<br>"+"Total Value: "+totalvalue;
}