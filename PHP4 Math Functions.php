<!DOCTYPE html>
<html>
    <head>
        <title>Math Functions</title>
    </head>
    <body>
        <form action="index" method="post">
            <label>x:</label>
            <input type="text" name="x"><br>
            <label>y:</label>
            <input type="text" name="y"><br>
            <label>z:</label>
            <input type="text" name="z">
            <input type="submit" value="total">
        </form>
    </body>
</html>
<?php
    $x = $_POST["x"];
    $y = $_POST["y"];
    $z = $_POST["z"];
    $total = null;

    //$total = abs($x);
    //$total = round($x);
    //$total = round($x, 2); //2 digits
    //$total = floor($x); //always round down
    //$total = ceil($x); //always round up
    //$total = pow($x, $y); //power, raise to
    //$total = sqrt($x); //squareroot
    //$total = max($x, $y, $z ); //maximum value
    //$total = min($x, $y, $z ); //minimum value
    //$total = pi(); //pi
    //$total = rand(1, 100); //random number between

    echo $total;
?>