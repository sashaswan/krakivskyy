<?php

$recepient = "ask@krakivskyy.co.ua";
$sitename = "Krakivskyy Mail";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = trim($_POST["message"]);
$text = trim($_POST["text"]);
$message = "Name: $name \nPhone: $phone \nText: $message";

$pagetitle = "NEW MESSAGE \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>