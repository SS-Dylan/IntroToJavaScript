"using strict";
let calculateButton = document.getElementById("calculateButton");
calculateButton.addEventListener("click", (e) => {
    let number1 = document.getElementById("firstNumber").value;
    let number2 = document.getElementById("secondNumber").value;
    let result = Number(number1) + Number(number2);
    document.getElementById("result").innerHTML = result; // innerHTML is not recommended, can
                                                          // be a security risk
});
