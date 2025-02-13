<?php

$router = new Core\Router();

// تعریف مسیرها
$router->route('/', 'GET', function() {
    view_c("home");
});

$router->route('/about', 'GET', function() {
echo 'درباره ما';
});

$router->route('/contact', 'POST', function() {
});

$router->dispatch();