<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$method = $_SERVER['REQUEST_METHOD'];

if ($method !== 'GET') {
    http_response_code(405);
    echo json_encode(["message" => "Method not allowed"]);
    exit;
}

// User-provided GitHub Username (Replace 'ghost' with the real one)
$githubUsername = isset($_GET['username']) ? $_GET['username'] : 'ghost';

// Create a stream context to set a User-Agent, as required by the GitHub API
$options = [
    'http' => [
        'method' => 'GET',
        'header' => [
            "User-Agent: PHP-Backend-Script\r\n"
        ]
    ]
];
$context = stream_context_create($options);

// Fetch User Profile
$profileUrl = "https://api.github.com/users/" . urlencode($githubUsername);
$profileResponse = @file_get_contents($profileUrl, false, $context);

if ($profileResponse === FALSE) {
    http_response_code(404);
    echo json_encode(["status" => "error", "message" => "GitHub user not found or API rate limit exceeded."]);
    exit;
}

$profileData = json_decode($profileResponse, true);

// Fetch Repositories
$reposUrl = "https://api.github.com/users/" . urlencode($githubUsername) . "/repos?sort=updated&per_page=6";
$reposResponse = @file_get_contents($reposUrl, false, $context);
$reposData = $reposResponse !== FALSE ? json_decode($reposResponse, true) : [];

$responseData = [
    "status" => "success",
    "profile" => [
        "username" => $profileData['login'] ?? $githubUsername,
        "avatar_url" => $profileData['avatar_url'] ?? null,
        "public_repos" => $profileData['public_repos'] ?? 0,
        "followers" => $profileData['followers'] ?? 0,
        "profile_url" => $profileData['html_url'] ?? "https://github.com/".$githubUsername
    ],
    "recent_repos" => array_map(function($repo) {
        return [
            "name" => $repo['name'],
            "description" => $repo['description'],
            "url" => $repo['html_url'],
            "language" => $repo['language'],
            "stars" => $repo['stargazers_count']
        ];
    }, is_array($reposData) ? array_slice($reposData, 0, 6) : [])
];

http_response_code(200);
echo json_encode($responseData);
