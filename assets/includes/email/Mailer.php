<?php
require_once __DIR__ . '/../../../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

class Mailer {
    private $config;
    private $mail;
    private $fromEmail = 'website@741.audio';
    private $fromName = '741 Studios';

    public function __construct() {
        $this->config = Config::getInstance();
        $this->mail = new PHPMailer(true);
        $this->setupMailer();
    }

    private function setupMailer() {
        $this->mail->isSMTP();
        $this->mail->Host = $this->config->get('SMTP_HOST');
        $this->mail->SMTPAuth = true;
        $this->mail->Username = $this->config->get('SMTP_USERNAME');
        $this->mail->Password = $this->config->get('SMTP_PASSWORD');
        $this->mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $this->mail->Port = $this->config->get('SMTP_PORT');
    }

    public function send($to, $subject, $body, $replyToEmail = '', $replyToName = '', $isHTML = true) {
        try {
            $this->mail->clearAddresses();
            $this->mail->clearReplyTos();
            
            // Always set the from address to website@741.audio
            $this->mail->setFrom($this->fromEmail, $this->fromName);
            
            // Add reply-to if provided
            if (!empty($replyToEmail)) {
                $this->mail->addReplyTo($replyToEmail, $replyToName);
            }
            
            $this->mail->addAddress($to);
            $this->mail->isHTML($isHTML);
            $this->mail->Subject = $subject;
            $this->mail->Body = $body;

            return $this->mail->send();
        } catch (Exception $e) {
            error_log("Message could not be sent. Mailer Error: {$this->mail->ErrorInfo}");
            return false;
        }
    }

    public function sendContactEmails($name, $clientEmail, $phone, $message) {
        $devEmail = $this->config->get('DEV_EMAIL');
        $emailIdentifier = "Message sent via contact form from " . $_SERVER["SERVER_NAME"];

        // Send email to developer with reply-to set to client's email
        $devEmailBody = EmailTemplates::getDevEmail($name, $clientEmail, $phone, $message);
        $devEmailSent = $this->send(
            $devEmail, 
            $emailIdentifier, 
            $devEmailBody,
            $clientEmail,  // reply-to email
            $name         // reply-to name
        );

        // Send confirmation email to user
        $userEmailBody = EmailTemplates::getUserEmail($name, $message);
        $userEmailSent = $this->send(
            $clientEmail,
            "Thank you for contacting 741 Studios",
            $userEmailBody
            // No reply-to for confirmation email
        );

        return $devEmailSent && $userEmailSent;
    }
}
