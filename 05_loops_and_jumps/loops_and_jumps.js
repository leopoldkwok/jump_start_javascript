A loop statement is used when we want to repeat some programming statements until a specified condition is reached. A typical example would be to iterate through a list and perform an oper- ation on each member of the list. A jump statement allows code to exit loops. One example is to loop through our to-do list and then break out of the loop upon reaching the first incomplete item.

Loops are generally associated with a particular style of programming known as imperative programming. Here, the programmer specifies step by step how a program should achieve a particular task. An alternative approach is functional programming, which states what the program should be doing without exactly specifying how the program should do it. JavaScript supports multiple paradigms including imperative and functional styles. 

Functional programming can provide more elegant solutions to certain types of problems, and it can make your code base smaller, more understandable, and easier to maintain.

The while loop takes the following form:

while (condition) {
  statement
}

The condition can be any expression that evaluates to true or false. The statement consists of the code that is executed while the condition evaluates to true. Recall that in JavaScript, any value can be converted to a Boolean. 

The while loop can be illustrated with this simple example:

var tasksToDo = 3;

while(tasksToDo > 0) {
	console.log('There are ' + tasksToDo + ' tasks to do');
	tasksToDo--
}

This prints the following to the console:

There are 3 tasks to do
There are 2 tasks to do
There are 1 tasks to do

When using a while loop, it’s important to make sure that the condition eventually evaluates to false. During each iteration of the loop, some variable should be changing that will eventually lead to the condition being false, thereby terminating the loop. Otherwise, your program becomes stuck in the dreaded infinite loop.

Otherwise, your program becomes stuck in the dreaded infinite loop. For an example of a subtle bug that leads to an infinite loop, consider this:

function getNext(num) {
  return num++;
}
var i=0;
while (i < 3) {
  i = getNext(i);
}

At first it may be hard to even spot the bug. Note that num++ will return the value of num, and then increment the value. Therefore, in the while loop, the value of i will always be zero! Whenever you are writing a while loop, always double-check that the loop will gracefully exit. With patience and practice this will soon become second nature.








