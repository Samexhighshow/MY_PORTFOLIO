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

// Mock Database Data for the Technical Blog
$posts = [
    [
        "id" => 1,
        "title" => "Zero-Trust Architecture: Moving Beyond the VPN",
        "category" => "Cybersecurity",
        "date" => date('Y-m-d', strtotime('-2 days')),
        "excerpt" => "Why traditional perimeter security is failing modern enterprise networks and how Zero-Trust principles mitigate lateral movement attacks.",
        "readTime" => "5 min read",
        "author" => "Maximus"
    ],
    [
        "id" => 2,
        "title" => "Building Robust Student Management Systems",
        "category" => "EdTech",
        "date" => date('Y-m-d', strtotime('-1 week')),
        "excerpt" => "A deep dive into the database design and API architecture required to handle thousands of concurrent student records without locking.",
        "readTime" => "8 min read",
        "author" => "Maximus"
    ],
    [
        "id" => 3,
        "title" => "Securing React Applications: Common Pitfalls",
        "category" => "Web Dev",
        "date" => date('Y-m-d', strtotime('-2 weeks')),
        "excerpt" => "An analysis of XSS vulnerabilities in modern frontend frameworks and how to securely handle JWTs in local storage vs HTTP-only cookies.",
        "readTime" => "6 min read",
        "author" => "Maximus"
    ],
    [
        "id" => 4,
        "title" => "Network Administration in the Cloud Era",
        "category" => "ICT Mgmt",
        "date" => date('Y-m-d', strtotime('-1 month')),
        "excerpt" => "Strategies for maintaining visibility and control when your infrastructure spans across AWS, Azure, and legacy on-premise hardware.",
        "readTime" => "10 min read",
        "author" => "Maximus"
    ]
];

http_response_code(200);
echo json_encode([
    "status" => "success",
    "data" => $posts
]);
