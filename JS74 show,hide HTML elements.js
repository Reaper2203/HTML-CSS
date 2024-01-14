const myBtn = document.querySelector("#myBtn");
const myImg = document.querySelector("#myimg");

myBtn.addEventListener("click", () => {
    if(myImg.style.display == "none"){
        myImg.style.display = "block";
    }
    else{
        myImg.style.display = "none";
    }
});
//you can also use visibility: hidden; & visibility: visible;
//it use used for reservation of space 
//so that them elements below that image will not move