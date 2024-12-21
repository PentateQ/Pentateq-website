<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/error_log.txt');
ini_set('display_errors', 0);

require 'vendor/autoload.php';


ob_start();

function sanitize_input($data) {
    return htmlspecialchars(stripslashes(trim($data)));
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $response = [];

    try {
        $fullname = sanitize_input($_POST['fullName']);
        $email = sanitize_input($_POST['email']);
        $message = sanitize_input($_POST['message']);

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $response = ['success' => false, 'message' => 'Invalid email format'];
            ob_end_clean();
            echo json_encode($response);
            exit;
        }

        $mail = new PHPMailer;
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'bit22-kchideru@mubas.ac.mw';
        $mail->Password = '';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        $mail->setFrom('noreply@pentateqco.com', 'Pentateq Cooperation');
        $mail->addAddress('pentateqco@gmail.com');
        $mail->addReplyTo($email, $fullname);

        $mail->Subject = 'New Contact Us Form Submission';
        $mail->Body = "Name: $fullname\nEmail: $email\nMessage:\n$message";

        
        $mail->SMTPDebug = 2;  
        $mail->Debugoutput = function($str, $level) {
            error_log("Debug [$level]: $str");
        };

        if (!$mail->send()) {
            $response = ['success' => false, 'message' => 'Failed to send the email.'];
            error_log('Mailer Error: ' . $mail->ErrorInfo);
        } else {
            $response = ['success' => true, 'message' => 'Message sent successfully!'];
        }
    } catch (Exception $e) {
        $response = ['success' => false, 'message' => 'Unexpected error.'];
        error_log('Exception: ' . $e->getMessage());
    }

   
    ob_end_clean();
    header('Content-Type: application/json');
    echo json_encode($response);
    exit;
}
