
Now that we have functions and objects figured out, we can start doing some fancy stuff with our task manager 
project. Instead of a simple array of tasks, we can store richer information by using an array of objects. 
We can also write some functions to perform operations for us. Let’s begin by wrapping each task in an object:

var tasks;

tasks = [
	{
		text: "Pay phone bill",
		complete: false,
		priority: 1
	},
	{
		text: "Write best-selling novel",
		complete: false,
		priority: 3
	},
	{
		text:"Walk the dog",
		complete: false,
		priority: 2
	}
	];

Now we have a richer set of data; each task now has a complete flag associated with it, as well as a 
priority. Let’s write a function to add tasks to our array:

var tasks, addTask;

tasks = [];

addTask = function(task) {
	tasks.push({
		text: task,
		complete: false,
		priority: 1
	});
}
}

Now we can call addTask, and pass it some text to store it, with a complete flag set to false in 
our tasks array.