<?php
// Check if token is provided as command line argument
if ($argc < 2) {
    die("Usage: php test-contact.php <recaptcha_token>\nExample: php test-contact.php YOUR_RECAPTCHA_TOKEN\n");
}

// Get token from command line argument
$recaptchaToken = $argv[1];

// Test data
$data = [
    'name' => 'kumar satvik',
    'email' => 'krsatvik',
    'phoneNo' => '24123',
    'message' => 'sdafads',
    'g-recaptcha-response' => $recaptchaToken
];

// Initialize cURL session
$ch = curl_init('http://localhost/741/assets/contact.php');

// Set cURL options
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, false);

// Execute cURL request
$response = curl_exec($ch);

// Check for cURL errors
if (curl_errno($ch)) {
    echo 'cURL Error: ' . curl_error($ch) . "\n";
} else {
    // Print request data
    echo "Request Data:\n";
    echo "-------------\n";
    foreach ($data as $key => $value) {
        if ($key === 'g-recaptcha-response') {
            echo "$key: " . substr($value, 0, 10) . "...\n";
        } else {
            echo "$key: $value\n";
        }
    }
    echo "\n";

    // Print raw response
    echo "Raw Response:\n";
    echo "-------------\n";
    echo $response . "\n\n";

    // Print decoded response
    echo "Decoded Response:\n";
    echo "----------------\n";
    $decoded = json_decode($response, true);
    if ($decoded) {
        echo "Success: " . ($decoded['success'] ? 'true' : 'false') . "\n";
        echo "Message: " . $decoded['message'] . "\n";
    } else {
        echo "Failed to decode response as JSON\n";
    }
}

// Close cURL session
curl_close($ch);
