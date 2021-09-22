class Calculator {
    innerScreen = document.getElementById('innerScreen');
    onScreen = '0';
    memory = [];
    isNum1saved = 0;
    numButtonClicked(evt) {
        if (this.memory[1] != undefined && this.isNum1saved === 0) {
            this.clearScreen()
            this.isNum1saved = 1;
        }

        this.onScreen += evt.target.innerHTML;
    }
    dotButtonClicked() {
        if (this.onScreen.includes('.')) {
            return
        }
        this.onScreen += '.';

    }
    dispalyOnsScreen() {
        if (this.onScreen.includes('.')) {
            let integerPart = this.onScreen.split('.')[0];
            let decimalPart = this.onScreen.split('.')[1];

            this.innerScreen.innerHTML = parseInt(integerPart).toLocaleString() + '.' + decimalPart;
        } else {

            this.innerScreen.innerHTML = parseInt(this.onScreen).toLocaleString();
        }


    }
    clearMemory() {
        this.memory = [];
    }
    operatorButtonClicked(evt) {
        /* if (this.memory[0] === undefined) {
             return
         }*/
        this.memory[0] = parseFloat(this.onScreen.replace(/,/g, ''));
        this.memory[1] = evt.target.innerHTML
    }
    operator() {

    }
    calculateClicked() {
        if (this.memory[1] === undefined) {
            return
        }
        this.memory[2] = parseFloat(this.onScreen.replace(/,/g, ''));
        switch (this.memory[1]) {
            case "+":
                this.result = this.memory[0] + this.memory[2];
                break;
            case "+":
                this.result = this.memory[0] + this.memory[2];
                break;
            case "-":
                this.result = this.memory[0] - this.memory[2];
                break;
            case "x":
                this.result = this.memory[0] * this.memory[2];
                break;
            case "/":
                this.result = this.memory[0] / this.memory[2];
                break;
        }
        this.clearMemory()
        this.onScreen = this.result.toString();
        this.isNum1saved = 0;

    }

    clearScreen() {
        this.onScreen = '';

    }
}
class UI {
    changeTosecondThem() {
        let them = 'secondth'
        document.querySelector("body").className = them;

    }
    changeTofirstThem() {
        let them = 'firstth'
        document.querySelector("body").className = them;

    }
}
const calculator = new Calculator;
const ui = new UI;
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const dotButton = document.querySelector(".dot");
const resetButton = document.querySelector(".reset");
const equalButton = document.querySelector(".equal");
const delButton = document.querySelector(".del");
for (const numberButton of numberButtons) {
    numberButton.addEventListener('click', (evt) => {
        calculator.numButtonClicked(evt);
        calculator.dispalyOnsScreen()
    })
}
for (const operatorButton of operatorButtons) {
    operatorButton.addEventListener('click', (evt) => {
        calculator.operatorButtonClicked(evt);
    })
}

dotButton.addEventListener('click', () => {
    calculator.dotButtonClicked()
    calculator.dispalyOnsScreen()
})
equalButton.addEventListener('click', () => {
    calculator.calculateClicked()
    calculator.dispalyOnsScreen()
})
const them1 = document.querySelector('input#one');
them1.addEventListener('change', () => {
    ui.changeTofirstThem()
})
const them2 = document.querySelector('input#two');
them2.addEventListener('change', () => {
    ui.changeTosecondThem()
})