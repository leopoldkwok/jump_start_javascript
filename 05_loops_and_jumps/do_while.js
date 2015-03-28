The do ... while loop is a variation of the while loop that takes the following
form:
The main difference between the two is that execution is guaranteed at least once with the do ... while loop. The following example illustrates this:
do {
  statement
} while(expression);


do {
  console.log('This will print at least once');
}
while (false);

We use while (false) to emphasize that the while check terminates the loop. Nonetheless, 
there will still be a single print to the console. With a slight modifica- tion, our while example 
can be rewritten as its do ... while equivalent:

var tasksToDo = 3;

do {
	console.log('There are ' + tasksToDo + ' tasks to do');
	tasksToDo--;
}
while (tasksToDo > 0);

This code will result in exactly the same console output. For many problems, it is possible to use 
either a while or a do ... while, so the question becomes which one to choose. 
We would recommend while as the default choice, only using do ... while on those occasions when 
a statement has to be executed at least once.







