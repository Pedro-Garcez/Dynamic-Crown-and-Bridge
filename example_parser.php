<?php
if( isset($_POST['inputName']) && isset($_POST['inputEmail']) && isset($_POST['inputMessage']) && isset($_POST['inputPhone']) ){
	$inputName = $_POST['inputName']; // HINT: use preg_replace() to filter the data
	$inputEmail = $_POST['inputEmail'];
	$inputPhone = $_POST['inputPhone'];

	$inputMessage = nl2br($_POST['inputMessage']);
	$to = "dynamiccrownandbridge@gmail.com";	
	$from = $inputEmail;
	$subject = 'Contact Form Message';
	$message = '<b>Name:</b> '.$inputName.' <br><b>Email:</b> '.$inputEmail.' <br><b>Phone:</b> '.$inputPhone.' <p>'.$inputMessage.'</p>';
	$headers = "From: $from\n";
	$headers .= "MIME-Version: 1.0\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1\n";
	if( mail($to, $subject, $message, $headers) ){
		echo "success";
	} else {
		echo "The server failed to send the message. Please try again later.";
	}
}
?>