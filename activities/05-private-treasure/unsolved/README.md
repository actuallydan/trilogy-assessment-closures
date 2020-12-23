# Closure Activity 5

Imagine you're a pirate on the high seas in search of treasure and you want to use JavaScript to keep track of places you've buried treasure.

Since you want to keep the list secret, you'll want to use closures to prevent a mutinous crew member from getting the list with `console.log()`.

Unlike the previous activity, you must implement the closure function by yourself, but don't worry, you can always refer to previous activities for help!

## Instructions

Open `05-privates-of-the-caribbean.html` in Visual Studio Code and inspect the `<script>`.

1. Create a closure function `createTreasureMap`.

2. Inside this function, create an object called `treasures`. This object should be empty at first.

3. The closure function should also have a variable called `numberOfTreasures` that will serve as a record of how many treasures are in the `treasures` object, it should start as 0.

4. The function should return an object with three methods: `setTreasure`, `getTreasures`, and `countTreasures`.

5. The `setTreasure` function should take two parameters, a `location` and a `hint`. Update the treasures object with the key of `location` and set the value to `hint`. Also, add 1 to the `numberOfTreasures`

e.g.

```javascript
treasures["Cayman Islands"] = "beneath a tiny palm tree";
//        ^ location           ^ hint
```

6. `getTreasures` should return the `treasures` object.

7. `countTreasures` should return the `numberOfTreasures` variable

8. The provided code should be able to use your `createTreasureMap` function and the final output in the browser should be:

```javascript
> { "Coney Island": "Under the pier", "Loch Ness": "On the eastern shore" }
> 2
> true
> true
```

**Bonus**

In the `getTreasures` function, instead of returning the treasures variable, return an array containing only the locations and not the hints. Your output would then be:

```javascript
> ["Coney Island", "Loch Ness"]
> 2
> true
> true
```

**Hint**: Refer to [MDN Object.keys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
