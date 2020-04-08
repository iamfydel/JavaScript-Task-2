let data = [
    { principal: 2500, time: 1.8 },
    { principal: 1000, time: 5 },
    { principal: 3000, time: 1 },
    { principal: 2000, time: 3 },
];
let rate = 0;
let interest = 0;
let interestData = [];

function interestCalculator(data) {
    data.forEach((element) => {
        if (element.principal >= 2500 && (element.time > 1 && element.time < 3)) {
            rate = 3;
        }
        else if (element.principal >= 2500 && element.time >= 3) {
            rate = 4;
        }
        else if (element.principal < 2500 || element.time <= 1) {
            rate = 2;
        }
        else {
            rate = 1;
        }
        
        interest = (element.principal * rate * element.time) / 100;
        interestData.push({
            principal: element.principal,
            rate: rate,
            time: element.time,
            interest: interest
        });
    });

    console.log(interestData);
    return interestData;
}

interestCalculator(data);
