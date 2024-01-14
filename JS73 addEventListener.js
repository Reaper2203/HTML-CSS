// .addEventListener (event, function, useCapture)
// You can add many event handlers to one element.
// even the same event that invokes different functions

const innerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");

innerDiv.addEventListener("click", changeBlue);
outerDiv.addEventListener("click", changeBlue); // if true the outer is first

/*function changeRed(){
    innerDiv.style.backgroundColor = "red";
};
function changeGreen(){
    innerDiv.style.backgroundColor = "lightgreen";
};*/

function changeBlue(){ //useCapture
    alert(`You selected ${this.id}`);
    this.style.backgroundColor = "gold";
}
//this helps you to know which handles the event first
//inner - outer