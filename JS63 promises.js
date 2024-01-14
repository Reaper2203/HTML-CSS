/* promise = object that encapsulates the result of an asynchronous operation
            let asynchronous methods return values like synchronous methods
            "I promise to return something in the future"*/

/*          the STATE is 'pending' then: 'fulfilled' or 'rejected'
            the RESULT is what can be returned 
            2 parts producing & consuming */

const promise = new Promise((resolve, reject) => {
    let fileLoad = false;

    if(fileLoad){
        resolve("File loaded successfully"); // fulfillment handler //fileloaded = value
    }
    else{
        reject("Error loading file"); // rejection handler
    }
});

promise.then(value => console.log(value)).catch(error => console.log(error));
//if promise resolved perform function/ fulfillment handler
//if promise rejected perform errorHandler, then use catch for handling error

//another example

const wait = time => new Promise(resolve => {
    setTimeout(resolve, time);
});
wait(2000).then(() => console.log("thanks for waiting"));