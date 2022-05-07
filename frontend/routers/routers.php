<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

$url = $_SERVER['REQUEST_URI'];

$newUrl = explode("/", $url);

unset($newUrl[0]);

if (count($newUrl) > 1) {
    header("location: http://localhost:9000");
}

switch ($newUrl[1]) {
    case '':
        include './views/pages/doviz.php';
        break;
    case 'hisse':
        include './views/pages/hisse.php';
        break;
    case 'altin':
        include './views/pages/altin.php';
        break;
    /* case 'hesap':
        include './views/pages/hesap.php';
        break;
    case 'analiz':
        include './views/pages/analiz.php';
        break;
    case 'destek':
        include './views/pages/destek.php';
        break; */
    default:
        include './views/pages/doviz.php';
        break;
}
