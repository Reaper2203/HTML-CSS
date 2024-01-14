const myBtn = document.getElementById("myBtn");
const myAnimation = document.getElementById("myDiv");

myBtn.addEventListener("click", begin);

function begin(){
    let timerId = null;
    let x = 0;
    let y = 0;
    let degrees = 0;
    let scaleX = 1; //1 is 100%
    let scaleY = 1;

    timerId = setInterval(frame, 5);

    function frame(){
        if(x >= 200 || y >= 200){
            clearInterval(timerId);
        }
        else{
            degrees+=5;
            x+=1;
            y+=1;
            scaleX -=0.01;
            scaleY -=0.01;
            myAnimation.style.left = x + "px";
            myAnimation.style.top = y + "px";
            myAnimation.style.transform = "rotateZ("+degrees+"deg)";
            //myAnimation.style.transform = "scale("+scaleX+","+scaleY+")";
        }
    }
}