<?php
class FormValidator {
    private $errors = [];
    private $data = [];

    public function __construct($postData) {
        $this->data = array_map(function($value) {
            return is_string($value) ? addslashes(trim($value)) : $value;
        }, $postData);
    }

    public function validate() {
        $this->validateName();
        $this->validateEmail();
        $this->validatePhone();
        $this->validateMessage();
        $this->validateHoneypot();
        
        return empty($this->errors);
    }

    private function validateName() {
        if (empty($this->data['name'])) {
            $this->errors['nameMessage'] = 'error';
            error_log("Validation failed: Name is empty");
        }
    }

    private function validateEmail() {
        if (!filter_var($this->data['email'] ?? '', FILTER_VALIDATE_EMAIL)) {
            $this->errors['emailMessage'] = 'error';
            error_log("Validation failed: Invalid email format");
        }
    }

    private function validatePhone() {
        if (empty($this->data['phone'])) {
            $this->errors['phoneMessage'] = 'error';
            error_log("Validation failed: Phone is empty");
        }
    }

    private function validateMessage() {
        if (empty($this->data['message'])) {
            $this->errors['messageMessage'] = 'error';
            error_log("Validation failed: Message is empty");
        }
    }

    private function validateHoneypot() {
        if (!empty($this->data['country'])) {
            $this->errors['spamMessage'] = 'error';
            error_log("Validation failed: Honeypot field filled");
        }
    }

    public function getErrors() {
        return $this->errors;
    }

    public function getData() {
        return [
            'name' => $this->data['name'] ?? '',
            'email' => $this->data['email'] ?? '',
            'phone' => $this->data['phone'] ?? '',
            'message' => $this->data['message'] ?? ''
        ];
    }
}
