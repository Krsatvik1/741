<?php
require_once __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/includes/config/Config.php';
require_once __DIR__ . '/includes/email/Mailer.php';
require_once __DIR__ . '/includes/email/EmailTemplates.php';

header('Content-Type: application/json');

try {
    $config = Config::getInstance();
    
    // Get POST data
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $phoneNo = $_POST['phone'] ?? '';
    $message = $_POST['message'] ?? '';
    $recaptchaResponse = $_POST['token'] ?? '';

    // Validate inputs
    if (empty($name) || empty($email) || empty($phoneNo) || empty($message)) {
        throw new Exception('Please fill in all required fields');
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new Exception('Please enter a valid email address');
    }

    if (empty($recaptchaResponse)) {
        throw new Exception('Please complete the reCAPTCHA verification');
    }

    $recaptchaSecret = $config->get('RECAPTCHA_SECRET_KEY');
    $recaptchaVerify = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$recaptchaSecret}&response={$recaptchaResponse}");
    $recaptchaData = json_decode($recaptchaVerify);

    if (!$recaptchaData->success) {
        throw new Exception('reCAPTCHA verification failed');
    }

    // Initialize mailer and send both emails
    $mailer = new Mailer();
    $emailSuccess = $mailer->sendContactEmails(
        $name,
        $email,
        $phoneNo,
        $message
    );

    if (!$emailSuccess) {
        throw new Exception('Failed to send email');
    }

    // Return success response
    echo json_encode([
        'success' => true,
        'message' => 'Thank you for your message. We will get back to you soon!'
    ]);

} catch (Exception $e) {
    // Return error response
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => $e->getMessage()
    ]);
}
