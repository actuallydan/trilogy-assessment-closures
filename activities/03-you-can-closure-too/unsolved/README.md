# Closure Activity 3

## Instructions

- Open `03-you-can-closure-too.html` in Visual Studio Code and inspect the `<script>`

- The provided code partially implements a closure function that lets you create and name pets.

- The outer function should return an inner function

- You must implement the inner function to meet the following criteria:

1. The inner function must return an object literal with the `species` property set to the outer function's `species` parameter

2. The object should also have a `name` property set to the `name` parameter passed in the inner function.

3. Use the closure function to create a `catGenerator` function (refer back to `02-easy-closures.html` on how to use a closure function once it's defined if need be). This should call the outer function and pass `cat` as a parameter.

4. Create as many cats as you'd like and give them a name.

5. Use `console.log` to display them in the browser's DevTools.

**Bonus**

Create other pets of different species using the same approach!
