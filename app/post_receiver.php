<?php



if($_POST[uname] == "200") {
    $a = http_response_code(200);
}
elseif($_POST[uname] == "400") {
    $a = http_response_code(400);
}
elseif($_POST[uname] == "500") {
    $a = http_response_code(500);
}else {
    $a = http_response_code(200);
}

var_dump($a);
?>