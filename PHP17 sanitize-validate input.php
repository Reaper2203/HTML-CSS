<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Sanitize-validate input</title>
    </head>
    <body>
        <form action="PHP17 sanitize-validate input.php" method="post">
            username: <br>
            <input type="text" name="username"><br>
            age: <br>
            <input type="text" name="age"><br>
            email: <br>
            <input type="text" name="email"><br>
            <input type="submit" name="login" value="Login"><br>
        </form>
    </body>
</html>
<?php
    if(isset($_POST["login"])){
        $username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_SPECIAL_CHARS);
                    //filtering username input reading the special characters as text
        $age = filter_input(INPUT_POST, "age", FILTER_SANITIZE_NUMBER_INT);
                    //filtering age input removing non-number characters
        $email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL);
                    //filtering email input reading email accepted characters
        $age = filter_input(INPUT_POST, "age", FILTER_VALIDATE_INT);
                    //check if the age input is valid
        $email = filter_input(INPUT_POST, "email", FILTER_VALIDATE_EMAIL);
                    //check if the email is valid

        if(empty($age)){
            echo "That age is not valid <br>";
        }
        else{
            echo $username . "<br>";
            echo "Age: {$age}<br>";
        }            
        
        echo "Hello {$username} <br>";
        echo "You are {$age} years old <br>";
        echo $email;


    }
?>