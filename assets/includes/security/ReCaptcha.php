<?php
class ReCaptcha {
    private $config;
    private $error = '';
    private $errorCodes = [];
    private $debugInfo = [];

    public function __construct() {
        $this->config = Config::getInstance();
        $this->debugInfo[] = 'ReCaptcha initialized';
    }

    public function verify($recaptchaResponse) {
        // Reset state
        $this->error = '';
        $this->errorCodes = [];
        $this->debugInfo = [];

        // Validate response token
        if (empty($recaptchaResponse)) {
            $this->error = 'No reCAPTCHA response provided';
            $this->debugInfo[] = 'Empty response token';
            error_log("reCAPTCHA Error: No response token provided");
            return false;
        }

        // Check response token length
        if (strlen($recaptchaResponse) < 20) {
            $this->error = 'Invalid reCAPTCHA response format';
            $this->debugInfo[] = 'Response token too short: ' . strlen($recaptchaResponse);
            error_log("reCAPTCHA Error: Response token too short");
            return false;
        }

        // Get secret key
        $secret = $this->config->get('RECAPTCHA_SECRET_KEY');
        if (empty($secret)) {
            $this->error = 'reCAPTCHA secret key not configured';
            $this->debugInfo[] = 'Missing secret key';
            error_log("reCAPTCHA Error: Secret key not configured");
            return false;
        }

        // Debug logging
        error_log("reCAPTCHA Verification Attempt:");
        error_log("- Response Token Length: " . strlen($recaptchaResponse));
        error_log("- Using Secret Key: " . substr($secret, 0, 3) . '***');

        $url = 'https://www.google.com/recaptcha/api/siteverify';
        $data = [
            'secret' => $secret,
            'response' => $recaptchaResponse
        ];

        try {
            $opts = [
                'http' => [
                    'method' => 'POST',
                    'header' => [
                        'Content-type: application/x-www-form-urlencoded',
                        'User-Agent: reCAPTCHA/PHP'
                    ],
                    'content' => http_build_query($data),
                    'timeout' => 10
                ],
                'ssl' => [
                    'verify_peer' => false,
                    'verify_peer_name' => false
                ]
            ];
            
            $context = stream_context_create($opts);
            $result = file_get_contents($url, false, $context);

            if ($result === false) {
                $this->error = 'Failed to connect to reCAPTCHA service';
                $this->debugInfo[] = 'Connection failed';
                error_log("reCAPTCHA Error: Connection failed");
                return false;
            }

            // Log the complete response
            error_log("reCAPTCHA API Complete Response: " . $result);
            $this->debugInfo[] = 'API Response: ' . $result;
            
            $resultJson = json_decode($result);
            if (json_last_error() !== JSON_ERROR_NONE) {
                $this->error = 'JSON Decode Error: ' . json_last_error_msg();
                $this->debugInfo[] = 'JSON decode failed';
                error_log($this->error);
                return false;
            }

            if (!$resultJson->success) {
                $this->errorCodes = $resultJson->{'error-codes'} ?? [];
                $this->error = $this->getErrorMessage();
                $this->debugInfo[] = 'Verification failed: ' . $this->error;
                error_log("reCAPTCHA verification failed: " . $this->error);
                return false;
            }
            
            // Log success
            error_log("reCAPTCHA verification successful");
            $this->debugInfo[] = 'Verification successful';
            return true;

        } catch (Exception $e) {
            $this->error = 'Error verifying reCAPTCHA: ' . $e->getMessage();
            $this->debugInfo[] = 'Exception: ' . $e->getMessage();
            error_log($this->error);
            return false;
        }
    }

    private function getErrorMessage() {
        $errorMessages = [
            'missing-input-secret' => 'The secret parameter is missing',
            'invalid-input-secret' => 'The secret parameter is invalid or malformed',
            'missing-input-response' => 'The response parameter is missing',
            'invalid-input-response' => 'The response parameter is invalid or has expired',
            'bad-request' => 'The request is invalid or malformed',
            'timeout-or-duplicate' => 'The response is no longer valid: either is too old or has been used previously'
        ];

        $errors = [];
        foreach ($this->errorCodes as $code) {
            $errors[] = $errorMessages[$code] ?? "Unknown error ($code)";
        }

        return implode(', ', $errors);
    }

    public function getError() {
        return $this->error;
    }

    public function getErrorCodes() {
        return $this->errorCodes;
    }

    public function getDebugInfo() {
        return $this->debugInfo;
    }
}
