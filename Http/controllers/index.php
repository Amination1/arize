<?php

if (isset($_SESSION['arize']))
{
    $_POST['arize'] = $_SESSION['arize'];
}


view('index.view.php');