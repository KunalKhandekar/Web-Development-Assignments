// Define an object that represents a student's information including name, age, and grade. Implement a method to update the student's grade.

const student = {
    name : "Minal",
    age : 18,
    grade : "C"
};

function UpdateGrade(NewGrade) {
    student.grade = NewGrade;
};

UpdateGrade("A");
console.log(student)

// OUTPUT: { name: 'Minal', age: 18, grade: 'A' }