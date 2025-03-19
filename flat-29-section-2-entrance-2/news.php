<?php

$recepient = "ask@krakivskyy.co.ua";
$sitename = "Krakivskyy Mail";


$email = trim($_POST["email"]);
$message = "nE-mail: $email";

$pagetitle = "NEW MESSAGE \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>