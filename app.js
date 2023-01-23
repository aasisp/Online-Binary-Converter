// Following function is use to occupy blank space of screen
const screen = document.getElementById("header");
(function () {
    if(window.innerWidth > 450)
        document.getElementsByTagName("body")[0].innerHTML = `<center style="padding-top: 20%;"><h2 class="b700">Please! Visit the site using mobile.</h2>`;
    else{
        let deviceWidth = (window.innerHeight - 460) - 186.199;
        if(deviceWidth < 90){
            screen.style.display = "none";
        }else {
            screen.style.height = (window.innerHeight - 460) - 186.199 + "px";
        }
    }
})();

// Following function is to perform Binary conversion.
const binaryCalculation = (input) => {
    let result = new Array(), remainder, division, counter = 0, finalResult;
    while (input > 0) {
        remainder = Math.floor(input) % 2;
        division = Math.floor(input / 2);
        input = division;
        if (division == 1) {
            result[counter] = remainder;
            result[counter + 1] = 1;
        }
        else {
            result[counter] = remainder;
        }
        counter++;
    }
    result.reverse();
    finalResult = result.join('');
    return finalResult;
}

// Following function is to perform Hexadecimal conversion.
const hexaCalculation = (input) => {
    let result = new Array(), remainder, division, counter = 0, finalResult;
    while (input > 0) {
        remainder = Math.floor(input) % 16;
        division = Math.floor(input / 16);
        input = division;
        if (remainder >= 10) {
            if (remainder == 10) {
                remainder = "A";
            }
            else if (remainder == 11) {
                remainder = "B";
            }
            else if (remainder == 12) {
                remainder = "C";
            }
            else if (remainder == 13) {
                remainder = "D";
            }
            else if (remainder == 14) {
                remainder = "E";
            }
            else if (remainder == 15) {
                remainder = "F";
            }
        }
        result[counter] = remainder;
        counter++;
    }
    result.reverse();
    finalResult = result.join('');
    return finalResult;
}

// Following function is to perform Octal conversion.
const octalCalculation = (input) => {
    let result = new Array(), remainder, division, counter = 0, finalResult;
    while (input > 0) {
        remainder = input % 8;
        division = input / 8;
        input = Math.floor(division);
        result[counter] = remainder;
        counter++;
    }
    result.reverse();
    finalResult = result.join('');
    return finalResult;
}

// Selection of elements
let inputField = document.getElementById("user-input"),
    binaryOutput = document.getElementById("binary-output"),
    hexaOutput = document.getElementById("hexa-output"),
    octalOutput = document.getElementById("octal-output"),
    clrBtn = document.getElementById("clr"),
    numPad = document.getElementsByClassName("num-key"),
    deleteBtn = document.getElementById("delete"),
    input;

// This loop perform to get the value from a button and 
// assign to inputfield and to the input variable for the 
// further calculation.
for (let i = 0; i < numPad.length; i++) {
    let key = numPad[i];
    key.addEventListener("click", e => {
        input = inputField.value += key.value;
        binaryOutput.innerText = binaryCalculation(input);
        hexaOutput.innerText = hexaCalculation(input);
        octalOutput.innerText = octalCalculation(input);
        new Audio("./tap.mp3").play();
    });
}

// This event to clear the value that have been assigned to
//  inputfield, input variable, and clear the output screen too.
clrBtn.addEventListener("click", e => {
    inputField.value = "";
    binaryOutput.innerText = "";
    hexaOutput.innerText = "";
    octalOutput.innerText = "";
    new Audio("./tap.mp3").play();
});

// This event perform to erase the last value of inputfield and input var
deleteBtn.addEventListener("click", e => {
    if(inputField.value != ""){
        input = input.slice(0, -1);
        inputField.value = input;
        binaryOutput.innerText = binaryCalculation(input);
        hexaOutput.innerText = hexaCalculation(input);
        octalOutput.innerText = octalCalculation(input);
        new Audio("./tap.mp3").play();
    }
});
