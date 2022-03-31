//define the variables put in
function calculateTip() {
    var total = document.getElementById("total").value;
    var tipPerc = document.getElementById("tipPerc").value;
    var people = document.getElementById("people").value;

    //check the input
    if (total === "" || tipPerc == 0) {
        alert("Please enter values");
        return;
    }
    //check to see if people is at least one
    if (people === "" || people <= 1) {
        people = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }
    //calculate the tip
    var total = (total * tipPerc) / people;
    total = Math.round(total * 100) / 100;
    //make sure the total is only 2 decimals
    total = total.toFixed(2);
    //show the tip using the variables
    document.getElementById("Tip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

//calculate the tip when pushed
document.getElementById("calculate").onclick = function () {
    calculateTip();
};