<?php

// Allow any origin to make requests
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { 
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Content-Type');
    exit();
}

$sub1  = "" ;
$sub2 = "" ;
$sub3  = "" ;
$sub4 = "" ;


$originalURL = "https://click.larazon.ws/5Xkyr29S?id=1&brandName=ImmediateEdge&workerName=GOOGLE"; // Access the original URL sent by AJAX

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
    $parameters =json_encode($parameterValues) ; 
   
     $sub1  =  $parameterValues['aff_sub1'];
     $sub2  =  $parameterValues['aff_sub2'];
     $sub3  =  $parameterValues['aff_sub3'];
     $sub4  =  $parameterValues['aff_sub4'];

   
} else {
    // No redirection or 'Location' header found
    echo "No redirection or 'Location' header found.";
}






$servername = "localhost"; // Replace with your database server's address
$username = "InfinityCrypto"; // Replace with your database username
$password = "Poker123@@"; // Replace with your database password
$dbname = "infinitycrypto";

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $referrer = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : '';
    $lead = array(

'first_name' => $_POST["first_name"] ,
'last_name'=> $_POST["last_name"] ,
'email' =>  $_POST["email"] ,
'password' =>"Poker123" , 
'area_code' =>$_POST["area_code"] ,
'phone_number'=> $_POST["phone"] ,
'country' => $_POST["country"] ,
'ip' => $_POST["ip"] ,
'sub1' =>  $sub1 ,
'sub2'=> $sub2 ,
'sub3'=> $sub3 ,
'sub4'=> $sub4 ,
'referrer' => $referrer,
'brandName' =>$_POST["brandName"]


);
   // Call the appropriate API function based on country code
   if (in_array($lead['country'], ['AR', 'NG', 'CO'])) {
    $response = submitSupreMedia($conn, $lead);
    $apiType = 'supremedia';
} else {
    $response = submitRoicollective($conn, $lead);
    $apiType = 'roicollective';
}

// Set the appropriate content type for JSON response
header('Content-Type: application/json');

// Echo the API response as a JSON object
echo json_encode($response);

// Close the connection after all operations
$conn->close();
exit();
}
function submitRoicollective($conn, $lead)
{
    $url = 'https://clckson-api.com/api/v2/leads';
    $headers = array(
        'Api-Key: C1DA02EA-93EC-BC10-68BA-6C6D83C316DF',
        'Content-Type: application/x-www-form-urlencoded'
    );

    // Data to be sent in the POST request
    $data = array(
        'email' => $lead['email'],
        'firstName' => $lead['first_name'],
        'lastName' => $lead['last_name'],
        'password' => $lead["password"],
        'ip' => $lead['ip'],
        'phone' => $lead['phone_number'],
        'areaCode' => $lead['area_code'],
        'custom1' => $lead["sub1"],
        'custom2' => $lead["sub2"],
        'custom3' => $lead["sub3"],
        'custom4' => $lead["sub4"],
        'custom5' => $lead["country"],
        'comment' => NULL,
        'brandName' => $lead['brandName'],
    );
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    // Execute the request and get the response
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE); // Get the HTTP status code
    curl_close($ch);

    // Prepare log message
    $logMessage = "\n[Date: " . date('Y-m-d H:i:s') . "]";
    $logMessage .= "\n[Request]: " . json_encode($data, JSON_PRETTY_PRINT);
    $logMessage .= "\n[Response]: " . json_encode(json_decode($response, true), JSON_PRETTY_PRINT);
    $logMessage .= "\n[HTTP Code]: " . $httpCode . "\n";

    // Check for errors
    if ($response === false) {
        $error = curl_error($ch);
        // Log the error
        file_put_contents("Roicollective-error.log", $logMessage, FILE_APPEND);
        die(json_encode(array('errorMessage' => $error)));
        // Database insertion code
    createLeadTable($conn, $lead, 'roicollective');
    insertLeadData($conn, $lead, $data, 'roicollective', 'NO');
    } else {
        $responseData = json_decode($response, true); // Parse the response data as an array
        $responseData['httpCode'] = $httpCode; // Add the HTTP status code to the response data
        http_response_code(200);
        header('Content-type:application/json;charset=utf-8');
        createLeadTable($conn, $lead, 'roicollective');
        insertLeadData($conn, $lead, $data, 'roicollective', 'NO');
        // Check if the redirect URL is available in the response
        if (isset($responseData['details']['redirect']['url'])) {
            // If the redirect URL is present, send it as the response
            file_put_contents("Roicollective-success.log", $logMessage, FILE_APPEND);
            die(json_encode(array('redirectUrl' => $responseData['details']['redirect']['url'])));
            insertLeadData($conn, $lead, $data, 'roicollective', 'YES');
        } else {
            // If there are errors in the response, send the first error message
            if (isset($responseData['errors']) && is_array($responseData['errors']) && count($responseData['errors']) > 0) {
                $errorMessage = $responseData['errors'][0]['message'];
                file_put_contents("Roicollective-error.log", $logMessage, FILE_APPEND);
                die(json_encode(array('errorMessage' => $errorMessage)));
                createLeadTable($conn, $lead, 'roicollective');
                insertLeadData($conn, $lead, $data, 'roicollective', 'NO');
            } else {
                // If the redirect URL is not present and no errors, send the whole response data
                file_put_contents("Roicollective-error.log", $logMessage, FILE_APPEND);
                die(json_encode($responseData));
                createLeadTable($conn, $lead, 'roicollective');
                insertLeadData($conn, $lead, $data, 'roicollective', 'NO');
            }
        }
    }
}
function submitSupreMedia($conn, $lead)
{
    $url = 'https://ss2701api.com/v3/affiliates/lead/create';
    $headers = array(
        'Token: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0ciI6IjMiLCJhYyI6IjEiLCJlb2kiOiI5OCIsInVpIjoiNDUyMiIsIkFQSV9USU1FIjoxNjU0MDg4Mzg3fQ.i4GYr5eIrMeyMn4KU1DwiVjU5ni3xDJrBeLUf1XgeQA',
        'Content-Type: application/x-www-form-urlencoded'
    );

    // Data to be sent in the POST request
    $data = array(
        'firstname' => $lead['first_name'],
        'lastname' => $lead['last_name'],
        'email' => $lead['email'],
        'password' => $lead["password"],
        'area_code' => $lead['area_code'],
        'phone' => $lead['phone_number'],
        'ip' => $lead['ip'],
        'country_code' => $lead['country'],
        'referrer_url' => $lead['referrer'],
        'aff_sub' => $lead["sub1"],
        'aff_sub2' => $lead["sub2"],
        'aff_sub3' => $lead["sub3"],
        'aff_sub4' => $lead["sub4"],
        'aff_sub5' => NULL,
        'source' => NULL,
        'brandName' =>$lead["brandName"]
    );

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    // Execute the request and get the response
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE); // Get the HTTP status code
    curl_close($ch);

    // Prepare log message
    $logMessage = "\n[Date: " . date('Y-m-d H:i:s') . "]";
    $logMessage .= "\n[Request]: " . json_encode($data, JSON_PRETTY_PRINT);
    $logMessage .= "\n[Response]: " . json_encode(json_decode($response, true), JSON_PRETTY_PRINT);
    $logMessage .= "\n[HTTP Code]: " . $httpCode . "\n";

    // Check for errors
    if ($response === false) {
    $error = curl_error($ch);
    // Log the error
    file_put_contents("Supremedia-error.log", $logMessage, FILE_APPEND);
    die(json_encode(array('errorMessage' => $error)));
    createLeadTable($conn, $lead, 'supremedia');
    insertLeadData($conn, $lead, $data, 'supremedia', 'NO');
    } else {
    $responseData = json_decode($response, true); // Parse the response data as an array
    $responseData['httpCode'] = $httpCode; // Add the HTTP status code to the response data
    http_response_code(200);
    header('Content-type:application/json;charset=utf-8');
    createLeadTable($conn, $lead, 'supremedia');
    insertLeadData($conn, $lead, $data, 'supremedia', 'NO');
    // Check if the redirect URL is available in the response
    if (isset($responseData['status']) && $responseData['status'] === true && isset($responseData['result']['url'])) {
        // If the redirect URL is present, send it as the response
        file_put_contents("Supremedia-success.log", $logMessage, FILE_APPEND);
        die(json_encode(array('redirectUrl' => $responseData['result']['url'])));
        insertLeadData($conn, $lead, $data, 'supremedia', 'YES');
    } else if (isset($responseData['status']) && $responseData['status'] === false && isset($responseData['result']) && is_string($responseData['result'])) {
        // If the response has "status": false and "result" is a string, consider it as the error message
        $errorMessage = $responseData['result'];
        file_put_contents("Supremedia-error.log", $logMessage, FILE_APPEND);
        die(json_encode(array('errorMessage' => $errorMessage)));
        createLeadTable($conn, $lead, 'supremedia');
        insertLeadData($conn, $lead, $data, 'supremedia', 'NO');
    } else {
        // If there are errors in the response, send the error message
        if (isset($responseData['result']) && is_array($responseData['result']) && isset($responseData['result']['message'])) {
            $errorMessage = $responseData['result']['message'];
            file_put_contents("Supremedia-error.log", $logMessage, FILE_APPEND);
            die(json_encode(array('errorMessage' => $errorMessage)));
            createLeadTable($conn, $lead, 'supremedia');
            insertLeadData($conn, $lead, $data, 'supremedia', 'NO');
        } else {
            // If the redirect URL is not present and no errors, send the whole response data
            file_put_contents("Supremedia-error.log", $logMessage, FILE_APPEND);
            die(json_encode($responseData));
            createLeadTable($conn, $lead, 'supremedia');
            insertLeadData($conn, $lead, $data, 'supremedia', 'NO');
        }
    }
    }



}

function createLeadTable($conn, $lead, $apiType) {
    // Customize table name based on API type and country
    if ($apiType === 'roicollective') {
        $tableName = 'leads_' . strtolower($lead['country']);
    } elseif ($apiType === 'supremedia') {
        $tableName = 'leads_' . strtolower($lead['country']);
    } else {
        // Handle unsupported API types here
        die("Unsupported API type");
    }

    $sqlCreateTable = "CREATE TABLE IF NOT EXISTS $tableName (
        id INT AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(50) NOT NULL,
        last_name VARCHAR(50) NOT NULL,
        email VARCHAR(100) NOT NULL,
        phone_number VARCHAR(20),
        ip VARCHAR(50),
        BrandName VARCHAR(50),
        Country VARCHAR(50),
        Success ENUM('YES', 'NO') NOT NULL DEFAULT 'NO',
        ApiType VARCHAR(20) NOT NULL
    )";

    if ($conn->query($sqlCreateTable) !== TRUE) {
        die("Error creating table: " . $conn->error);
    }
}

function insertLeadData($conn, $lead, $data, $apiType, $success) {
    $tableName = 'leads_' . strtolower($lead['country']);
    $combinedPhoneNumber = "{$lead['area_code']} {$lead['phone_number']}";

    // Customize the insertion query based on the API type
    if ($apiType === 'roicollective') {
        $sqlInsert = "INSERT INTO $tableName (first_name, last_name, email, phone_number, ip, BrandName, Country, Success, ApiType)
        VALUES ('{$lead['first_name']}', '{$lead['last_name']}', '{$lead['email']}', '$combinedPhoneNumber', '{$lead['ip']}', '{$data['brandName']}', '{$data['custom5']}', '$success', '$apiType')";
    } elseif ($apiType === 'supremedia') {
        $sqlInsert = "INSERT INTO $tableName (first_name, last_name, email, phone_number, ip, BrandName, Country, Success, ApiType)
        VALUES ('{$lead['first_name']}', '{$lead['last_name']}', '{$data['email']}', '$combinedPhoneNumber', '{$lead['ip']}', '{$data['brandName']}', '{$data['country_code']}', '$success', '$apiType')";
    } else {
        // Handle unsupported API types here
        die("Unsupported API type");
    }
    
    if ($conn->query($sqlInsert) !== TRUE) {
        //echo "Error inserting data: " . $conn->error;
    } else {
        //echo "Data inserted successfully!";
    }
}