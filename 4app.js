function calculate(amount,rate,years){
    var p=parseInt(amount);
    var r=parseFloat(rate);
    var n=parseInt(years);

    var m_i=r/100/12;//monthly interest
    var t=n*12;

    var x=Math.pow(1+m_i,t)
    var monthly=(p*x*m_i)/(x-1);

    var emi=monthly.toFixed(2);
    var totalPayment=(emi*t).toFixed(2);
    var totalInterest=(totalPayment-p);
    document.getElementById("demo").innerHTML="Loan EMI: "+emi+"<br>"+"Total Interest Payable: "+totalInterest+"<br>"+"Total Payment: "+totalPayment;
}