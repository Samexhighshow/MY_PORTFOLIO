<?php
header("Access-Control-Allow-Methods: POST, OPTIONS");

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["message" => "Method not allowed"]);
    exit();
}

$data = json_decode(file_get_contents("php://input"));

if (
    !empty($data->name) &&
    !empty($data->email) &&
    !empty($data->message)
) {
    $name = htmlspecialchars(strip_tags($data->name));
    $email = htmlspecialchars(strip_tags($data->email));
    $message = htmlspecialchars(strip_tags($data->message));

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["message" => "Invalid email format."]);
        exit();
    }

    // Usually here we would use PHPMailer to send the email.
    // For demonstration, we simply return success.
    // To implement PHPMailer properly, we'd load the composer autoload and configure SMTP.
    
    // require_once __DIR__ . '/../../vendor/autoload.php';
    // $mail = new PHPMailer\PHPMailer\PHPMailer(true);
    // ...

    http_response_code(200);
    echo json_encode(["message" => "Message sent successfully!"]);
} else {
    http_response_code(400);
    echo json_encode(["message" => "Unable to send message. Data is incomplete."]);
}
