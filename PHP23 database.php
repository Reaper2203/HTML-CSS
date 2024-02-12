<?php
$db_server = "localhost";
$db_user = "root";
$db_pass = ""; // Change this to your actual password if one is set
$db_name = "firstdb";
$conn = null; // Initialize the connection variable

try {
    // Attempt to establish a connection to the database on port 3307
    $conn = mysqli_connect($db_server, $db_user, $db_pass, $db_name, 3307);

    // Check if the connection was successful
    if ($conn) {
        echo 'Connected to the database!';
    } else {
        echo 'Not connected';
    }
} catch (mysqli_sql_exception $e) {
    // Handle any exceptions that occur during the connection attempt
    echo 'Connection failed: ' . $e->getMessage();
}
?>
