<?php
    //logical operators = combine conditional statements

    $temp = 25;

    if($temp >= 0 && $temp <= 30){
        echo"The weather is good.";
    }
    elseif($temp == 0 || $temp == 30){ //Or logical opr.
        echo"statement 2";
    }
    elseif($temp != 30){ //elseif(!$temp) boolean
        echo"statement3";
    }
    else{
        echo"statement4";
    }

?>