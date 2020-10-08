let numberFromBinary = $('#number-from-binary');
let wynik;
// document.getElementById('answer').innerHTML = '1';

function CheckRadio() {
    var RadioButtons = document.querySelectorAll(".numberfrom");
    for (let i = 0; i < RadioButtons.length; i++) {
        if (RadioButtons[i].checked) {
            // document.getElementById('answer').innerHTML = RadioButtons[i].value;
            const myNumber = document.querySelector('#number-from').value;
            let answer = null;
            let power = 0;
            wynik = 0;
            if (RadioButtons[i].value == 2) {
                for (let i = (myNumber.length - 1); i >= 0; i--) {
                    wynik += myNumber[i] * Math.pow(2, power);
                    power++
                }
            }
            else if (RadioButtons[i].value == 4) {
                for (let i = (myNumber.length - 1); i >= 0; i--) {
                    wynik += myNumber[i] * Math.pow(4, power);
                    power++
                }
            }
            else if (RadioButtons[i].value == 8) {
                for (let i = (myNumber.length - 1); i >= 0; i--) {
                    wynik += myNumber[i] * Math.pow(8, power);
                    power++
                }
            }
            // DO DOPRACOWANIA
            else if (RadioButtons[i].value == 16) {
                // for (let i = (myNumber.length - 1); i >= 0; i--) {
                //     if (myNumber[i] == "A") { myNumber[i] = 10 }
                //     else if (myNumber[i] == "B") { myNumber[i] = 11 }
                //     else if (myNumber[i] == "C") { myNumber[i] = 12 }
                //     else if (myNumber[i] == "D") { myNumber[i] = 13 }
                //     else if (myNumber[i] == "E") { myNumber[i] = 14 }
                //     else if (myNumber[i] == "F") { myNumber[i] = 15 }
                //     wynik += myNumber[i] * Math.pow(16, power);
                //     console.log(wynik);
                //     document.getElementById('answer').innerHTML = wynik;
                //     power++
                // }
                wynik = parseInt(myNumber, 16);
            }
            else if (RadioButtons[i].value == 10) {
                wynik = parseInt(myNumber);
            }
        }
    }
    var secondRadioButtons = document.querySelectorAll(".numberto");
    for (let i = 0; i < RadioButtons.length; i++) {
        if (secondRadioButtons[i].checked) {
            if (RadioButtons[i].value == 2) {
                wynik = wynik.toString(2);
            }
            else if (RadioButtons[i].value == 4) {
                wynik = wynik.toString(4);
            }
            else if (RadioButtons[i].value == 8) {
                wynik = wynik.toString(8);
            }
            else if (RadioButtons[i].value == 16) {
                wynik = wynik.toString(16);
            }
            else if (RadioButtons[i].value == 10) {
                wynik = wynik.toString(10);
            }
        }
    }
    document.getElementById('result').innerHTML = ' ' + wynik;
}