<?php

//session_start();

require 'vendor/autoload.php';

use Core\Session;
use OpenAI\Client;
use OpenAI\Factory;
use GuzzleHttp\Client as GuzzleClient;

$yourApiKey = 'aa-sMpogzuihomx2XpXbKExE8HHK8fV7rtlSzNlmbe22Z2QEEGK';

// ایجاد کلاینت OpenAI
$client = (new Factory())
    ->withApiKey($yourApiKey)
    ->withBaseUri('https://api.avalai.ir/v1')
    ->withHttpClient(new GuzzleClient())
    ->make();


$arizeData = $_SESSION['arize'] ?? [];

if (empty($arizeData)) {
    $answer = "خطا: اطلاعات عریضه یافت نشد.";
} else {

    $userContent = "یک عریضه رسمی با مشخصات زیر بنویس:\n";
    foreach ($arizeData as $key => $value) {
        $userContent .= "$key: $value\n";
    }

    try {
        $result = $client->chat()->create([
            'model' => 'gpt-4o-mini',
            'messages' => [
                ['role' => 'user', 'content' => $userContent],
            ],
        ]);

        // دریافت پاسخ
        $answer = $result->choices[0]->message->content;
    } catch (\Exception $e) {
        // مدیریت خطاها
        $answer = "خطا: " . $e->getMessage();
    }
}

Session::put('answer', $answer);


view("create.view.php", ['answer' => $answer]);

Session::unput('arize');

