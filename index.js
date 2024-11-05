// Async/Await = Async = makes a function return a promise
//                            Await = makes an async function wait for a promise

// Allows you write asynchronous code in a synchronous manner
// Async doesn't have resolve or reject parameters
// Everything after Await is placed in an event queue

async function doChores(){

    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);
    
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
    
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
        
        console.log("You finsihed all the chores!");
    }
    catch(error){
        console.error(error);
    }
}

doChores();

// Code Explanation
// Function Definition:

// doChores is an async function, which allows you to use await within it. The await keyword pauses the function's execution until the promise it’s waiting for is resolved.
// This function is designed to execute three asynchronous functions in sequence: walkDog, cleanKitchen, and takeOutTrash.
// Using await for Each Task:

// Each await pauses doChores until the respective task is complete.
// For example, await walkDog() waits until walkDog is finished before moving on to cleanKitchen, ensuring that tasks are completed in order.
// Error Handling with try/catch:

// The try block wraps the entire sequence of tasks, so if any of the chores fail (e.g., walkDog throws an error), the catch block will handle it.
// This means if an error occurs in any of the chores, the remaining chores won’t execute, and the error message will be logged.
// Completion Message:

// If all tasks complete successfully, "You finished all the chores!" is logged.