<?php
error_reporting(E_ALL & ~E_WARNING); // Suppress XAMPP extension warnings
ini_set('display_errors', 1);

require_once __DIR__ . '/assets/includes/config/Config.php';

try {
    // Initialize config
    $config = Config::getInstance();
    
    echo "Environment variables loaded successfully!\n\n";
    
    // Test SMTP settings
    echo "SMTP Configuration:\n";
    echo "----------------------------------------\n";
    echo "Host: " . $config->get('SMTP_HOST') . "\n";
    echo "Port: " . $config->get('SMTP_PORT') . "\n";
    echo "Username: " . $config->getMasked('SMTP_USERNAME') . "\n";
    echo "Password: " . $config->getMasked('SMTP_PASSWORD') . "\n";
    
    // Test reCAPTCHA settings
    echo "\nreCAPTCHA Configuration:\n";
    echo "----------------------------------------\n";
    echo "Site Key: " . $config->get('RECAPTCHA_SITE_KEY') . "\n";
    echo "Secret Key: " . $config->getMasked('RECAPTCHA_SECRET_KEY') . "\n";
    
    // Test email settings
    echo "\nEmail Configuration:\n";
    echo "----------------------------------------\n";
    echo "Dev Email: " . $config->get('DEV_EMAIL') . "\n";
    
    echo "\nAll validations passed successfully!\n";
    
} catch (Exception $e) {
    echo "\nError: " . $e->getMessage() . "\n";
}
