<?php
    include("PHP23 database.php");

    //$sql = "SELECT * FROM users WHERE user = 'Spongebob'";
    $sql = "SELECT * FROM users";
    $result = mysqli_query($conn, $sql);

    if(mysqli_num_rows($result) > 0){
        while($row = mysqli_fetch_assoc($result)){
        //echo $row["id"] . "<br";
        echo $row["user"] . "<br>";
        echo $row["reg_date"] . "<br>";
    };} //use while to display all users
    else{
        echo "No user found";
    }
?>