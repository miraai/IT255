<?php

$num = $_POST['num'];
 
function fibonacci($num){
 
    if($num==0){
       return 0;
    }else if( $num == 1){
       return 1;
    }  else {
        return (fibonacci($num-1) + fibonacci($num-2));
    }
}

header("Content-type: application/json");
for ($i = 0; $i < $num; $i++){
    $test_array = array ('rezultat' => fibonacci($i),);
    echo "\n";
    echo json_encode($test_array);
}

?>