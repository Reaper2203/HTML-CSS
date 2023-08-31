<!DOCTYPE html>
<html>
    <head>
        <title>Isset & Empty</title>
    </head>
    <body>
        <form action="PHP11 isset & empty.php" method="post">
            <label>Username: </label>
            <input type="text" name="username"><br>
            <label>Password: </label>
            <input type="password" name="password"><br>
            <input type="submit" name="login" value="Log in">
        </form>
    </body>
</html>

<?php
    // isset() = returns TRUE if a variable is declared and not null
    // empty() = returns TRUE if a variable is not decalred, false, null, ""

    if(isset($_POST["login"])){ //returns true if the login button is clicked

        $username = $_POST["username"];
        $password = $_POST["password"];

        if(empty($username or $password)){ //returns true if the username and the password is both empty
            echo"both username and password is empty";
        }
        elseif(empty($password)){ //returns true if only the password is empty
            echo"password is empty";
        }
        elseif(empty($username)){ //returns true if only the username is empty
            echo"username is empty";
        }
        else{
            echo"you have successfully loged in";
        }
    }
?>