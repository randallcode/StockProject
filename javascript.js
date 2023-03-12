function calculate()
{
        startingAmount = document.getElementById("startingAmount").value;
        yearsOfGrowth = document.getElementById("yearsOfGrowth").value;
        interestValue = document.getElementById("interestValue").value;
       

            var interestValueDecimal = (interestValue/100) ;
            var num1 = (interestValueDecimal/1); //0.040
            var num2 = (1*yearsOfGrowth); //8
            var num3 = (1+num1); //1.004
            var num4 = (num3**num2); //1.3685
            var result = "$"+(startingAmount * num4).toFixed(2);
            document.getElementById("result").innerHTML = result
            
            //alert("num1 is " + num1);
            //alert("num2 is " + num2);
            //alert("num3 is " + num3);
            //alert("num4 is " + num4);
            //alert("Final Value is " + result);
}
