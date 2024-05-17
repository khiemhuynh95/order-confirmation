// utils.js

export function generateOrderNumber() {
    // Generate a random number between 100000 and 999999
    const randomNumber = Math.floor(100000 + Math.random() * 900000);
    // Convert the number to a string
    return randomNumber.toString();
}


// utils.js

export function generateANumber(num) {
    let randomNumber = '';
    for (let i = 0; i < num; i++) {
      randomNumber += Math.floor(Math.random() * 10).toString();
    }
    return randomNumber;
}

export function getCurrentFormattedTime() {
    const date = new Date();
    
    // Format the date and time
    const options = {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
      timeZoneName: 'short'
    };
  
    const formattedDateTime = new Intl.DateTimeFormat('en-US', options).format(date);
  
    return formattedDateTime.replace(',', ' at');
}

// utils.js

export function generateApprovalCode() {
    // Generate a random 5-digit number
    const randomNumber = Math.floor(10000 + Math.random() * 90000).toString();
  
    // Generate a random uppercase letter
    const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  
    // Combine the number and letter
    return randomNumber + randomLetter;
  }
  