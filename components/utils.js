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
  
  // Set the timezone to Central Time (CT)
  const options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
    timeZone: 'America/Chicago' // Central Timezone
  };

  const formattedDateTime = new Intl.DateTimeFormat('en-US', options).format(date);

  return formattedDateTime.replace(',', ' at');
}


// utils.js

export function generateApprovalCode() {
    // Generate a random 5-digit number
    const randomNumber = generateANumber(5).toString();
  
    // Generate a random uppercase letter
    const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  
    // Combine the number and letter
    return randomNumber + randomLetter;
  }
  