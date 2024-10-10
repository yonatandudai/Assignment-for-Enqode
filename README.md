# Assignment-for-Enqode
This is a technical  assignment for a Full Stack Developer position.
  
**Assignment parts:**  

**Part 1: JavaScript-**  
**Question:** What will the following JavaScript code output to the console?

    const array = [12, 10, 22, 5, 25];
    for(var i = 0; i < array.length; i++){
        setTimeout(function(){
        console.log("The element in position " + i + " is: " + array[i]);
        }, 5000);
    }

**Answer:** The code snippet provided will result in the same message being logged for each iteration of the loop: 

    The element in position 5 is: undefined

And that's because the behavior of **var** in JavaScript and the delayed execution of setTimeout.  
Since **var** has a function scope, and not a block scope like **let**, by the time setTimeout executes, the variable **i** will equal array.length, and therefore **array[i]** is undefined, because it's out of range.
