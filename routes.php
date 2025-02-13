<?php

$router = new Core\Router();

// تعریف مسیرها
$router->route('/', 'GET', function() {
    view_c("home");
});

$router->route('/about', 'GET', function() {
echo 'درباره ما';
});

$router->route('/create', 'POST', function() {
    view_c('create');
});

$router->dispatch();