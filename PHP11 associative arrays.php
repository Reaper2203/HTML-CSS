<?php
    //associative array = An array made of key=>value pairs

    $capitals = array("USA"=>"washington D.C.",
                        "Japan"=>"Tokyo",
                        "South Korea"=>"Seoul",
                        "India"=>"New Delhi");
    $capitals["USA"] = "Las Vegas"; //updating the array
    $capitals["China"] = "Beijing";
    array_pop($capitals); //remove the last element
    array_shift($capitals); //removes the first element
    $keys = array_keys($capitals); //display all the keys ex. USA,Japan,India
    $values = array_values($capitals); //display all the values ex. tokyo,seoul,new delhi
    $capitals = array_flip($capitals); //flipping the keys and values
    $capitals = array_reverse($capitals); //reverse the keyvalue pairs

    echo count($capitals); //counting all the key value pairs

    foreach($capitals as $key => $value){
        echo"{$key} = {$value} <br>";

        $capital = $capitals[$_POST["country"]]; //getting the value or the capital as in the example array above
        echo $capital;
    }
?>