<?php
$_SESSION['arize'] = [
    'title' => $_POST['title'],
    'fullname' => $_POST['fullname'],
    'email' => $_POST['email'],
    'phone' => $_POST['phone'],
    'subject' => $_POST['subject'],
    'content' => $_POST['content'],
    'details' => $_POST['details'],
    ];




view('create.view.php');