<?php
$header = 'چک کردن اطلاعات عریضه';
?>
<?php require 'views/partials/head.php' ?>
<?php require 'views/partials/nav.php' ?>
<?php require 'views/partials/header.php' ?>
<?php if (isset($_SESSION['arize'])): ?>
    <table class="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <h3 class="text-2xl font-bold text-center mb-6" style="direction: rtl">مشخصات : </h3>
        <thead class="bg-gray-50">
        <tr>
            <th class="px-6 py-3 text-right border-b border-gray-200 text-sm font-medium text-gray-700">عنوان</th>
            <th class="px-6 py-3 text-right border-b border-gray-200 text-sm font-medium text-gray-700">مقدار</th>
        </tr>
        </thead>
        <tbody>
            <tr class="hover:bg-gray-50 transition duration-200">
                <td class="px-6 py-4 text-right border-b border-gray-200 text-sm text-gray-600"><?= htmlspecialchars($_SESSION['arize']['title']) ?></td>
                <td class="px-6 py-4 text-right border-b border-gray-200 text-sm text-gray-600">عنوان عریضه</td>
            </tr>
            <tr class="hover:bg-gray-50 transition duration-200">
                <td class="px-6 py-4 text-right border-b border-gray-200 text-sm text-gray-600"><?= htmlspecialchars($_SESSION['arize']['fullname']) ?></td>
                <td class="px-6 py-4 text-right border-b border-gray-200 text-sm text-gray-600">نام و نام خانوادگی</td>
            </tr>
            <tr class="hover:bg-gray-50 transition duration-200">
                <td class="px-6 py-4 text-right border-b border-gray-200 text-sm text-gray-600"><?= htmlspecialchars($_SESSION['arize']['email']) ?></td>
                <td class="px-6 py-4 text-right border-b border-gray-200 text-sm text-gray-600">ایمیل</td>
            </tr>
            <tr class="hover:bg-gray-50 transition duration-200">
                <td class="px-6 py-4 text-right border-b border-gray-200 text-sm text-gray-600"><?= htmlspecialchars($_SESSION['arize']['phone']) ?></td>
                <td class="px-6 py-4 text-right border-b border-gray-200 text-sm text-gray-600">شماره موبایل</td>
            </tr>
            <tr class="hover:bg-gray-50 transition duration-200">
                <td class="px-6 py-4 text-right border-b border-gray-200 text-sm text-gray-600"><?= htmlspecialchars($_SESSION['arize']['subject']) ?></td>
                <td class="px-6 py-4 text-right border-b border-gray-200 text-sm text-gray-600">موضوع عریضه</td>
            </tr>
            <tr class="hover:bg-gray-50 transition duration-200">
                <td class="px-6 py-4 text-right border-b border-gray-200 text-sm text-gray-600"><?= htmlspecialchars($_SESSION['arize']['content']) ?></td>
                <td class="px-6 py-4 text-right border-b border-gray-200 text-sm text-gray-600">متن عریضه</td>
            </tr>
            <tr class="hover:bg-gray-50 transition duration-200">
                <td class="px-6 py-4 text-right border-b border-gray-200 text-sm text-gray-600"><?= htmlspecialchars($_SESSION['arize']['details']) ?></td>
                <td class="px-6 py-4 text-right border-b border-gray-200 text-sm text-gray-600">مشخصات اضافی</td>
            </tr>
        </tbody>
    </table>
    <br>
    <div class="flex gap-4">
        <a href="/" type="button" class="alink flex-1 bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition duration-300">تغیر مشخصات</a>
        <a href="/create" type="button" class="alink flex-1 bg-blue-500 text-white p-2 rounded-md hover:bg-green-600 transition duration-300">ساخت عریضه</a>
    </div>
<?php else : ?>
    <h3 class="text-2xl font-bold text-center mb-6" style="direction: rtl">مشخصات وارد نشده است ! </h3>
<?php endif; ?>
<?php require 'views/partials/footer.php' ?>