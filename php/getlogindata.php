<?php

REQUIRE_ONCE('mysqlconnect.php');

$query = "SELECT email, password";

$response = @mysqli_query($dbc, $query);

if($response){
  echo '<table align="left" cellspacing="5" cellpadding="8">
        <tr><td align="left"> <b> Email </b></td>
        <tr><td align="left"> <b> Password </b></td>';

}

?>