<?php
    //switch = replacement to using many elseif statements

    $date = date("l"); //to check the day of the week

    switch($date){ //needs 2 or more cases
        case 'Monday':
            echo"it is monday";
            break; 

        case 'Tuesday':
            echo"tuesdate";
            break;

        default:
            echo"Statement3"; //like else statement
    }
?>