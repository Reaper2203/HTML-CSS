<?php
    $username = "Renz Minimo";
    $username1 = array("Renz Russel", "Banico", "Minimo");

    //$username = strtolower($username); //string to lower -- lowercase
    //$username = strtoupper($username); //string to upper -- uppercase
    //$username = trim($username); //remove wide spaces
    //$username = str_pad($username, 20, "-"); //padding string with 20 characters with -
    //$username = str_replace("i", "e", $username); //replacing characters //replacing i with e
    //$username = strrev($username); //string reverse
    //$username = str_shuffle($username); //shuffle
    //$username = strcmp($username, "Renz Minimo"); //string compare //checking strings if equal
    //$username = strlen($username); //string lenght
    //$username = strpos($username, ""); //string position -- finding the position of a character
    //$firstname = substr($username, 0, 5); //substring function -- creating a new string from a portion of a string
    //starting and ending point.. note: starts with 0
    $fullname = explode(" ", $username); //separated by spaces

    $username1 = implode(" ", $username1); //combining sets of strings (array) into a one variable

    //echo $firstname;
    echo $username1 . "<br>";

    foreach($fullname as $name){
        echo $name . "<br>";
    }
?>