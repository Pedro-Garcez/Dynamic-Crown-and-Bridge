<?php 
if ($_POST['submit']) {
    mail("dynamiccrownandbridge@gmail.com", "Contact message", "Name: ".$_POST['name']."
    Email: ".$_POST['name']."
    Message: ".$_POST['message']);


}


?>