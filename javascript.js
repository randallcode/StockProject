function calculate()
{
        startingAmount = document.getElementById("startingAmount").value;
        yearsOfGrowth = document.getElementById("yearsOfGrowth").value;
        interestValue = document.getElementById("interestValue").value;
       

            let interestValueDecimal = (interestValue/100) ;
            let num1 = (interestValueDecimal/1); 
            let num2 = (1*yearsOfGrowth); 
            let num3 = (1+num1); 
            let num4 = (num3**num2); 
            let result = "$"+(startingAmount * num4).toFixed(2);
            document.getElementById("result").innerHTML = result
            
            //alert("num1 is " + num1);
            //alert("num2 is " + num2);
            //alert("num3 is " + num3);
            //alert("num4 is " + num4);
            //alert("Final Value is " + result);
}
