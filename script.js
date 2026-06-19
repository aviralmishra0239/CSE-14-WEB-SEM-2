function calculateResult() {
    let n = parseInt(document.getElementById("subjects").value);

    if (isNaN(n) || n <= 0) {
        alert("Please enter a valid number of subjects.");
        return;
    }

    let total = 0;

    for (let i = 1; i <= n; i++) {
        let marks = parseFloat(prompt("Enter marks for Subject " + i));

        if (isNaN(marks) || marks < 0 || marks > 100) {
            alert("Please enter valid marks between 0 and 100.");
            return;
        }

        total += marks;
    }

    let average = total / n;
    let grade;
    let result;

    if (average >= 90) {
        grade = "A+";
    } else if (average >= 80) {
        grade = "A";
    } else if (average >= 70) {
        grade = "B";
    } else if (average >= 60) {
        grade = "C";
    } else if (average >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    if (average >= 40) {
        result = "Pass";
    } else {
        result = "Fail";
    }

    document.getElementById("result").innerHTML =
        "Total Marks: " + total + "<br>" +
        "Average: " + average.toFixed(2) + "<br>" +
        "Grade: " + grade + "<br>" +
        "Result: " + result;
}