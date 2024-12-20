<?php
// process_contact.php

// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Function to sanitize input data
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get and sanitize form data
    $fullname = sanitize_input($_POST['fullname']);
    $email = sanitize_input($_POST['email']);
    $message = sanitize_input($_POST['message']);
    
    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email format");
    }
    
    // Email details
    $to = "pentateqco@gmail.com"; // Replace with your email
    $subject = "New Contact Form Submission";
    
    // Create email message
    $email_message = "New contact form submission:\n\n";
    $email_message .= "Name: " . $fullname . "\n";
    $email_message .= "Email: " . $email . "\n";
    $email_message .= "Message:\n" . $message . "\n";
    
    // Email headers
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    
    // Send email
    if (mail($to, $subject, $email_message, $headers)) {
        // Optional: Save to database
        try {
            $pdo = new PDO("mysql:host=localhost;dbname=your_database", "username", "password");
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            
            $stmt = $pdo->prepare("INSERT INTO contact_submissions (fullname, email, message) VALUES (?, ?, ?)");
            $stmt->execute([$fullname, $email, $message]);
            
            // Redirect with success message
            header("Location: index.html?status=success");
            exit();
        } catch(PDOException $e) {
            // Log error but don't show to user
            error_log("Database Error: " . $e->getMessage());
            header("Location: index.html?status=error");
            exit();
        }
    } else {
        header("Location: index.html?status=error");
        exit();
    }
}
?>
Last edited just now