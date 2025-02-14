<?php

session_start(); // شروع session

require 'vendor/autoload.php'; // بارگذاری autoload

use OpenAI\Client;
use OpenAI\Factory;
use GuzzleHttp\Client as GuzzleClient;

// کلید API شما
$yourApiKey = 'aa-sMpogzuihomx2XpXbKExE8HHK8fV7rtlSzNlmbe22Z2QEEGK'; // کلید API خود را اینجا قرار دهید

// ایجاد کلاینت OpenAI
$client = (new Factory())
    ->withApiKey($yourApiKey)
    ->withBaseUri('https://api.avalai.ir/v1') // آدرس پایه API
    ->withHttpClient(new GuzzleClient()) // استفاده از Guzzle برای درخواست‌ها
    ->make();

// آماده‌سازی محتوای درخواست از session
$arizeData = $_SESSION['arize'] ?? []; // داده‌های session

if (empty($arizeData)) {
    $answer = "خطا: اطلاعات عریضه یافت نشد.";
} else {
    // تبدیل داده‌های session به یک رشته متنی
    $userContent = "یک عریضه رسمی با مشخصات زیر بنویس:\n";
    foreach ($arizeData as $key => $value) {
        $userContent .= "$key: $value\n";
    }

    // ارسال درخواست به API
    try {
        $result = $client->chat()->create([
            'model' => 'gpt-4o-mini', // مدل مورد استفاده
            'messages' => [
                ['role' => 'user', 'content' => $userContent], // پیام کاربر
            ],
        ]);

        // دریافت پاسخ
        $answer = $result->choices[0]->message->content;
    } catch (\Exception $e) {
        // مدیریت خطاها
        $answer = "خطا: " . $e->getMessage();
    }
}

// ذخیره پاسخ در session یا متغیرهای دیگر
$_SESSION['answer'] = $answer;

// نمایش view
view("create.view.php", ['answer' => $answer]);