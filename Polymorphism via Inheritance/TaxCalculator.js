// function taxCalculator(tax, country){
//     this.tax = tax;
//     this.country = country;
// }
// var Ps = new taxCalculator("10000", "Palestine");
// // var Jordan = new taxCalculator("2000", "Jordan");
// // var Lebanon = new taxCalculator("8000", "Lebanon");

// // display the tax
// document.getElementById("print").innerHTML = "The tax for " + Ps + " is " + Ps.tax + "$."; 


class taxCalculator{
    constructor(tax, country){
        this.tax = 1000
        this.country = country
    }

    Tax(){
        document.write("The tax for " + this.country + " is " + this.tax + "$. <br>");
    }
}

let test = new taxCalculator('test');
test.Tax();