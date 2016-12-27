<?php
header('Access-Control-Allow-Methods: GET, POST');  
include("functions.php");
//echo("1")
if(isset($_POST['roomName']) && isset($_POST['hasTV']) && isset($_POST['beds']) && isset($_POST['id'])){
	//echo("2")
$roomName = $_POST['roomName'];
$hasTV = intval($_POST['hasTV']);
$beds = intval($_POST['beds']);
$id = intval($_POST['id']);

echo updateRoom($roomName,$hasTV,$beds,$id);
}
?>