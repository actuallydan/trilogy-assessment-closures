# Lesson Plan - Closures

## Overview

In this class, we will expand on our understanding of scope in the discussion of closures as a solution to some problems in programming, how to create them, and when should they be used or avoided.

## Assumptions

This lesson assumes the students have a strong understanding of defining and using their own functions, as well as a cursory knowledge of lexical scope.

By this point, students should be able to:

- Write JavaScript code in an HTML page using the `<script>` tag
- Use Chrome DevTools to view the output of the HTML page
- Define and use their own functions
- Define and user their own object literals
- Understand that variables created in higher scope are available in lower scopes
- Understand that variables created inside of functions are not accessible outside of them

`Summary: Complete activities 1-6 in activities folder`

## Instructor Notes

Today's class is focused on demonstrating closures. Reassure students that closures can be confusing at first, and that it may take them some time to fully wrap their heads around the concept.

Feel free to approach this lesson as a gentle exploration into the wild side of programming. Feel free to take additional time to explore edge-cases, and answer students' what-ifs.

## Learning Objectives

- To understand the problem that closures solve

- Implement closures to follow DRY principles

---

## Class Instruction

### 1. Instructor Do: (5-10 min)

- Open the file `01-intro.html` and ask the students to compare and contrast the two code blocks, then open the browser and show them the output.

- While the first block is cleaner, the secnd block uses closures and allows us to do some interesting things because it returns a function of it's own

### 2. Instructor Do: Captain Planet Game (10 min)

- Open the file `02-easy-closures.html` in the browser. Demonstrate to students how our closure approach can be implemented to re-use the last names for the "family" we're creating.

- If there's time it may be helpful to demonstrate how you would write out this code without the closure, highlighting how often we need to pass in the same strings.

### 3. Students Do: Closures and Cats (15 min)

- Proceed with the first activity, `03-cats-and-closure.html` in the `unsolved` folder in which you ask students to fill in the inner function that creates an object with a property defined from the outer function.

------------ NOT DONE YET -----------

### 4. Instructor Do: Review Pseudocode (5 min)

- Allow students to share their pseudocode breakdowns.

- Then show your own pseudocode outline (shown on slide).

### 5. Students Do: Create a Superpower Captain Planet (20 min)

- Slack out the code for the game.

- Then task students with dissecting it, and adding additional code to create a new power for Captain Planet. At base, this requires them to create a new button, create a new on-click event, and then create code that changes the CSS for Captain Planet in response to button clicks.

- **Folder:**

  - `10-CaptainPlanetGame` in `10-CaptainPlanetGame/Unsolved`

- **Instructions:**

  - Look at the jQuery API Docs [(https://api.jquery.com/)](https://api.jquery.com/) and add a button of your own that gives Captain Planet a new power.

  - Examples:

    - Click to… Stretch Captain Planet!
    - Click to… Trigger a maniacal laugh!
    - Click to… Create clones of Captain Planet!
    - Click to… Create fire or water (hint: images)!

  - Slack out a screenshot of the working example.

- **Instructor:**
  - Feel free to give students additional time here if necessary. Make sure the majority of your students have at least a basic example that works.

### 6. Instructor Do: Review Captain Planet (5 min)

- Have a student with a working solution share their code with you. Then ask them to present at the front of class.

- If no one one has a working example, quickly create code of your own that "stretches" Captain Planet. You can use the version found in `Solved->captain-planet-game.html` as an example.

### 7. Instructor Do: jQuery Recap (10 min)

- Next, spend a few moments going through the jQuery recap slides. The most important thing to explain in discussing these slides is the fact that jQuery is "capturing" HTML elements using the `$()`, and that we are then applying various methods to that element (or a different one in response).

- Finally, point out that students shouldn't be expecting to memorize all of the jQuery library. Point out that coding is all about understanding a general concept, and then "looking up" the exact code when needed.

- Field any questions that remain before proceeding to the next activity.

### 8. Students Do: Fridge Game (35 min)

- Open the solution file `11-FridgeGame` in `11-FridgeGame/Solved`, and show students how the application works. In short, the application allows users to click on letters from a menu and have those letters appear on the fridge.

- Then, slack out the below folder and instructions.

- **Folder:**

  - `Unsolved` in `11-FridgeGame/Unsolved`

- **Instructions:**

  - Working in groups of 3, complete the code for the fridge activity such that:

    1. JavaScript dynamically generates buttons for each of the letters on the screen.

    2. Clicking any of the buttons leads the SAME letter to be displayed on the screen.

    3. Hitting the clear button erases all of the letters from the fridge.

  - Note: This is a challenging exercise. You may want one person to type, while the other two watch over to catch bugs and/or research necessary snippets.

---

### 9. Break (15 min)

---

### 10. Instructor Do: Review Fridge Game (10 min)

- Spend the time necessary to ensure that the majority of students have a conceptual understanding of how the Fridge Game's code works. In explaining the solution, point out the following:

  - The creation of an array that holds all of the letters;

  - The for loop used to take letters from the array, associate each with a data-attribute and text, and then append them onto the page. Students will be confused about the concepts of `.addClass`, `.attr`, and `.text`. Spend the time necessary to explain each.

    ![image-2](Images/2-fridge-1.png)

  - The on-click event needed to capture button clicks. Be sure to point out how we use the data-attribute (via the `.attr` method) to know which letter was clicked. This is a **KEY POINT**.

    ![image-3](Images/2-fridge-2.png)

- Slack out the solution and the [video review](https://www.youtube.com/watch?v=gC529k3KzmE) for the activity.

### 11. Instructor Do: Crystal Example (10 min)

- Next, open the files found in the folder `12-CrystalExample`.

- Open them one by one in your IDE as well as in the browser and explain each change in the code.

### 12. Instructor Do: Intro Lexical Scope (10 min)

- Proceed to the Lexical Scope slides. Warn students that this section is pretty heavy on theory.

- Proceed with basic definitions of scope, using analogies to boxes or other simple concepts when possible. Mention the concept of nested functions -- before moving to the first code dissection. (Students will be dissecting the code example shown in the slides).

### 13. Students Do: Lexical Scope 1 (10 min)

- File(s): `13-ScopeOne/Unsolved/index.html`

- Instructions

  - Open `Unsolved/index.html` in a browser and then open the console.

  - With your neighbor, compare the results in the console to the JavaScript in `index.html` and answer the questions in the comments.

  - **HINT**: Read the [MDN docs on closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

### 14. Instructor Do: Review Lexical Scope 1 (5 min)

- Open `13-ScopeOne/Unsolved/index.html` and ask students to answer the questions posed in the comments. The key concept to address is _closures_. Explain the following points:

  - When the return value of `outside()` is assigned to `insideOut`, a closure is created.

  - A closure is an object that contains both a returned function and the environment in which that function was created.

  - The environment consists of any local variables that were available to that function when and where it was declared.

  - When we call `insideOut()`, it returns the values stored in `x` and `y` even though those were declared outside `inside()`.

- If students have further questions, refer them to the [MDN docs on closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures).

### 15. Students Do: Lexical Scope 2 (10 min)

- Proceed with the next activity.

- **File:**

  - `lexical-scope-2-unsolved.html` in `14-ScopeTwo`

- **Instructions:**

- Take a few moments to dissect the code just sent to you.

- Try to predict what will be printed in each of the examples.

- Be prepared to share!

- Note: Pay attention to the unusual use of the keyword: ‘this”

### 16. Instructor Do: Review Lexical Scope 2 (5 min)

- Proceed with the review. This example may have been more challenging to students, as we introduced the concept of `this` without explanation.

- The key takeaway here is that using the keyword `this` will only print content related to the object directly above it, **not** from the grandparent.

  ![image-5](Images/3-scope-2.png)

### 17. Students Do: Lexical Scope 3 (5 min)

- Proceed with the next activity.

- **Files:**

  - `lexical-scope-3-unsolved.html` in `15-ScopeThree/Unsolved`

- **Instructions:**

- Take a few moments to dissect the code just sent to you.

- Try to predict what will be printed in each of the examples.

- Be prepared to share!

- Note: Pay attention to the unusual use of the keyword: ‘this”

### 18. Instructor Do: Review Lexical Scope 3 (5 min)

- Try to have students explain the solutions to the last activity back to you.

- If no student can, try to explain it yourself using the solution provided. It's okay if you stumble as you explain -- that shows students that this stuff isn't obvious, and that you can be a great developer, even if these nested functions confuse you.

- Remind students that these are not easy activities. The key is simply for them to become familiar with the fact that JavaScript's handling of parent and nested functions isn't always intuitive, and that errors can arise if you aren't careful.

- Make sure they realize that studying these examples **is not** overly necessary.

### 19. Everyone Do: Brain Teaser (20 min)

- If you have additional time available in class, proceed with this activity [16-ColorCorrector](../../../../01-Class-Content/05-Third-Party-APIs/01-Activities/16-ColorCorrector).

- It's challenging, and will likely take over 40 minutes to complete. It is not necessary that students finish it. At best, they may be able to get _started_ in class, but will likely need to spend additional time at home if they are interested in completing it.

- Play it by ear if you'd like to walk through the solution.

### Lesson Plan Feedback

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this anonymous survey.

[Class Survey](https://forms.gle/nYLbt6NZUNJMJ1h38)
