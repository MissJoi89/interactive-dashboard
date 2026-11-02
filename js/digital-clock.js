// Initialize the Interval
// Use the setInterval() method to execute a function (e.g., updateClock)
// every 1000 milliseconds (1 second)
setInterval(updateClock, 1000);

function updateClock() {
    // Retrieve Date and Time tracking objects
    let currentTime = new Date();
    
    // Use the methods getHours(), getMinutes(), and getSeconds() for the time.
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    
    // Use method toLocaleDateString() to get a readable calendar date 
    let dateString = currentTime.toLocaleDateString();

    // AM/PM Session: 
    //  Create a variable called session to track the "session" (AM or PM). 
    // Logic should switch the session to PM if the hours are greater than or equal to 12.
    let session = "AM";
    if (hours >= 12) {
        session = "PM";
    }

    // Convert standard 24-hour timestamp blocks to a 12-hour format index layout
    if (hours === 0) {
        hours = 12;
    } else if (hours > 12) {
        hours = hours - 12;
    }

    // Apply Formatting Logic: 
    // Use an if statement to append a "0" to any value less than 10
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // Assemble the complete display time string
    let timeString = `${hours}:${minutes}:${seconds} ${session}`;

    // Update the DOM:
    // Use innerHTML to write the formatted time string to the "clock-face" element
    // and the date string to the "calendar-date" element.
    document.getElementById("clock-face").innerHTML = timeString;
    document.getElementById("calendar-date").innerHTML = dateString;
}

// Initial direct execution call so the layout displays numbers immediately without a 1-second delay gap
updateClock();