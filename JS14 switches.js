//switch = statement that examines a value
//          for a match against many case clauses.
//          more effecient than many "else if" statements

let grade = " ";

switch(grade){
    case "A":
        console.log("Excellent!");
        break;
    case "B":
        console.log("Good!");
        break;
    case "C":
        console.log("Needs improvement");
        break;
    case "D":
        console.log("You passed... barely");
        break;
    case "F":
        console.log("Failed miserably");
        break;
    default:
        console.log("Invalid Grade")

}

//----OR----

let grade2 = 90;
switch (true) {
    case grade2 >= 95 && grade2 <=100 :
        console.log("Perfect!");
        break;
    case grade2 >= 85 && grade2 < 95 :
        console.log("Great job!");
        break;
    case grade2 >= 75 && grade2 < 85 :
        console.log("nicely done.");
        break;
    case grade2 < 75 :
        console.log("Try again next time.")
        break;
    default:
        console.log("Invalid grade")
};

