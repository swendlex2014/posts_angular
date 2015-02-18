<?php
    $uri = $_SERVER["REQUEST_URI"];

    // assuming http://sample.com/sub/folder/ID
    $ID = substr($uri, strrpos($uri, '/') + 1);

    $homepage = file_get_contents('http://wspecs.com/serv/header/posts.php?ID=' . $ID);
    echo $homepage;
?>