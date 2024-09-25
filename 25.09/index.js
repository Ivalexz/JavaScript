//task1

// class Car {
//     constructor(manufacturer, model, releaseYear, averageSpeed) {
//         this.manufacturer=manufacturer;
//         this.model=model;
//         this.releaseYear=releaseYear;
//         this.averageSpeed=averageSpeed
//     };

//     showInfo(){
//         console.log(` Manufacturer : ${this.manufacturer},\n Model: ${this.model},\n Year of manufacture: ${this.releaseYear},\n Avarage speed: ${this.averageSpeed}`);
//     };

//     timeCount(distance){
//         this.distance=distance;
//         let time=distance/this.averageSpeed;
//         if(time>=4){
//             time+=Math.floor(time/4);
//         };
//         console.log(`Приблизний час для подолання ${distance} км, з перервами через кожні 4 години: ${Math.round(time)} год`);
//     }
// }

// auto1= new Car('Audi', 'A8', 2007, 90);
// auto1.showInfo();
// auto1.timeCount(3000);


//task2

class Fraction {
    constructor(firstDigit, firstDenominator, secondDigit, secondDenominator) {
        this.firstDigit = firstDigit;
        this.firstDenominator = firstDenominator;
        this.secondDigit = secondDigit;
        this.secondDenominator = secondDenominator;
        if (this.firstDenominator === 0 || secondDenominator === 0) {
            console.log(`Нуль не може бути у знаменнику`);
        }
    };

    adding() {
        if (this.firstDenominator !== 0 || this.secondDenominator !== 0) {
            let digit = (this.firstDigit * this.secondDenominator) + (this.secondDigit * this.firstDenominator)
            let denominator = this.firstDenominator * this.secondDenominator;
            console.log(`Результат додавання двох дробів: ${digit / denominator}`);
        }
    };

    subtraction() {
        if (this.firstDenominator !== 0 || this.secondDenominator !== 0) {
            let digit = (this.firstDigit * this.secondDenominator) - (this.secondDigit * this.firstDenominator)
            let denominator = this.firstDenominator * this.secondDenominator;
            console.log(`Результат віднімання двох дробів: ${digit / denominator}`);
        }
    }

    multiplication() {
        if (this.firstDenominator !== 0 || this.secondDenominator !== 0) {
            let digit = this.firstDigit * this.secondDigit
            let denominator = this.firstDenominator * this.secondDenominator;
            console.log(`Результат множення двох дробів: ${digit / denominator}`);
        }
    }

    division() {
        if (this.firstDenominator !== 0 || this.secondDenominator !== 0) {
            let digit = this.firstDigit * this.secondDenominator
            let denominator = this.firstDenominator * this.secondDigit;
            console.log(`Результат ділення двох дробів: ${digit / denominator}`);
        }
    }

    reduction() {
        if (this.firstDenominator !== 0 || this.secondDenominator !== 0) {
            let digit1=this.firstDigit
            let denominator1=this.firstDenominator
            while(digit1!==denominator1){
                if (digit1 > denominator1) {
                    digit1 -= denominator1;
                }
                else if(digit1 < denominator1){
                    denominator1-=digit1;
                }
            }
            console.log(`Результат скорочення першого дробу: ${this.firstDigit/digit1}, ${this.firstDenominator/digit1}`);
            let digit2=this.secondDigit
            let denominator2=this.secondDenominator
            while(digit2!==denominator2){
                if (digit2 > denominator2) {
                    digit2 -= denominator2;
                }
                else if(digit2 < denominator2){
                    denominator2-=digit2;
                }
            }
            console.log(`Результат скорочення другого дробу: ${this.secondDigit/digit2}, ${this.secondDenominator/digit2}`);
        }
    }
}

obj1 = new Fraction(36, 24, 54, 8)
obj1.adding()
obj1.subtraction()
obj1.multiplication()
obj1.division()
obj1.reduction()