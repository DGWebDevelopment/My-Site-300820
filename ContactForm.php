<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $subject = "Message from your website";
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "undisclosed";
    $headers = "From: " .$mailFrom;
    $text = "You have received an email from ".$name.".\n\n".$message;

    mail($mailTo, $subject, $text, $headers);
    header("Location: ThankYou.html");
}

