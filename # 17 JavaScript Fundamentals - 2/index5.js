const guests = ["Anurag", "Mithun", "Alka", "Prabir", "Shivam", "Farman"];

function returnString(guests) {
    let string = guests.join(', ')
    console.log(string);
}

returnString(guests);

// OUTPUT: Anurag, Mithun, Alka, Prabir, Shivam, Farman