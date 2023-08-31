<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="<?php htmlspecialchars( $_SERVER["PHP_SELF"])?>" method="post"> 
    username:<br>
    <input type="text" name="username">
    <input type="submit">
    </form>
</body>
</html>
<?php
    //htmlspecialchars --filter
    /* $_SERVER = SGB that contains headers, paths, and scipt locations.
                    The entries in this array are created by the web server.
                    Shows nearly everything you need to know about the current web page env.
    */

    /*foreach($_SERVER as $key => $value){  //for checking the whole server
        echo"{$key} = {$value} <br>";
    } */
    
    if($_SERVER["REQUEST_METHOD"] == "POST"){ //checking if they really click submit
        echo"HELLO";
    }
?>