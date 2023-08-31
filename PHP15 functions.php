<?php
    /* function = write some code once, reuse when you need it
                    type () after function name to invoke
                    ex. add() subtract() multiply() divide () */
    
    function happy_birthday($firstname,$age){ // can be more than 1
        echo"Happy Birthday {$firstname} <br>";
        echo"Happy Birthday {$firstname} <br>";
        echo"Happy Birthday Happy Birthday <br>";
        echo"Happy Birthday {$firstname} <br><br>";
        echo"You are {$age} years old!";
    }

    happy_birthday("Jarren",8); //name first then age
    happy_birthday("Aaren",5);
    happy_birthday("Jared",3);

    function is_even($number){
        $result = $number % 2;  //modulous or the remainder... divide by 2 evenly
        return $result;
        // return $number % 2; -- shortcut
    }

    echo is_even(10); // 0 = even 1 = odds

    function hypotenus($a, $b){
        $c = sqrt($a ** 2 + $b ** 2);  //sqrt - squareroot .. ** raise to the power of
        return $c;
    }

    echo hypotenus(3, 5);
?>