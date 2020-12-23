# Closure Activity 7

In this exercise, we'll use a bootstrap template from [https://github.com/startbootstrap/startbootstrap-freelancer](https://github.com/startbootstrap/startbootstrap-freelancer), and see how we can use closures to create a function that helps us identify the dimensions of any element on the page, just by hovering over them.

Pretend you're building a chrome extension for designers. This extension will display a black box in the corner and will display the width and height of any element on the page when they hover over it.

You chose to build it with closures since you want to demonstrate how clever you are, and you want to make the code reusable for other developers.

While testing it on a friend's portfolio, you've implemented part of it, when suddenly your computer crashes, causing you to lose a lot of work!

When you open up the `07-dom-discovery/unsolved/js/discovery.js` file you see that some of your work is still there.

The element you've created on the page to act as a container for this information already exists, and all the styles are already added, so all you need to do is re-implement the closure function.

## Instructions

Open `07-dom-discovery/unsolved/07-dom-discovery.html` in and take a look around, noting the black box in the top right corner that reads "Hover over something to see some information!". This box is going to be our output target.

Open `07-dom-discovery/unsolved/js/discovery.js` in Visual Studio Code.

Note that the black box element has already been stored in a variable `outputBox`.

1. Create a closure function whose outer function takes in an element we want to dump some information

2. Return a function that takes an event, and modifies the earlier element's text based on the dimensions of the `event.target`. **Hint** You may want to refer to [this resource](https://www.javascripttutorial.net/javascript-dom/javascript-width-height/) for getting the dimensions from an event handler

3. Use our closure function to generate a function that we can use as an event handler

4. Attach the event handler to the window's `mouseover` event.

Check out [the MDN reference for mouseover](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event) if you need help on item 4.
