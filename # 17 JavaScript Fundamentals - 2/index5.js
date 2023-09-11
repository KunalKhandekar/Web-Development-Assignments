const guests = ["Anurag", "Mithun", "Alka", "Prabir", "Shivam", "Farman"];

function returnString(guests) {
    let string = '';
    for (i = 0; i < guests.length; i++) {
        if (i+1 == guests.length) {
            string += guests[i];
        } else {
            string += `${guests[i]}, `;
        };
    };
    console.log(string);
}

returnString(guests);