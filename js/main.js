document.getElementById("taxCalculatorForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

   
    var carValue = parseFloat(document.getElementById("carValue").value);
    var engineCapacity = parseFloat(document.getElementById("engineCapacity").value);
    var carType = document.getElementById("carType").value;

   
    var tax = calculateTax(carValue, engineCapacity, carType);

   
    document.getElementById("result").textContent = "Podatek akcyzowy: " + tax.toFixed(2) + " PLN";
});

function calculateTax(carValue, engineCapacity, carType) {
    var tax = 0;

    if (isNaN(carValue) || isNaN(engineCapacity) || carValue < 0 || engineCapacity < 0) {
        alert("Wprowadź poprawne wartości samochodu i pojemności silnika.");
        return tax;
    }

    if (carType === "personal") {
        if (engineCapacity <= 2000) {
            tax = carValue * 0.031;
        } else {
            tax = carValue * 0.186;
        }
    } else if (carType === "hybrid") {
        if (engineCapacity <= 2000) {
            tax = carValue * 0.0155;
        } else {
            tax = carValue * 0.093;
        }
    } else if (carType === "electric") {
        tax = 0; 
    } else if (carType === "phev") {
        if (engineCapacity <= 2000) {
            tax = 0; 
        } else {
            tax = carValue * 0.093;
        }
    }

    return tax;
}