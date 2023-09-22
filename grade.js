//Initialize function grade
function generateGrade(marks) {
    if (marks > 79) {
        return 'A';
    } else if (marks >= 60 && marks <= 79) {
        return 'B';
    } else if (marks >= 59 && marks <= 49) {
        return 'C';
    } else if (marks >= 40 && marks <= 49) {
        return 'D';
    } else {
        return 'E';
    }
}

function studentGradeGenerator() {
    while (true) {
        let input = prompt("Enter student's marks (0-100):")
        let marks = parseFloat(input);

        if (!isNaN(marks) && marks >= 0 && marks <= 100) {
            let grade = generateGrade(marks);
            alert(`Grade: ${grade}`);
            break;
        } else {
            alert("Marks must be a number between 0 and 100. Try again.");
        }
    }
}

studentGradeGenerator();