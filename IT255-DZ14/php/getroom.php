<?php
header('Access-Control-Allow-Methods: GET');  
include("functions.php");

if(isset($_POST['id']))
echo getRoom(intval($_POST['id']));


?>