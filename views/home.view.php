<?php
$header = 'ساخت عریضه با AI';
?>
<?php require 'views/partials/head.php' ?>
<?php require 'views/partials/nav.php' ?>
<?php require 'views/partials/header.php' ?>

        <form id="arizeForm" action="/create" method="post">
            <div class="mb-4 text-right">
                <label for="title" class="block text-sm font-medium text-gray-700">عنوان عریضه</label>
                <textarea id="title" name="title" required rows="1" cols="50" class="inputs mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"><?= $_SESSION['arize']['title'] ?? '' ?></textarea>
            </div>
            <div class="mb-4 text-right">
                <label for="fullname" class="block text-sm font-medium text-gray-700">نام و نام خانوادگی</label>
                <textarea id="fullname" name="fullname" required rows="1" cols="50" class="inputs mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"><?= $_SESSION['arize']['fullname'] ?? '' ?></textarea>
            </div>
            <div class="mb-4 text-right">
                <label for="email" class="block text-sm font-medium text-gray-700">ایمیل</label>
                <textarea id="email" name="email" rows="1" cols="50" required class="inputs mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"><?= $_SESSION['arize']['email'] ?? '' ?></textarea>
            </div>
            <div class="mb-4 text-right">
                <label for="phone" class="block text-sm font-medium text-gray-700">شماره تماس</label>
                <textarea id="phone" name="phone" rows="1" cols="50" required class="inputs mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"><?= $_SESSION['arize']['phone'] ?? '' ?></textarea>
            </div>
            <div class="mb-4 text-right">
                <label for="subject" class="block text-sm font-medium text-gray-700">موضوع عریضه</label>
                <textarea id="subject" name="subject" required class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"><?= $_SESSION['arize']['subject'] ?? '' ?></textarea>
            </div>
            <div class="mb-4 text-right">
                <label for="content" class="block text-sm font-medium text-gray-700">متن عریضه</label>
                <textarea id="content" name="content" rows="4" required class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"><?= $_SESSION['arize']['content'] ?? '' ?></textarea>
            </div>
            <div class="mb-4 text-right">
                <label for="details" class="block text-sm font-medium text-gray-700">مشخصات اضافی</label>
                <textarea id="details" name="details" class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"><?= $_SESSION['arize']['details'] ?? '' ?></textarea>
            </div>
            <div class="flex gap-4">
                <a href="/" type="button" onclick="resetForm()" class="alink flex-1 bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition duration-300">ریست عریضه</a>
                <button type="submit" class="flex-1 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300">ارسال عریضه</button>
            </div>
        </form>

        <section id="about" class="mt-10 fade-in text-right">
            <h2 class="text-xl font-bold mb-4">درباره ما</h2>
            <p class="text-gray-600">ما یک تیم متعهد به ارائه خدمات عالی به مشتریان خود هستیم.</p>
        </section>

        <section id="contact" class="mt-10 fade-in text-right">
            <h2 class="text-xl font-bold mb-4">تماس با ما</h2>
            <p class="text-gray-600">برای هرگونه سوال، لطفاً با ما تماس بگیرید.</p>
        </section>


<script>
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    function resetForm() {
        document.getElementById("arizeForm").reset();
        <?php
        $_SESSION['arize'] = [];
        ?>
    }
</script>

<?php require 'views/partials/footer.php'?>