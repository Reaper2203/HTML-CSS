<!DOCTYPE html>
<html>
    <head>
        <title>Checkboxes</title>
    </head>
    <body>
        <form action="" method="post">
            <input type="checkbox" name="pizza" value="pizza">
            Pizza<br>
            <input type="checkbox" name="hamburger" value="hamburger">
            Hamburger<br>
            <input type="checkbox" name="hotdog" value="hotdog">
            Hotdog<br>
            <input type="checkbox" name="taco" value="taco">
            Taco<br>
            <input type="submit" name="submit">
            <!-- to make the input an array it must be the same name with [].. example foods[]-->
        </form>
    </body>
</html>
<?php
    if(isset($_POST["submit"])){

        if(isset($_POST["pizza"])){
            echo"You like pizza <br>";
        }
        if(isset($_POST["hamburger"])){
            echo"You like hamburger <br>";
        }
        if(isset($_POST["hotdog"])){
            echo"You like hotdog <br>";
        }
        if(isset($_POST["taco"])){
            echo"You like taco <br>";
        }
        
    }
?>