<?php
    /* hashing = transforming sensitive data (password)
                into letters, numbers, and/or symbols
                via a mathematical process. (similar to encryption)
                Hides the original data from 3rd parties.
    */

    $password = "renz123";

    $hash = password_hash($password, PASSWORD_DEFAULT); //P.D is a bcrypt algorithm, constant, specifies the algo.

    if(password_verify("renz123", $hash)){
        echo "You are logged in";
    }
    else{
        echo"incorrect password";
    }
?>
