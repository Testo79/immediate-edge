<?php
$originalURL = $_POST['originalURL']; // Access the original URL sent by AJAX

// Fetch the headers of the original URL using get_headers()
$headers = get_headers($originalURL, 1);

// Check if there is a 'Location' header indicating redirection
if (isset($headers['Location'])) {
    // If 'Location' header is an array, get the last element which contains the redirected URL
    if (is_array($headers['Location'])) {
        $redirectedURL = end($headers['Location']);
    } else {
        $redirectedURL = $headers['Location'];
    }

    // Parse the redirected URL to extract parameters
    $parameters = parse_url($redirectedURL, PHP_URL_QUERY);
    parse_str($parameters, $parameterValues);

    // Return the parameters as an associative array
    header('Content-Type: application/json');
    echo json_encode($parameterValues);
} else {
    // No redirection or 'Location' header found
    echo "No redirection or 'Location' header found.";
}
?>
