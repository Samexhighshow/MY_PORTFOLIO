<?php
header("Access-Control-Allow-Methods: GET, OPTIONS");

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(["message" => "Method not allowed"]);
    exit();
}

// Mock GitHub API data
$githubStats = [
    "username" => "TechArchitect",
    "followers" => 1250,
    "public_repos" => 45,
    "contributions_last_year" => 3450
];

http_response_code(200);
echo json_encode(["github" => $githubStats]);
