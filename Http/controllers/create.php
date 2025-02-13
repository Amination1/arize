<?php

// داده‌های شما
$data = $_SESSION['arize'];

// متن درخواست برای AI
$userContent = "یک عریضه رسمی با مشخصات زیر بنویس:\n";
foreach ($data as $key => $value) {
    $userContent .= "$key: $value\n";
}

// آدرس OpenRouter API
$apiUrl = "https://openrouter.ai/api/v1/chat/completions";

// کلید API شما
$apiKey = "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"; // اینجا کلید API خود را قرار دهید

// داده‌های درخواست به API
$requestData = [
    "model" => "openai/gpt-4", // مدل مورد نظر (مثلاً GPT-4)
    "messages" => [
        ["role" => "system", "content" => "You are a helpful assistant."],
        ["role" => "user", "content" => $userContent]
    ],
    "stream" => false
];

// تبدیل داده‌ها به فرمت JSON
$jsonData = json_encode($requestData);

// تنظیمات درخواست
$options = [
    "http" => [
        "header" => "Content-Type: application/json\r\n" .
            "Authorization: Bearer " . $apiKey . "\r\n" .
            "HTTP-Referer: https://your-site-url.com\r\n" . // آدرس سایت شما
            "X-Title: Your Site Name\r\n", // نام سایت شما
        "method" => "POST",
        "content" => $jsonData
    ]
];

// ایجاد context برای ارسال درخواست
$context = stream_context_create($options);

// ارسال درخواست به API و دریافت پاسخ
$response = file_get_contents($apiUrl, false, $context);

// بررسی پاسخ
if ($response === FALSE) {
    die("خطا در ارتباط با API.");
}

// تبدیل پاسخ JSON به آرایه
$result = json_decode($response, true);

// نمایش عریضه
if (isset($result['choices'][0]['message']['content'])) {
    echo "<h2>عریضه ایجاد شده:</h2>";
    echo "<p>" . nl2br(htmlspecialchars($result['choices'][0]['message']['content'])) . "</p>";
} else {
    echo "خطا در ایجاد عریضه.";
}

view('create.view.php');