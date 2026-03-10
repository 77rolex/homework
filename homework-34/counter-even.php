<?php 
$arr = [10, 5, 20, 48, 76, 43, 51, 1, 3, 2];

function paireNumbers($array){
    for($i=0; $i<count($array);$i++){
        if($array[$i] % 2 === 0) {
            echo "{$array[$i]}<br>";
        }
    }
}
paireNumbers($arr);