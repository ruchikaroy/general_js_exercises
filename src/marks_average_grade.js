function calculateAverage(marksArray) {

    const total = marksArray.reduce((acc, currentValue) => acc + currentValue);

    // let total = 0;
    // for (currValue of marksArray) {
    //     total = total + currValue;
    // }
    return total / marksArray.length;
}

export function calculateGrade(marksArray) {
    let average = calculateAverage(marksArray);

    if (average < 70) return "Grade D";
    if (average < 80) return "Grade C";
    if (average < 90) return "Grade B";
    if (average <= 100) return "Grade A";

}