// await = makes an async function wait for a Promise
async function loadFile(){
     let fileLoaded = true;

     if(fileLoaded){
        return "file loaded";
     }
     else{
        throw "file NOT loaded";
     }
}
async function startProcess(){
    let message = await loadFile(); //try and catch for error handling
    console.log(message);
}
startProcess();