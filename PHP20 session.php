<?php
    
    /* session = SGV used to share information on a user
                to be used across multipe pages.
                A user is assigned a session-id
                ex. login credentials
    */
    session_start();
?> 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    This is a login page
    <a href="home.php">This is for home page</a>
</body>
</html>

<?php
    $_SESSION["username"] = "Renz";
    $_SESSION["password"] = "renz123";
    
?>