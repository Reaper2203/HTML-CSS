<?php
//PMA = phpmyadmin
/*first create a table 
A_I = auto increment
*/

include("PHP23 database.php");
//mysqli_close($conn);  // close connection to the server
    $sql = "INSERT INTO users(user, password)
            VALUES('Spongebob', 'pineapple1')";     //sql query //$sql is just a variable name

    mysqli_query($conn, $sql); //submit the query
    //run the php file ain browser and check the phpmyadmin

    $username = "Sandy";
    $password = "Squirrel";
    $hash = password_hash($password, PASSWORD_DEFAULT);

    $sql1 = "INSERT INTO users(user, password)
             VALUES( '$username' , '$hash')";   //use single quotes around variables in sql statement

try{
    mysqli_query($conn, $sql1);
    echo "User Registered";
}
catch(mysqli_sql_exception){
    echo "Not Registered";
}
?>