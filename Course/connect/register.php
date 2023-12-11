<?php
require_once('db.php');
$name = $_POST['name'];
$pass = $_POST['password'];
$email = $_POST['email'];

if (empty($name) || empty($pass) || empty($email)){
    echo "Заповніть всі поля";
}

$sql = "INSERT INTO users (name, pass, email) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);

if ($stmt) {
    $stmt->bind_param("sss", $name, $pass, $email);

    if ($stmt->execute()) {
        header("Location: ../golovna.html"); // Перенаправлення на головну сторінку користувача.;
    } else {
        echo "Помилка виконання запиту: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "Помилка підготовки запиту: " . $conn->error;
}