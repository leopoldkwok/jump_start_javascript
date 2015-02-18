var d, hours, minutes, time, message;

// Get the current time's hour and minutes components
d = new Date();
hours = d.getHours();
minutes = d.getMinutes();

// Make sure the hour is a double digit string
if (hours < 10) {
	hours = "0" + hours; // converts hours to string
} else {
	hours = hours.toString()
}

// Make sure the minutes are a double digit string
if (minutes < 10) {
	minutes ="0" + minutes; // converts minutes to string
} else {
	minutes = minutes.toString();
}

// concatenate hours an minutes into a quadruple digit number
// representing the time in 24 hour format

time = Number(hours + minutes);

if (time >= 0000 && time < 1200) {
	message = "good morning!";
} else if (time >= 1200 && time < 1700) {
	message = "good afternoon!";
} else if(time >= 1700 && time < 2100) {
	message = "Good evening!";
} else if(time >=2100 && time <=2359) {
	message = "Good night!";
}

alert(message);

In this example, we establish the current time by instantiating a new Date object and reading the hours and minutes values from it. The Date object is set to the date and time at the moment it was instantiated. Now, since we need a four-digit number to represent our time of day, and since hours and minutes can be in the single digits (if it’s two minutes past the hour, the minutes will be 2, not 02), we need to pad the values. We check to see if the values we’re given are less than 10. If so, we pad them with a zero. By doing this, we’re actually accomplishing two tasks at once. By adding a "0" string to our digit rather than a numeric 0 (which would do nothing), we’re triggering type coercion and turning our digit into a string. If, however, our hours or minutes value is in the double-digits, we only convert it to a string by calling the toString method.
www.it-ebooks.info
Once we have both the hours and minutes values, we concatenate them to receive a nice four-digit representation, and then we convert it back to a number from a string. That way, as a number, we can use comparison operators to check the current time against our ranges. Notice how we’ve already used the if...else syntax to prepare our hours and minutes values? We use it again to compare our time value against values we’ve set to determine when morning, afternoon, evening, and night are. When one of the clauses are met (in the case of our example, it's when the 1900 falls between 1700 and 2100), we set the value of message to "Good evening!" and then alert the user