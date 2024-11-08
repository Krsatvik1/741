<?php
class EmailTemplates {
    public static function getUserEmail($name, $message) {
        return "
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: #f8f9fa; padding: 20px; text-align: center; }
                .content { padding: 20px; }
                .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
            </style>
        </head>
        <body>
            <div class='container'>
                <div class='header'>
                    <h2>Thank you for contacting 741 Studios!</h2>
                </div>
                <div class='content'>
                    <p>Dear {$name},</p>
                    <p>We have received your message and our team will review it shortly. We aim to respond to all inquiries within 24-48 hours.</p>
                    <p>Your message:</p>
                    <blockquote style='background: #f8f9fa; padding: 15px; border-left: 4px solid #007bff;'>
                        {$message}
                    </blockquote>
                    <p>Best regards,<br>741 Studios Team</p>
                </div>
                <div class='footer'>
                    This is an automated message from 741 Studios. Please do not reply directly to this email.
                </div>
            </div>
        </body>
        </html>";
    }

    public static function getDevEmail($name, $email, $phone, $message) {
        return "
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: #f8f9fa; padding: 20px; }
                .content { padding: 20px; }
                .field { margin-bottom: 10px; }
                .label { font-weight: bold; }
            </style>
        </head>
        <body>
            <div class='container'>
                <div class='header'>
                    <h2>New Contact Form Submission - 741 Studios</h2>
                </div>
                <div class='content'>
                    <div class='field'>
                        <span class='label'>Name:</span> {$name}
                    </div>
                    <div class='field'>
                        <span class='label'>Email:</span> {$email}
                    </div>
                    <div class='field'>
                        <span class='label'>Phone:</span> {$phone}
                    </div>
                    <div class='field'>
                        <span class='label'>Message:</span><br>
                        <p style='background: #f8f9fa; padding: 15px;'>{$message}</p>
                    </div>
                    <p style='font-size: 12px; color: #666;'>
                        This message was sent via the contact form on 741.audio<br>
                        You can reply directly to this email to respond to the sender.
                    </p>
                </div>
            </div>
        </body>
        </html>";
    }
}
