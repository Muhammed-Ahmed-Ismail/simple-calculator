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
        } else if (this.onScreen === "") {
            this.innerScreen.innerHTML = "0";

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
    reset() {
        this.clearMemory()
        this.clearScreen()
        this.dispalyOnsScreen()
    }
    delete() {
        if (this.onScreen === "0") {
            return
        }
        let nums = this.onScreen.split("");
        nums.pop()
        this.onScreen = nums.join("")
        this.dispalyOnsScreen()
    }
}

const calculator = new Calculator;

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
};

dotButton.addEventListener('click', () => {
    calculator.dotButtonClicked()
    calculator.dispalyOnsScreen()
});
equalButton.addEventListener('click', () => {
    calculator.calculateClicked()
    calculator.dispalyOnsScreen()
});
resetButton.addEventListener('click', () => {
    calculator.reset()
});
delButton.addEventListener('click', () => {
    calculator.delete()
})




class UI {
    theme = "firstth";
    setTheme(theme) {
        this.theme = theme
    }
    changeTheme() {
        document.querySelector("body").className = this.theme;
        document.querySelector("div.screen").className = "screen " + this.theme;
        document.querySelector("div.top").className = "top " + this.theme;
        document.querySelector("div.body").className = "body " + this.theme;
        //document.querySelectorAll("button.square.number").className = "button square " + this.theme;
        for (let button of document.querySelectorAll("button.square.number")) {
            button.className = "square number " + this.theme;
            console.log(button)
        }
        for (let button of document.querySelectorAll("button.square.operator")) {
            button.className = "square operator " + this.theme;
            console.log(button)
        }
        document.querySelector("button.square.dot").className = "square dot " + this.theme;
        document.querySelector("button.square.del").className = "square del " + this.theme;
        document.querySelector("button.rectangle.reset").className = "rectangle reset " + this.theme;
        document.querySelector("button.rectangle.equal").className = "rectangle equal " + this.theme;
        document.querySelector("div.switchpoint").className = "switchpoint " + this.theme;
    }
}

const ui = new UI;
const them1 = document.querySelector('input#one');
them1.addEventListener('input', () => {
    ui.setTheme('firstth')
    ui.changeTheme()
})
const them2 = document.querySelector('input#two');
them2.addEventListener('input', () => {
    ui.setTheme('secondth')
    ui.changeTheme()
})