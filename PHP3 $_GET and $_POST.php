<?php
    /*$_GET, $_POST = special variables used to collect data from an HTML form
                    data is sent to the file in the action attribute of <form>
                    <form action="some_file.php" method="get">
    */

    /* 
    $_GET = Data is appended to the url
            NOT SECURE
            char limit
            Bookmark is possible w/ values
            GET requests can be cached
            Better for a search page */

    /*
    $_POST = Data is packaged inside the body of the HTTP request
            MORE SECURE
            No data limit
            Cannot bookmark
            GET requests are not cached
            Better for submitting credentials  */     
?>
<!DOCTYPE html>
<html>
    <head>
        <title>HTML + PHP</title>
    </head>
    <body>
        <form action="" method="get">
            <label>First name: </label>
            <input type="text" name="fname"><br><br>
            <label>Surname: </label>
            <input type="text" name="sname"><br><br>
            <label>Middle name: </label>
            <input type="text" name="mname"><br><br>
            
            <input type="submit" value="submit"><br><br>
        </form>
        

    </body>
</html>
<?php
    $fname = $_GET["fname"]; //puting inside a variable
    $sname = $_GET["sname"];
    $mname = $_GET["mname"];
    echo"Your name is" . "<br>"; //another line break
    echo "{$sname},{$fname} {$mname}";
?>