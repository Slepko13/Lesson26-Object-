function getCar() {
    let newCar = {
        type: "Toyota",
        model: "RAV4",
        year: 2017,
        speed: 100
    };

    let obj = "";

    showCarData();

    let distance = +prompt(`Input distance`);

    getTime(distance, newCar.speed);

    function showCarData() {
        for (key in newCar) {
            obj += `${newCar[key]}, `;
        }
        alert(obj);
    }

    function getTime(distance, speed) {
        let hours = distance / speed;
        let interval = 4;
        let pauseTime = 0;
        for (let i = 0; i < hours; i++) {
            if (interval == i && interval < hours) {
                pauseTime++;
                interval += 4;
            }
        }
        alert(` You need ${hours + pauseTime} hours`);
    }
}

//Floats
function getOperations() {
    let firstObj = {};
    let secondObj = {};

    firstObj.numerator = +prompt(`Input first numerator`);
    firstObj.denominator = +prompt(`Input first denominator`);

    secondObj.numerator = +prompt(`Input second numerator`);
    secondObj.denominator = +prompt(`Input second denominator`);

    let minMultiple = getMinMultiple(firstObj.denominator, secondObj.denominator);

    calculateReduction(firstObj.numerator, firstObj.denominator);
    calculateReduction(secondObj.numerator, secondObj.denominator);

    calculateAddition(
        firstObj.numerator,
        secondObj.numerator,
        firstObj.denominator,
        secondObj.denominator,
        minMultiple
    );
    calculateSubtraction(
        firstObj.numerator,
        secondObj.numerator,
        firstObj.denominator,
        secondObj.denominator,
        minMultiple
    );
    calculateMultiplication(
        firstObj.numerator,
        secondObj.numerator,
        firstObj.denominator,
        secondObj.denominator
    );
    calculateDivision(
        firstObj.numerator,
        secondObj.numerator,
        firstObj.denominator,
        secondObj.denominator
    );

    function getMinMultiple(a, b) {
        for (let i = 1; i <= a * b; i++) {
            if (i % a == 0 && i % b == 0) {
                return i;
            }
        }
    }

    function calculateAddition(a, b, c, d, x) {
        let newNumerator = (a * x) / c + (b * x) / d;
        let tempA = newNumerator;
        let tempB = x;
        let tempNumerator;
        let tempX;
        tempNumerator = calculateReductionNumerator(tempA, x);
        tempX = calculateReductionDenominator(newNumerator, tempB);

        if (newNumerator / x > 1 && !(newNumerator % x == 0)) {
            alert(
                `${a}/${c} + ${b}/${d} = ${newNumerator}/${x} = ${Math.trunc(
                    tempNumerator/ tempX
        )} ${tempNumerator % tempX}/${tempX}`
            );
        } else if (newNumerator / x < 1) {
            alert(`${a}/${c} + ${b}/${d} =  ${newNumerator}/${x} = ${tempNumerator}/${tempX}`);
        } else if (newNumerator % x == 0) {
            alert(
                `${a}/${c} + ${b}/${d} = ${newNumerator}/${x} = ${newNumerator / x}`
            );
        }


    }

    /* function calculateSubtraction(a, b, c, d, x) {
         let newNumerator = (a * x) / c - (b * x) / d;
         if (Math.abs(newNumerator / x) > 1) {
             alert(
                 `${a}/${c} - ${b}/${d} = ${newNumerator}/${x} = - ${Math.trunc(
           Math.abs(newNumerator / x)
         )} ${Math.abs(newNumerator) % x}/${x}`
             );
         } else if (newNumerator / x < 1) {
             alert(`${a}/${c} - ${b}/${d} = ${newNumerator}/${x}`);
         } else {
             alert(`${a}/${c} - ${b}/${d} = ${newNumerator / x}`);
         }
     }

     function calculateMultiplication(a, b, c, d) {
         let newNumerator = a * b;
         let newDenominator = c * d;
         if (
             newNumerator / newDenominator > 1 &&
             !(newNumerator % newDenominator == 0)
         ) {
             alert(
                 `${a}/${c} * ${b}/${d} = ${newNumerator}/${newDenominator} = ${Math.trunc(
           newNumerator / newDenominator
         )} ${newNumerator % newDenominator}/${newDenominator}`
             );
         } else if (newNumerator / newDenominator < 1) {
             alert(`${a}/${c} * ${b}/${d} = ${newNumerator}/${newDenominator}`);
         } else if (newNumerator % x == 0) {
             alert(
                 `${a}/${c} * ${b}/${d} = ${newNumerator}/${newDenominator} = ${newNumerator /
           newDenominator}`
             );
         }
     }

     function calculateDivision(a, b, c, d) {
         let newNumerator = a * d;
         let newDenominator = c * b;
         if (
             newNumerator / newDenominator > 1 &&
             !(newNumerator % newDenominator == 0)
         ) {
             alert(
                 `${a}/${c} / ${b}/${d} = ${newNumerator}/${newDenominator} = ${Math.trunc(
           newNumerator / newDenominator
         )} ${newNumerator % newDenominator}/${newDenominator}`
             );
         } else if (newNumerator / newDenominator < 1) {
             alert(`${a}/${c} / ${b}/${d} = ${newNumerator}/${newDenominator}`);
         } else if (newNumerator % newDenominator == 0) {
             alert(
                 `${a}/${c} / ${b}/${d} = ${newNumerator}/${newDenominator} = ${newNumerator /
           newDenominator}`
             );
         }
     }*/

    function calculateReduction(a, b) {
        let gcd;
        let num = a;
        let denum = b;
        while (num * denum != 0) {

            if (num >= denum) {
                num = num % denum;
            } else {
                denum = denum % num;
            }
            gcd = num + denum;
        }
        a = a / gcd;
        b = b / gcd;


    }

    function calculateReductionNumerator(a, b) {
        let gcd;
        let num = a;
        let denum = b;
        while (num * denum != 0) {

            if (num >= denum) {
                num = num % denum;
            } else {
                denum = denum % num;
            }
            gcd = num + denum;
        }
        a = a / gcd;
        b = b / gcd;

        return a;

    }

    function calculateReductionDenominator(a, b) {
        let gcd;
        let num = a;
        let denum = b;
        while (num * denum != 0) {

            if (num >= denum) {
                num = num % denum;
            } else {
                denum = denum % num;
            }
            gcd = num + denum;
        }
        b = b / gcd;

        return b;

    }
}
//Time

function getTime() {

    let time = {};
    time.hours = +prompt(`Input your hours`);
    time.minutes = +prompt(`Input your minutes`);
    time.seconds = +prompt(`Input your seconds`);


    showTime(time);

    time.hours = +time.hours;
    time.minutes = +time.minutes;
    time.seconds = +time.seconds;



    changeSeconds(time);
    showTime(time);

    time.hours = +time.hours;
    time.minutes = +time.minutes;
    time.seconds = +time.seconds;


    changeMinutes(time);
    showTime(time);

    time.hours = +time.hours;
    time.minutes = +time.minutes;
    time.seconds = +time.seconds;

    stringTime = "";
    changeHours(time);
    showTime(time);




    function showTime(obj) {

        if (obj.seconds < 10) {
            obj.seconds = `0${obj.seconds}`;
        }
        if (obj.minutes < 10) {
            obj.minutes = `0${obj.minutes}`
        }
        if (obj.hours < 10) {
            obj.hours = `0${obj.hours}`
        }
        alert(`Your time is ${obj.hours}:${obj.minutes}:${obj.seconds}`);
    }

    function changeSeconds(obj) {
        let addSeconds = +prompt(`Input second to add`);
        obj.seconds += addSeconds;
        if (obj.seconds >= 60) {
            obj.seconds = obj.seconds - 60;

            obj.minutes += 1;
        }

        if (obj.minutes >= 60) {
            obj.minutes = obj.minutes - 60;
            obj.hours++;
        }
        if (obj.hours >= 24) {
            obj.hours = 0;
        }

    }

    function changeMinutes(obj) {
        let addMinutes = +prompt(`Input minutes to add`);
        obj.minutes += addMinutes;

        if (obj.minutes >= 60) {
            obj.minutes = obj.minutes - 60;
            obj.hours++;
        }
        if (obj.hours >= 24) {
            obj.hours = 0;
        }
    }

    function changeHours(obj) {
        let addHours = +prompt(`Input hours to add`);
        obj.hours += addHours;
        if (obj.hours >= 24) {
            obj.hours -= 24;
        }

    }
}
//test
function getTest() {
    let a = 5;
    alert("a = " + a);


    changeA(a);
    alert("a = " + a);

    function changeA(x) {
        x = x + 5;
        alert("x = " + x);
    }
}