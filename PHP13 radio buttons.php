<!DOCTYPE html>
<html>
    <head>
        <title>Radio buttons</title>
    </head>
    <body>
        <form action="PHP13 radio buttons.php" method="post">
            <input type="radio" name="credit_card" value="Visa">Visa<br> <!-- name should be the same to select one specifically-->
            <input type="radio" name="credit_card" value="Mastercard">Mastercard<br>
            <input type="radio" name="credit_card" value="Debitcard">Debitcard<br>
            <input type="submit" name="confirm" value="confirm">
        </form>
    </body>
</html>

<?php

    if(isset($_POST["confirm"])){ //checks if the confirm button is clicked

        if(isset($_POST["credit_card"])){ // checks if you choose one in the selection
            $credit_card = $_POST["credit_card"];
        }
        switch($credit_card){
            case "Visa":
                echo"You selected Visa";
                break;
            case "Mastercard":
                echo "You selected Mastercard";
                break;
            case "Debitcard":
                echo "You selected Debitcard";
                break;
        }
    }
?>