<?php
    //Arithmetic operators
    // + - * / ** %

    $x = 10;
    $y = 2;
    $z = null;

    $z = $x + $y;
    $z = $x - $y;
    $z = $x * $y;
    $z = $x / $y;
    $z = $x ** $y; //raise to
    $z = $x % $y; //modulous- the remainder of division

    echo $z;

    //increment/decrement operators
    //++, --

    $counter = 0;

    $counter++; //plus 1

    $counter--; //minus 1

    $counter+=2; //plus by 2

    $counter -=3; //minus by 3

    //Operator Precedence
    // ()
    // **
    // * / %
    // + -
    
    $total = 1 + 2 - 3 * 4 / 5 ** 6; //solves from left to right
    echo $total;
?>