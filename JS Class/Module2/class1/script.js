let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let checkBtn = document.getElementById('btn');
let spanResult = document.getElementById('result');
let inputResult = document.getElementById('result2');

checkBtn.addEventListener('click', () => {
    // Extra check: If any of the two is empty, return an error
    if (num1.value == "" || num2.value == "") {
        alert("Empty field detected. Kindly make .....")
        return;
    }

    // Program proper
    if(parseInt(num1.value) > parseInt(num2.value)){
        spanResult.innerText = num1.value + " is greater than " + num2.value;
        inputResult.value = num1.value + " is greater than " + num2.value;
    }else if(parseInt(num2.value) > parseInt(num1.value)){
        inputResult.value =  spanResult.innerText = num2.value + " is greater than " + num1.value;
    }else{
        inputResult.value =  spanResult.innerText = "Both number are equal";
    }
});

/* The code below is an equivalent of using the ES5 function as a callback function */
// checkBtn.addEventListener('click', function() {

// });




