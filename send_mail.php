<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'vendor/autoload.php';

// Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    $first_name = $_POST['firstname'];
    $last_name = $_POST['lastname'];
    $ip = $_POST['ip'];
    $budget = $_POST['budget'];
    
    $website_url = $_POST['website_url'];

    
    // Server settings
    // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'mail.techversellc.com';                // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'info@techversellc.com';                // SMTP username
    $mail->Password   = 'TjyH.z5R%?DQ';                         // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            // Enable implicit TLS encryption
    $mail->Port       = 465;                                    // TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    // Recipients
    $mail->setFrom('info@techversellc.com', 'Mailer');
    $mail->addAddress('info@techversellc.com');                 // Add a recipient

    // Content
    $mail->isHTML(true);                                        // Set email format to HTML
    $mail->Subject = 'Techverse Lead';
    $mail->Body    = '
        <ul>
            <li><b>First Name</b>: '. htmlspecialchars($first_name, ENT_QUOTES, 'UTF-8') .'</li>
            <li><b>Last Name</b>: '. htmlspecialchars($last_name, ENT_QUOTES, 'UTF-8') .'</li>
            <li><b>Message</b>: '. htmlspecialchars($message, ENT_QUOTES, 'UTF-8') .'</li>
            <li><b>Email</b>: '. htmlspecialchars($email, ENT_QUOTES, 'UTF-8') .'</li>
            <li><b>Phone</b>: '. htmlspecialchars($phone, ENT_QUOTES, 'UTF-8') .'</li>
            <li><b>IP</b>: '. htmlspecialchars($ip, ENT_QUOTES, 'UTF-8') .'</li>
            <li><b>Budget</b>: '. htmlspecialchars($budget, ENT_QUOTES, 'UTF-8') .'</li>
            <li><b>Website URL</b>: '. htmlspecialchars($website_url, ENT_QUOTES, 'UTF-8') .'</li>
        </ul>';

    $mail->send();
    $response = [
        'status' => true,
        'message' => 'Message has been sent successfully'
    ];
} catch (Exception $e) {
    $response = [
        'status' => false,
        'message' => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"
    ];
}

// Set the response headers and return the JSON response
header('Content-Type: application/json');
echo json_encode($response);
?>
