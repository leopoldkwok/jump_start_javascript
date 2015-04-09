The for loop is used to run a code block a number of times, and is often referred
to as a counting loop. It takes this general form:

or (initialization; condition; end-expression ) {
  statement
}

for(var i =0; i < 3; i++) {
	console.log(i);
}

The above loop will declare the variable i and assign it the initial value of 0. On each iteration, i will be 
outputted and then incremented by 1. It is important to note that the variable is both declared and initialized. 
It’s syntactically valid to omit the declaration:

for (i = 0; i < 3; i++) {
  console.log(i);
}

However, this will create a global variable, i, which is undesirable. It will potentially clash with other 
variables of the same name, and could lead to memory leaks as well as a host of other disagreeable phenomena. 
If you are creating a new variable at the beginning of your for loop, always remember the var! 
A for loop can also have multiple tests:

for (var i = 0; i < 10 && i % 2 === 0; i+=4) {
  console.log(i);
}

Here we’re testing that i is less than 10 and divisible by 2, which will print:

0
4
8

It’s also possible to have multiple initializations and end expressions:

for (var i = 0, j = 0; i < 3; i++, j+=2) {
  console.log(i, j);
}

Before running the code, try to work out what it will print to the console. 
Did you guess the following correctly?

00 
12 
24

The loop is running two end expressions and so, on each iteration, i is being incre- mented by 1 and j is being 
incremented by 2. Note also that while the end expression is generally used to increment a counter, it can take 
on any number of forms. For example, we could assign i to be a random number using the built in 
Math.random() function:

for (var i = 0; i < 0.9; i = Math.random()) {
  console.log(i);
}

Here the loop will keep on iterating until the random number generator produces a value of 0.9 or greater. 
As you can see, the for loop is a powerful and flexible construct, and is likely to be the one you’ll use the most.








