<?php
class Config {
    private static $instance = null;
    private $env = [];
    
    private function __construct() {
        $this->loadEnv();
    }

    private function loadEnv() {
        $envFile = dirname(__DIR__, 3) . '/.env';
        
        if (!file_exists($envFile)) {
            throw new Exception('.env file not found');
        }

        $lines = file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($lines as $line) {
            if (strpos(trim($line), '#') === 0) {
                continue;
            }

            list($name, $value) = explode('=', $line, 2);
            $name = trim($name);
            $value = trim($value);
            
            // Remove quotes if present
            $value = trim($value, '"\'');
            
            $_ENV[$name] = $value;
            $this->env[$name] = $value;
            putenv("$name=$value");
        }

        // Validate required variables
        $required = [
            'SMTP_HOST',
            'SMTP_USERNAME',
            'SMTP_PASSWORD',
            'SMTP_PORT',
            'DEV_EMAIL',
            'RECAPTCHA_SITE_KEY',
            'RECAPTCHA_SECRET_KEY'
        ];

        foreach ($required as $var) {
            if (empty($this->env[$var])) {
                throw new Exception("Required environment variable $var is not set");
            }
        }

        // Validate SMTP_PORT is numeric
        if (!is_numeric($this->env['SMTP_PORT'])) {
            throw new Exception('SMTP_PORT must be numeric');
        }

        // Validate DEV_EMAIL format
        if (!filter_var($this->env['DEV_EMAIL'], FILTER_VALIDATE_EMAIL)) {
            throw new Exception('DEV_EMAIL must be a valid email address');
        }
    }

    public static function getInstance() {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    public function get($key, $default = null) {
        return $this->env[$key] ?? $default;
    }

    public function has($key) {
        return isset($this->env[$key]);
    }

    public function all() {
        return $this->env;
    }

    public function getMasked($key) {
        if (!$this->has($key)) {
            return null;
        }

        $value = $this->get($key);
        if (in_array($key, ['SMTP_PASSWORD', 'SMTP_USERNAME', 'RECAPTCHA_SECRET_KEY'])) {
            return substr($value, 0, 3) . str_repeat('*', strlen($value) - 3);
        }
        return $value;
    }
}
