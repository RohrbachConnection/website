<?php
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

$composite = chop($name . "\n" . $email . "\n\n" . $message);

if ($composite != "") {
  mail("info@rohrbachconnection.com", "Website contact form", $composite);
}
?>