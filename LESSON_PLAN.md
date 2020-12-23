# Lesson Plan - Closures

## Overview

In this lesson, we will expand on our understanding of scope with the discussion of closures as a programming tool to solve unusual problems.

## Assumptions

This lesson assumes the students have a strong understanding of defining and using functions, as well as a cursory knowledge of lexical scope.

By this point, students should be able to:

- Write JavaScript in an HTML page using the `<script>` tag
- Use Chrome DevTools to view the output of the HTML page
- Write and use functions
- Wite and use object literals
- Understand that variables created in higher scope are available in lower scopes
- Understand that variables created inside of functions are not accessible outside of them
- Manipulate HTML elements with the DOM

## Objectives

- Complete activities 1-7 in the activities folder

- For each student activity, (3, 5, and 7) refer the student to the README in the unsolved folder for directions to complete that activity.

## Instructor Notes

Today's class is focused on demonstrating closures. Reassure students that closures can be confusing at first and that it may take them some time to fully wrap their heads around the concept.

Feel free to approach this lesson as a gentle exploration into the wild side of programming. If time allows, take the opportunity to explore edge-cases, and answer students' what-ifs.

## Learning Objectives

- To understand the closure shared-scope paradigm

- Implement closures to re-use code

- Use JS methods with "private" state

- Demonstrate the use of closures to make a function modular

---

## Class Instruction

### 1. Instructor Do: Closure Intro (5-10 min)

- Open the file `01-intro.html` in the `01-intro` folder, and ask the students to compare and contrast the two code blocks, then open the browser and show them the output.

- While the first block is cleaner, the second block uses closures and allows us to do some interesting things because it returns a function of its own.

- The goal is to pique the students' interest; sometimes we have to write more code to write less.

### 2. Instructor Do: Closer look at Closures (10 min)

- In the `02-easy-closures` folder, open the file `02-easy-closures.html` in VSCode. Demonstrate to students how our closure approach can be implemented to re-use the last names for the "family" we're creating.

- This is helpful if we want to initialize some functionality in one place, but maybe execute the rest of the logic later. In this case, we can set up a family unit with the last name and then get around to adding members later.

- If there's time, it may be helpful to demonstrate how you would write this without the closure, highlighting how often we need to pass in the same strings which may be prone to misspellings, even though this is a pretty contrived example.

### 3. Students Do: Closures and Cats (15 min)

- Proceed with the first activity, have students open `03-cats-and-closure/unsolved/03-cats-and-closure.html` and ask students to fill in the inner function that creates an object with a property defined from the outer function.

- This should be similar to the previous example, except instead of returning just a string we're returning an object.

### 4. Instructor Do: Review Closures and Cats (5 min)

- Demonstrate the solved solution from `03-cats-and-closure-solved.html` in the `solved` folder. Again, this should have a similar signature to the `02` activity.

- Summarize this activity by pointing out that the last two activities are simply functions returning functions.

**Note**: While it's tempting to call closures function factories or generators, we don't want to sully the student's GoogleFu and have them type in JS Generators or factories when trying to use closures since those concepts open up a whole can of worms. For this reason, the lesson avoids using the terms consistently.

Focus on the concept of shared scope.

### 5. Instructor Do: "Private" Variables (15 min)

- Open the file `04-private-variables/04-private-variables.html` in VSCode and walk through the closure function with the class.

- Attempt to generate discussion on what the console would show in the example where we try to access variables in the outer function vs the inner functions.

- This should tie back to the discussion of lexical scope and not being able to access variables outside their functions.

- If any students have had any exposure to OOP or objects in other languages, they might recognize this as a parallel to private variables, but we should avoid a discussion about OOP and classes as this won't be very helpful for beginners and we want to stay on the topic at hand.

**Important**: Over-emphasize that when we say "private variables" in the realm of closures, we **DO NOT MEAN SECURE**.
Students should never put sensitive information in code that will be used in the browser.

- If you have time remaining you can demonstrate that these variables aren't private (and that we're using closures) by calling `console.log(mySecrets)` in the DevTools console and inspecting the `tellMeYourSecrets` method as shown here:

![images/not-so-private-console-dir.png](images/not-so-private-console-dir.png)

### 6. Student Do: Private Treasure (20 min)

- Direct the students to `05-private-treasure/unsolved/05-private-treasure.html` and ask the students to create a closure function using private variables.

- This is going to challenge some students as it surreptitiously requires Object Oriented Programming skills they may not have learned yet, so be sure to check in with students periodically to drop hints or you can partially code-behind them if they get stuck.

### 7. Instructor Do: Private Variables Review (10 min)

- Open the solved solution from `05-private-treasure-solved.html` in the `solved` folder and demonstrate how we can use closure functions to build these "what-we-will-eventually-call-object-oriented-programming" objects.

- The key takeaway should be that you can enforce controlled get/set patterns by abstracting away from the variables themselves.

### 8. Instructor Do: Semi-Practical Example (15 min)

- Now we'll get into some more practical examples of closure convenience working with actual HTML elements

- Underline to the students that closures aren't the solution to every problem. Some developers strongly recommend against them unless necessary, but they're a good tool to have for certain situations, and they're great interview questions.

- This functionality could likely be achieved more easily with a different solution, but being familiar with closures gives us more flexibility when trying to solve the problem.

- Open `06-callbacks-with-closure.html` in the browser and demonstrate how we can click the bordered buttons and update the root element, then inspect the `<script>` to show how we use a closure to mass-produce event handlers for a given affected element.

- We can then apply the **same** functionality if we wanted to change the border of ANY element using the same method, so here's some code to do this to the whole `document.body`.

```javascript
var borderizeWindow = makeBorderizer(document.body);

document.getElementById("btn-1").onclick = borderizeWindow;
document.getElementById("btn-2").onclick = borderizeWindow;
document.getElementById("btn-3").onclick = borderizeWindow;
document.getElementById("btn-4").onclick = borderizeWindow;
```

- Note that unlike `addEventListenter`, setting the click event with `.onclick` will OVERWRITE the click handler for the buttons, but don't let students fixate on this minor difference since this isn't a review of DOM API.

### 9. Student Do: DOM Discovery (10 min)

- Direct the students to open `07-dom-discovery/unsolved/07-dom-discovery.html` in the browser and ask the students to implement a closure function that outputs information about a hovered element into another element.

- Ensure that the students are only looking at the `README.md` and modifying the `js/discovery.js`. There's a lot in this activity and we don't want them to get lost in all the directories. The browser's dev tools should be open the whole time as well.

- This is either going to be a challenge or very simple. Encourage the students to refer to previous activities, and look things up early and often when they don't know. There's a lot to dig through in event objects!

### 10. Instructor Do: DOM Discovery Review (15 min)

- Open the solved solution from `js/discover.js` in the `solved` folder and walk through the few lines it should take to accomplish this seemingly harrowing task.

- With the given target output, we create a function that takes this `outputBox` as a parameter and returns a ready-made event handler.

- They may struggle with how to attach an event handler to the whole page, but we can remind them of a similar example in activity `06-callbacks-with-closure`, where we optionally attached an event listener to the body tag.

- The value proposition of using closures here is that this JS file could be made into a module and another developer could add this feature to their code by just plug in a different target and using the generated event handler.

## Conclusion

- By the end of this lesson, students should have familiarity in recognizing a function with closure, and a general understanding of the "signature" involved with a closure function.

- It's okay if students can't precisely pin down WHEN they might need to use closures; it's more important that they can identify them when they come up, and know how to implement them when they do need one.

- Encourage students to spend some time brainstorming problems that might be solved with closures, or even how to avoid them in these activities. Exposure and practice are key so the more they use them, the better they'll understand this hairy concept.

## Additional Resources for Closures

- [MDN Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [W3Schools Closures](https://www.w3schools.com/js/js_function_closures.asp)
