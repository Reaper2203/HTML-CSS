// window = interface used to talk to the web browser
//          the DOM is a property of the window

//console.dir(window);
console.log(window.innerWidth); //outerWidth
console.log(window.innerHeight);

console.log(window.scrollX); //it measures how long you scrolled
console.log(window.scrollY);

console.log(window.location.href);
//window.location.href = "https://www.youtube.com"; //redirecting to another location
console.log(window.location.hostname);
console.log(window.location.pathname); //like index.html

const myButton = document.querySelector("#myBtn");

//myButton.addEventListener("click", () => window.open("https://www.youtube.com"));
//myButton.addEventListener("click", () => window.close()); //closes the current window
myButton.addEventListener("click", () => window.print());   //printing the page

//pop ups
window.alert("hello");
window.confirm("Press OK to continue");
let age = window.prompt("Enter your age");
if(age < 18){
    window.alert("You must be 18+ to visit this site");
    window.close();
}