function getGrade(mark){
    if(mark >79){
        return "A";
    }else if (mark >= 60 && mark <= 79){
        return "B";
    }else if (mark >= 49 && mark <= 59){
        return "C";
    }else if(mark >= 40 && mark <= 49){
        return "D";
    }else if (mark < 40){
        return "E";
    }
}
if (isNaN(marks) || marks < 0 || marks > 100){
    console.log("invalid input. Marks should be between 0 and 100.");
}else {
    let grade = getGrade(marks);
    console.log("Grade: " + grade);

}