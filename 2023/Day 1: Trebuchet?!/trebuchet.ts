import calibrationFile from "./calibration-file";

function discardLetters(calibration: string): string[] {
    return calibration.replace(/[A-Za-z]/g, "").split("\n");
}

function discardNumbers(calibration: string): string[] {
    return calibration.replace(/\d/g, "").split("\n");
}

function extractFirstAndLastDigit(strArray: string[]): string[] {
    return strArray.map((element) => {
        if (!element) return "0";

        return `${element[0]}${element[element.length - 1]}`;
    });
}

function convertToNumArray(strArrayFiltered: string[]): number[] {
    return strArrayFiltered.map((element) => {
        return parseInt(element);
    });
}

function snowCalibration2() {
    const strArray = discardNumbers(`two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`);
    console.log(strArray);
}

// function snowCalibration1() {
//     const strArray = discardLetters(`two1nine
// eightwothree
// abcone2threexyz
// xtwone3four
// 4nineeightseven2
// zoneight234
// 7pqrstsixteen`);
//     console.log(strArray);
//     const strArrayFiltered = extractFirstAndLastDigit(strArray);
//     const numArray = convertToNumArray(strArrayFiltered);
//     console.log(numArray);

//     const calibrationSum = numArray.reduce((accum, curr) => {
//         return accum + curr;
//     }, 0);

//     return calibrationSum;
// }

// const result = snowCalibration();
const result = snowCalibration2();
console.log(result);
