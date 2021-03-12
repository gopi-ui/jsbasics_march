const marks = [80, 80, 60]
let sum = 0;
let leng = marks.length;

function calculateGrade(marks) {

    for (let val of marks) {
        sum = sum + val;
    }
    let avg = Math.floor(sum / leng);
    console.log("average marks :", avg);


    if (avg > 1 && avg <= 59)
        console.log("Grade is F");
    else if (avg > 59 && avg <= 69)
        console.log("Grade is D");
    else if (avg > 69 && avg <= 79)
        console.log("Grade is C");
    else if (avg > 79 && avg <= 89)
        console.log("Grade is B");
    else if (avg > 89 && avg <= 100)
        console.log("Grade is A");


}

calculateGrade(marks);