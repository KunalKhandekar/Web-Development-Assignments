const students = [
    {
        name: "Mithun",
        marks: 95
    },
    {
        name: "Prabir",
        marks: 75
    },
    {
        name: "Alka",
        marks: 92
    },
    {
        name: "Shivam",
        marks: 70
    },
    {
        name: "Farman",
        marks: 99
    }
];

function filterStundentsByMarks(student) {
    let name;
    let mark;

    for (i = 0; i < students.length; i ++) {
        if (students[i].name.toLowerCase() == student.toLowerCase()) {
            name = students[i].name;
            mark = students[i].marks;
        }};

    if (name) {
        if (mark > 90) {
                console.log(`Congratulations, ${name}! You have cleared exam.`);
            } else {
                console.log('Sorry! You have not cleared exam.')
            };
    } else {
        console.log('Invalid User.')
    };
};

filterStundentsByMarks("Mithun");
// OUTPUT: Congratulations Mithun! You have cleared the exam.

filterStundentsByMarks("Prabir");
// OUTPUT: Sorry ! You have not cleared the exam.

filterStundentsByMarks("Mithun S");
// OUTPUT: Invalid User !!!