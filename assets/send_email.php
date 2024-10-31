<?php

include 'keys.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = 'queraltmompel@gmail.com';
    $subject = 'New Contact Form Submission';

    // Inicia PHPMailer
    $mail = new PHPMailer(true);

    try {

        // Configuración del servidor SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';  // Cambia esto si usas otro servidor SMTP
        $mail->SMTPAuth = true;
        $mail->Username =  WEBMASTER_EMAIL;
        $mail->Password = WEBMASTER_PASSWORD;
        $mail->SMTPSecure = 'tls';  // Activa STARTTLS
        $mail->Port = 587;  // El puerto correcto para STARTTLS

        // Configuración del correo
        $mail->setFrom($email, $name);
        $mail->addAddress($to);  // El destinatario

        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = "<html><body>
                            <h2>Contact Form Submission</h2>
                            <p><strong>Name:</strong> $name</p>
                            <p><strong>Email:</strong> $email</p>
                            <p><strong>Message:</strong></p>
                            <p>$message</p>
                          </body></html>";
        $mail->send();
        echo json_encode(["success" => true]);
    } catch (Exception $e) {
        echo json_encode(["success" => false, "message" => "Error al enviar el correo: " . $mail->ErrorInfo]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid request"]);
}
