// var Lebanon = new taxCalculator("8000", "Lebanon");
// document.getElementById("print").innerHTML = "The tax for " + Lebanon + " is " + Lebanon.tax + "$.";


class taxCalculatorForLebanon extends taxCalculator{

    Tax(){
        super.Tax();
        document.write("The tax for " + this.country + " is " + this.tax + "$. <br>");
    }
}

let lebanon = new taxCalculator('Lebanon');
lebanon.Tax();