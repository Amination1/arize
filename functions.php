<?php
function view_c($filename) {
    require "controllers/$filename.php";
}

function view($filename) {
    require "views/$filename.view.php";
}