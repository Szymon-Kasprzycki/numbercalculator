let wynik;

function CheckRadio() {
    var RadioButtons = document.querySelectorAll(".numberfrom");
    for (let i = 0; i < RadioButtons.length; i++) {
        if (RadioButtons[i].checked) {
            let myNumber = document.querySelector('#number-from').value;
            let power = 0;
            wynik = 0;
            if (RadioButtons[i].value == 2) {
                for (let i = (myNumber.length - 1); i >= 0; i--) {
                    const binary = [0, 1]
                    if (binary.indexOf(parseInt(myNumber[i], 10)) == -1) {
                        alert("Liczba " + myNumber + " nie jest liczbą binarną!");
                        wynik = "";
                        return;
                    }
                    else {
                        wynik += myNumber[i] * Math.pow(2, power);
                        power++;
                    }
                }
            }

            if (RadioButtons[i].value == 4) {
                for (let i = (myNumber.length - 1); i >= 0; i--) {
                    const quad = [0, 1, 2, 3]
                    if (quad.indexOf(parseInt(myNumber[i], 10)) == -1) {
                        alert("Liczba " + myNumber + " nie jest liczbą w systemie czwórkowym!");
                        wynik = "";
                        return;
                    }
                    else {
                        wynik += myNumber[i] * Math.pow(4, power);
                        power++;
                    }
                }
            }
            if (RadioButtons[i].value == 8) {
                for (let i = (myNumber.length - 1); i >= 0; i--) {
                    const octal = [0, 1, 2, 3, 4, 5, 6, 7]
                    if (octal.indexOf(parseInt(myNumber[i], 10)) == -1) {
                        alert("Liczba " + myNumber + " nie jest liczbą w systemie ósemkowym!");
                        wynik = "";
                        return;
                    }
                    else {
                        wynik += myNumber[i] * Math.pow(8, power);
                        power++;
                    }
                }
            }
            if (RadioButtons[i].value == 16) {
                myNumber = myNumber.toUpperCase();
                for (let i = (myNumber.length - 1); i >= 0; i--) {
                    const hexaDecimal = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
                    if (hexaDecimal.indexOf(myNumber[i]) == -1) {
                        alert("Liczba " + myNumber + " nie jest liczbą w systemie szesnastkowym! (litery w liczbie powinny być zapisane jako wielkie!!!)");
                        wynik = "";
                        return;
                    }
                    else {
                        wynik = parseInt(myNumber, 16);
                    }
                }
            }
            if (RadioButtons[i].value == 10) {
                for (let i = (myNumber.length - 1); i >= 0; i--) {
                    const decimal = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
                    if (decimal.indexOf(myNumber[i]) == -1) {
                        alert("Liczba " + myNumber + " nie jest liczbą w systemie dziesiętnym!");
                        wynik = "";
                        return;
                    }
                    else {
                        wynik = parseInt(myNumber, 10);
                    }
                }
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
    document.getElementById('result').innerHTML = wynik;
}