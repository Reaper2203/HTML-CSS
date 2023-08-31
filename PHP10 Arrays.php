<?php
    //array = variable which can hold more than one value at a time

    $foods = array("apple","orange","banana","coconut");

    echo $foods[0]. "<br>"; //starts always with 0

    foreach($foods as $sdoof){ //foreach loop, displays all elements in an array
        echo $sdoof."<br>";
    }

    $foods[0] = "pineapple"; //change element in an array

    array_push($foods, "melon"); //adding another element in the end of array

    array_pop($foods); //removes the last element

    array_shift($foods); //removes first element

    $foods = array_reverse($foods); //reversing arrays

    echo count($foods); //current number of elements
?>