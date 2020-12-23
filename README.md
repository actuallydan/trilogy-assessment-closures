# Trilogy Assessment Lesson on Closures

This is my Technical Assessment for a lesson on Closures in JavaScript.

This README outlines my methodology, a run-down of what I've included and why, as well as what I didn't. As a forward, I severely enjoyed this exercise. Hopefully, my attempt to solo a lesson on an obscure topic (however amateur it may be) holds some value.

The actual lesson plan is in the `LESSON_PLAN.md`, and it's associated content is in the `activities` folder.

## Methodology

As a current and former teaching assistant, as well as a self-taught programmer, what I see most in feedback from students are comments like "I don't know where to start" or "how does this fit with what we're doing".

From this, the two biggest concerns to accommodate are clarity in direction, and not introducing unrelated concepts, functions, or syntax.

In trying to be as clear in directions, I want to give the student plenty of examples to work from that are close enough to refer to when needed, but not close enough that they can copy-paste the old solution. So when they're going through the README for the activity they start to see a pattern in terminology that maps to a pattern of code signature. For example, using and re-using the "inner function" "outer function" idea should help connect the understanding between activities, and it helps them recognize essential elements when it's time to code it themselves. Also, in the "code your solution here" I don't recall if I've seen any empty code blocks that mirror as closely the READMEs they refer to. Ideally, the "insert logic here" comments should save the student from having to flip back to the README as often, and instead let them focus on what they've done so far and the empty code in front of them.

I also don't think, especially when students are very new to programming, that it's helpful to drop them in with nothing and start from scratch. While they should have that ability after a point, for rapid learning's sake they have to spend too much time re-loading their brain with old information and by the time they get to the crux of the activity they may have already overwritten the short-term knowledge of how to approach the problem. In this effort, I wanted to make all the activities have some partial completion, even if only one line like the last activity, so they have at least a "True North" to go from.

---

My biggest pet peeve in the lesson plans I've seen is when the activities sporadically use different syntax or function without introducing it, or one that's unrelated to the day's lesson. One heinous example (in my opinion; I don't think the students cared nearly as much) is in early lessons when an exercise will drop a `let` or `const` and not address why we've suddenly forsaken `var`. I love modern JS and I never use `var` in my code, but the third week of class is a bad time to talk about immutability and lexical scope of `let` when they've only just figured out how to write a function (to say nothing of all the ways you can declare a function in JS). So in of all my examples I try to be consistent in using function declarations instead of arrow functions, use `var` because that's what they're taught early on, and trying to avoid object, array, or DOM methods they wouldn't have used or wouldn't reliably be able to pick up quickly. Again, the goal should be to maximize the time they spend with only the new concept in working memory.

An instructor shouldn't have to let the students loose to learn about one topic, and then five minutes later has to reconvene everyone to explain some new concept because it's best practice when they have no reference for it.

## What's Included

The three topics I chose to cover with closures are:

- The makeup of closures and using a shared scope
- The pseudo-OOP approach to using private variables in closures
- How we can use closures to build an actual code feature (however contrived)

In a boot camp environment, the focus is on giving the students tools to learn and experiment on their own as well as ultimately learn to problem solve. I tried to approach the activities from the perspective of "what should they know right now that they can use". In my mind, even if the students never use closures to accomplish the sorts of problems they'd solve in these activities, it should start to get the gears turning about concepts like encapsulation, getters/setters, abstraction, composition...all without having to mention classes or "Object-Oriented Programming" in a language that is sometimes imperative, sometimes functional, and always a bit OOP. In conjunction with what I know they're taught about regarding scope, the lessons I include should provide a thorough understanding of where variables are defined such that any interview problem about scope should be trivialized.

## What I Excluded

When reviewing closures for this assignment, I kept seeing articles and videos repeatedly mention the use of creating closures in loops and using the eponymous setTimeout example. I made a choice early on to omit and outright ignore these sorts of problems from my lesson for one reason: it leads to bad code.

While closures in loops are great for a brain-teaser on code execution, as with a lot of situations involving closures, writing code that includes it is often bad (in my experience). Any\* problem where you have to write a function inside a loop should probably be handled differently or is better exemplified with a different pattern. I don't even want to show students what not to do with closures since even the association is wasting the precious time and mental resources it might take to learn a relatively abstract concept like this.

Especially in a curriculum that prioritizes practical knowledge, spending the time to teach students how to navigate closures in a loop screams "I'll forget about this in a week". I've found that for corner cases like this it's unhelpful to present something like this to a whole class when less than a handful of students may come across it, and they certainly won't retain this one nugget of information. To those that do end up in those scenarios, it's a much more valuable teaching moment to back them out of the corner and explain, briefly how that corner case came up and how they can deal with it. Students learn much better when they've fixed a problem specific to their code and are more likely to remember a mistake they made rather than just trying to blanketly prepare all students for every case.

If you've taken the time to read this, thanks! If you have any questions or comments, feel free to [raise an Issue](https://github.com/actuallydan/trilogy-assessment-closures/issues), or [send me an email](https://github.com/actuallydan)!
