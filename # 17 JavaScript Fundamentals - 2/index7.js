function generateOtp() {
    return Math.floor(Math.random() * 9000) + 1000;
}

console.log("Here is your Otp:", generateOtp())

// OUTPUT: Here is your Otp: 8714