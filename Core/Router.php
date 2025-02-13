<?php

namespace Core;

class Router
{
    protected $routes = [];

    public function route($addr, $method, $callback)
    {
        $this->routes[] = [
            'path' => $addr,
            'method' => strtoupper($method),
            'handler' => $callback
        ];
    }

    public function dispatch()
    {
        $requestUri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
        $requestMethod = $_SERVER['REQUEST_METHOD'];

        foreach ($this->routes as $route) {
            if ($route['method'] === $requestMethod && $this->matchPath($route['path'], $requestUri)) {
                return call_user_func($route['handler']);
            }
        }

        http_response_code(404);
        echo 'صفحه مورد نظر یافت نشد';
        exit;
    }

    private function matchPath($routePath, $requestUri)
    {
        $routePath = rtrim($routePath, '/');
        $requestUri = rtrim($requestUri, '/');

        // تبدیل مسیر به یک الگوی regex
        $pattern = preg_replace('/\{(\w+)\}/', '(?P<$1>\w+)', $routePath);
        $pattern = '#^' . $pattern . '$#';

        if (preg_match($pattern, $requestUri, $matches)) {
            // استخراج پارامترها و افزودن به آرایه $_GET
            foreach ($matches as $key => $value) {
                if (is_string($key)) {
                    $_GET[$key] = $value;
                }
            }
            return true;
        }

        return false;
    }
}