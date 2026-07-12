<?php
require_once __DIR__ . '/../config/cors.php';

$request = isset($_GET['request']) ? $_GET['request'] : '';
$parts = explode('/', trim($request, '/'));
$endpoint = isset($parts[0]) && $parts[0] !== '' ? $parts[0] : null;

if (!$endpoint) {
    http_response_code(200);
    echo json_encode(['message' => 'Tech Architect API is running.']);
    exit();
}

$moduleFile = __DIR__ . '/' . $endpoint . '/index.php';

if (file_exists($moduleFile)) {
    require_once $moduleFile;
} else {
    http_response_code(404);
    echo json_encode(['error' => 'Endpoint not found']);
}
