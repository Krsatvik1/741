<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

echo "Starting configuration test...\n\n";

// Get current directory
echo "Current directory: " . __DIR__ . "\n";

// Check if .env file exists
$envPath = __DIR__ . '/.env';
echo "Checking .env file at: $envPath\n";
if (file_exists($envPath)) {
    echo "Found .env file\n";
    echo "File permissions: " . substr(sprintf('%o', fileperms($envPath)), -4) . "\n";
    echo "File size: " . filesize($envPath) . " bytes\n";
    echo "Masked contents:\n";
    $contents = file_get_contents($envPath);
    echo preg_replace('/([A-Z_]+=)(.+)/', '$1***', $contents) . "\n\n";
} else {
    echo "ERROR: .env file not found!\n\n";
}

echo "Loading Config class...\n";
$configPath = __DIR__ . '/assets/includes/config/Config.php';
echo "Config class path: $configPath\n";
if (!file_exists($configPath)) {
    echo "ERROR: Config.php not found!\n";
    exit(1);
}

require_once $configPath;

// Initialize config
echo "\nInitializing Config...\n";
$config = Config::getInstance();

// Dump the current configuration state
echo "\nDumping full configuration:\n";
echo "----------------------------------------\n";
$config->dumpConfig();

// Test specific variables
echo "\nTesting specific variables:\n";
echo "----------------------------------------\n";
$vars = [
    'SMTP_HOST',
    'SMTP_USERNAME',
    'SMTP_PASSWORD',
    'SMTP_PORT',
    'DEV_EMAIL',
    'RECAPTCHA_SITE_KEY',
    'RECAPTCHA_SECRET_KEY'
];

foreach ($vars as $var) {
    $value = $config->get($var);
    echo "$var: ";
    if ($value !== null) {
        if (in_array($var, ['SMTP_PASSWORD', 'SMTP_USERNAME', 'RECAPTCHA_SECRET_KEY'])) {
            echo substr($value, 0, 3) . "*** [LOADED]\n";
        } else {
            echo "$value [LOADED]\n";
        }
    } else {
        echo "NOT SET [MISSING]\n";
    }
}

echo "\nChecking environment globals:\n";
echo "----------------------------------------\n";
echo "Variables in \$_ENV:\n";
foreach ($vars as $var) {
    echo "$var: " . (isset($_ENV[$var]) ? "SET" : "NOT SET") . "\n";
}

echo "\nVariables from getenv():\n";
foreach ($vars as $var) {
    $value = getenv($var);
    echo "$var: " . ($value !== false ? "SET" : "NOT SET") . "\n";
}

echo "\nTest complete.\n";
