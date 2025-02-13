<?php

spl_autoload_register(function ($className) {
    $filePath = str_replace('\\', '/', $className) . '.php';

    if (file_exists($filePath)) {
        require $filePath;
    }
});

require 'functions.php';
require 'routes.php';

