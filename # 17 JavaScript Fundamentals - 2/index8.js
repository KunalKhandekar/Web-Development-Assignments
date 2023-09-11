function calculateRemainingDays(eventStartDate) {
    const currentDate = new Date();
    const startDate = new Date(eventStartDate);
    const timeDifference = startDate - currentDate;
    console.log(timeDifference);
    const daysUntilEvent = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysUntilEvent;
};

const eventDate = '2023-08-31';
const daysUntilEvent = calculateRemainingDays(eventDate);

console.log(`There are ${daysUntilEvent} days for the event.`);