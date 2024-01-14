let element = document.body;            //parent: body
let child = element.firstElementChild;  //child: fruits, vegetables, desserts
child.style.backgroundColor = "lightgreen";

let parent = element.parentElement; //parent is the body
parent.style.backgroundColor = "skyblue";

let element1 = document.querySelector("#vegetables");// parent: vegetables
let child1 = element1.lastElementChild;             // child: carrots, potatoes, onions
child1.style.color = "blue";

//previous sibling
//vegetables
//next sibling

let sibling = element1.nextElementSibling;
sibling.style.fontStyle = "italic";  //parent: body //child: fruits, vegetables, desserts
//the next sibling of vegetable = desserts

let sibling1 = element1.previousElementSibling;
sibling1.style.marginLeft = "40px"; //child: fruits

let element2 = document.querySelector("#dessert");  //parent: dessert
let child2 = element2.children[1];                  //child: ice cream, cake, pie
child2.style.color = "gold";

let children = Array.from(element2.children);
children.forEach(childs => childs.style.backgroundColor = "violet");

// .firstElementChild
// .lastElementChild
// .parentElement
// .nextElementSibling
// .children[]
// Array.from.(.children)

/*parent and child can change depending on the selected part of the program
so it's always good to use querySelector or getElementsByClassName etc.
the siblings are the connection between the children/ child. //kapatid */