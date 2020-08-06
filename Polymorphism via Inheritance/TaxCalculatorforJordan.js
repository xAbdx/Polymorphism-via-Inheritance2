// var Jordan = new taxCalculator("1000", "Jordan");
// document.getElementById("print").innerHTML = "The tax for " + Jordan + " is " + Jordan.tax + "$.";


class taxCalculatorForJordan extends taxCalculator{

    Tax(){
        super.Tax();
        document.write("The tax for " + this.country + " is " + this.tax + "$. <br>");
    }
}

let jordan = new taxCalculator('Jordan');
jordan.Tax();