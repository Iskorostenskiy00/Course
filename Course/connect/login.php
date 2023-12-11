<?php
require_once('db.php');
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $pass = $_POST['password'];

    if (empty($email) || empty($pass)) {
        echo "Заповніть всі поля";
    } else {
        $sql = "SELECT * FROM users WHERE email = ?";
        $stmt = $conn->prepare($sql);

        if ($stmt) {
            $stmt->bind_param("s", $email);

            if ($stmt->execute()) {
                $result = $stmt->get_result();

                if ($result->num_rows === 1) {
                    $row = $result->fetch_assoc();

                    // Проста перевірка пароля
                    if ($pass === $row['pass']) {
                        // Start the session
                        session_start();

                        // Store user information in the session
                        $_SESSION['user_email'] = $email;

                        // Authentication successful
                        header("Location: ../golovna.html");
                        exit();
                    } else {
                        echo "Неправильний email або пароль (Помилка при перевірці пароля)";
                    }
                } else {
                    echo "Неправильний email або пароль (Немає користувача з таким email)";
                }
            } else {
                echo "Помилка виконання запиту: " . $stmt->error;
            }

            $stmt->close();
        } else {
            echo "Помилка підготовки запиту: " . $conn->error;
        }
    }
}
?>
