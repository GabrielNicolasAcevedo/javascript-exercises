const sumAll = function (num1, num2) {
    let numArr = [];

    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            numArr.push(i);
        }
        return numArr.reduce((total, num) => total + num);
    } else {
        for (let i = num2; i <= num1; i++) {
            numArr.push(i);
        }
        return numArr.reduce((total, num) => total + num);  
    }
};

// Do not edit below this line
module.exports = sumAll;
