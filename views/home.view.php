<!DOCTYPE html>
<html lang="fa">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <title>ساخت عریضه با AI</title>
    <style>
        /* استایل برای نوبار */
        .nav-link:hover {
            background-color: rgba(59, 130, 246, 0.2);
        }

        /* انیمیشن برای ورود */
        .fade-in {
            animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    </style>
</head>
<body class="bg-gray-100">
<nav class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-12"> <!-- تغییر ارتفاع نوبار -->
            <div class="flex">
                <div class="flex-shrink-0">
                    <h1 class="text-xl font-bold text-blue-600">نام وب‌سایت</h1>
                </div>
            </div>
            <div class="hidden md:flex space-x-4">
                <a href="#" class="nav-link px-3 py-2 rounded-md text-sm font-medium text-gray-700">خانه</a>
                <a href="#about" class="nav-link px-3 py-2 rounded-md text-sm font-medium text-gray-700">درباره ما</a>
                <a href="#contact" class="nav-link px-3 py-2 rounded-md text-sm font-medium text-gray-700">تماس با ما</a>
            </div>
            <div class="-mr-2 flex md:hidden">
                <button id="menu-button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none" aria-expanded="false" aria-label="باز کردن منو">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
    <div id="mobile-menu" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" class="nav-link block px-3 py-2 rounded-md text-base font-medium text-gray-700">خانه</a>
            <a href="#about" class="nav-link block px-3 py-2 rounded-md text-base font-medium text-gray-700">درباره ما</a>
            <a href="#contact" class="nav-link block px-3 py-2 rounded-md text-base font-medium text-gray-700">تماس با ما</a>
        </div>
    </div>
</nav>

<main class="py-10 fade-in">
    <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-bold text-center mb-6">ساخت عریضه با AI</h2>
        <form action="/create">
            <div class="mb-4 text-right">
                <label for="title" class="block text-sm font-medium text-gray-700">عنوان عریضه</label>
                <input type="text" id="title" name="title" required class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500">
            </div>
            <div class="mb-4 text-right">
                <label for="fullname" class="block text-sm font-medium text-gray-700">نام و نام خانوادگی</label>
                <input type="text" id="fullname" name="fullname" required class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500">
            </div>
            <div class="mb-4 text-right">
                <label for="email" class="block text-sm font-medium text-gray-700">ایمیل</label>
                <input type="email" id="email" name="email" required class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500">
            </div>
            <div class="mb-4 text-right">
                <label for="phone" class="block text-sm font-medium text-gray-700">شماره تماس</label>
                <input type="tel" id="phone" name="phone" required class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500">
            </div>
            <div class="mb-4 text-right">
                <label for="subject" class="block text-sm font-medium text-gray-700">موضوع عریضه</label>
                <input type="text" id="subject" name="subject" required class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500">
            </div>
            <div class="mb-4 text-right">
                <label for="content" class="block text-sm font-medium text-gray-700">متن عریضه</label>
                <textarea id="content" name="content" rows="4" required class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"></textarea>
            </div>
            <div class="mb-4 text-right">
                <label for="details" class="block text-sm font-medium text-gray-700">مشخصات اضافی</label>
                <input type="text" id="details" name="details" class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500">
            </div>
            <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300">ارسال عریضه</button>
        </form>

        <section id="about" class="mt-10 fade-in text-right">
            <h2 class="text-xl font-bold mb-4">درباره ما</h2>
            <p class="text-gray-600">ما یک تیم متعهد به ارائه خدمات عالی به مشتریان خود هستیم.</p>
        </section>

        <section id="contact" class="mt-10 fade-in text-right">
            <h2 class="text-xl font-bold mb-4">تماس با ما</h2>
            <p class="text-gray-600">برای هرگونه سوال، لطفاً با ما تماس بگیرید.</p>
        </section>
    </div>
</main>

<script>
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
</script>
</body>
</html>