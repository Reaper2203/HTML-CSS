// async = makes a function return a Promise

async function loadFile(){

    let fileLoaded = false;
    if(fileLoaded){
        return "File Loaded";
    }
    else{
        throw "file NOT loaded";
    }
}

loadFile().then(value => console.log(value))    //then and catch method, inplace of adding these method after a promise object 
          .catch(error => console.log(error));  //we would invoke a function, and a promise would be returned