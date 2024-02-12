<?php
    include("PHP23 database.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="<?php htmlspecialchars($_SERVER["PHP_SELF"]) ?>" method="post"> //without htmlspecialchars it is vulnerable to cross site scripts
        <h2>Welcome to Fakebook</h2>
        username: <br>
        <input type="text" name="username"><br>
        password: <br>
        <input type="password" name="password"><br>
        <input type="submit" name="submit" value="register">
    </form>
</body>
</html>
<?php
    if($_SERVER["REQUEST_METHOD"] == "POST"){

        $username = filter_input(INPUT_POST, 'username', FILTER_SANITIZE_SPECIAL_CHARS);
        $password = filter_input(INPUT_POST, 'password', FILTER_SANITIZE_SPECIAL_CHARS);

        if(empty($username)){
            echo "Please Enter Username";
        }
        elseif(empty($password)){
            echo "Please Enter Password";
        }
        else{
            $hash = password_hash($password, PASSWORD_DEFAULT);

            $sql = "INSERT INTO users (user, password)
            VALUES ('$username','$hash')";

            try{
                mysqli_query($conn, $sql);
                echo "You are now registered";
            }
            catch(mysqli_sql_exception){
                echo "that username is already taken";
            }
        }
    }


    mysqli_close($conn);
?>