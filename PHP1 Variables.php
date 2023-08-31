<?php
    //variable = a reusable container that holds data
    //   string,integer,float boolean

    $name = "Renz"; //to decalre a var. $
    $food = "Adobo";
    $email = "minimorenz@gmail.com";
    echo "{$name}<br>";//<br> is for breakline

    $age = 20; //integer

    $price = 101.01; //float

    $online = true; //boolean

    $total = null;//unnecesary

    echo "Hello {$name}<br>"; //string literal=directly displaying amessage
    echo "I like {$food}<br>";
    echo "My email is {$email}<br>";
    echo "I am {$age} years old<br>";
    echo "The price is \${$price} pesos<br>";
    echo "online status: {$online}<br>";

    $total = $age + $price; //computation

    echo "The total is: {$total}";


?>
