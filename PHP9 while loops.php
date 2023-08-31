<!DOCTYPE html>
<html>
    <head>
        <title>Timer</title>
    </head>
    <body>
        <form action="" method="post">
            <input type="submit" value="stop">
        </form>
    </body>
</html>

<?php
    // while loop = do some code infinitely while some condition remains true

    $seconds = 0;
    $running = false;
    while($running){

        if(isset($_POST["stop"])){ //checks the button if click or not
            $running = false;
        }
        else{
            $seconds++;
            echo $seconds ."<br>";
        }
    }
?>