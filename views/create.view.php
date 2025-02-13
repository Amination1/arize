<?php
$header = 'عریضه ساخته شده توسط AI';
?>
<?php require 'views/partials/head.php' ?>
<?php require 'views/partials/nav.php' ?>
<?php require 'views/partials/header.php' ?>

    <table class="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
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
                <td class="px-6 py-4 text-right border-b border-gray-200 text-sm text-gray-600"><?= htmlspecialchars($_SESSION['arize']['title']) ?></td>
                <td class="px-6 py-4 text-right border-b border-gray-200 text-sm text-gray-600">نام و نام خانوادگی</td>
            </tr>
            <tr class="hover:bg-gray-50 transition duration-200">
                <td class="px-6 py-4 text-right border-b border-gray-200 text-sm text-gray-600"><?= htmlspecialchars($_SESSION['arize']['title']) ?></td>
                <td class="px-6 py-4 text-right border-b border-gray-200 text-sm text-gray-600">ایمیل</td>
            </tr>
            <tr class="hover:bg-gray-50 transition duration-200">
                <td class="px-6 py-4 text-right border-b border-gray-200 text-sm text-gray-600"><?= htmlspecialchars($_SESSION['arize']['title']) ?></td>
                <td class="px-6 py-4 text-right border-b border-gray-200 text-sm text-gray-600">شماره موبایل</td>
            </tr>
            <tr class="hover:bg-gray-50 transition duration-200">
                <td class="px-6 py-4 text-right border-b border-gray-200 text-sm text-gray-600"><?= htmlspecialchars($_SESSION['arize']['title']) ?></td>
                <td class="px-6 py-4 text-right border-b border-gray-200 text-sm text-gray-600">موضوع عریضه</td>
            </tr>
            <tr class="hover:bg-gray-50 transition duration-200">
                <td class="px-6 py-4 text-right border-b border-gray-200 text-sm text-gray-600"><?= htmlspecialchars($_SESSION['arize']['title']) ?></td>
                <td class="px-6 py-4 text-right border-b border-gray-200 text-sm text-gray-600">متن عریضه</td>
            </tr>
            <tr class="hover:bg-gray-50 transition duration-200">
                <td class="px-6 py-4 text-right border-b border-gray-200 text-sm text-gray-600"><?= htmlspecialchars($_SESSION['arize']['title']) ?></td>
                <td class="px-6 py-4 text-right border-b border-gray-200 text-sm text-gray-600">مشخصات اضافی</td>
            </tr>
        </tbody>
    </table>

<?php require 'views/partials/footer.php' ?>