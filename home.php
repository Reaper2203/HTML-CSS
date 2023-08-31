<?php
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
    This is a home page
    <a href="PHP20 session.php">This is for login page</a>
</body>
</html>
<?php
    echo $_SESSION["username"] . "<br";
    echo $_SESSION["password"] . "<br";
?>