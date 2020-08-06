// var Ps = new taxCalculator("10000", "Palestine");
// document.getElementById("print").innerHTML = "The tax for " + Ps + " is " + Ps.tax + "$.";


class taxCalculatorForPs extends taxCalculator{

    Tax(){
        super.Tax();
        document.write("The tax for " + this.country + " is " + this.tax + "$. <br>");
    }
}

let palestine = new taxCalculator('Palestine');
palestine.Tax();