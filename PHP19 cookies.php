<?php
    /* cookie = information about a user stored in a user's web-browser
                targeted advertisements, browsing preferences, and
                other non-sensitive data
    */

    setcookie("fav_food", "Burger", time() + 86400, "/"); //creating a cookie //86400 is 1 day in seconds
    setcookie("fav_drink", "coffee", time() + (86400 * 2), "/"); // 2 days
    setcookie("fav_dessert", "leche flan", time() + (86400 * 3), "/"); //3 days
    /*
    foreach($_COOKIE as $key => $value){
        echo"{$key} = {$value} <br>";
    }
    */

    if(isset($_COOKIE["fav_food"])){
        echo"Want some {$_COOKIE["fav_food"]} ? Order here.!";
    }
    else{
        echo"your favorite food has not been set";
    }
?>