<?php
    $uri = $_SERVER["REQUEST_URI"];
    $ID = substr($uri, strrpos($uri, '/') + 1);

    $homepage = file_get_contents("http://wspecs.com/services/posts/data/header/posts.php?ID=$ID&uri=$uri");
    echo $homepage;
?>