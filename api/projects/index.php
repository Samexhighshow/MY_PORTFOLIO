<?php
header("Access-Control-Allow-Methods: GET, OPTIONS");

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(["message" => "Method not allowed"]);
    exit();
}

// Mock projects data
$projects = [
    [
        "id" => 1,
        "title" => "Project Aegis: Zero-Trust Ecosystem",
        "category" => "Cybersecurity",
        "description" => "Securing a distributed workforce of 5,000+ employees across 12 countries with custom identity management and encrypted tunneling solutions.",
        "image" => "https://lh3.googleusercontent.com/aida-public/AB6AXuAcgpVy_AbUhruW5UPnSxlChrW7Ulzyk8zU_fM6vtCPusJptjIZBBvMRBA8RWcO6yXciShAkIcSlTTCKUoYaeArNoiqjPDsZqpnZJ9iX4nGequuZNsQFPObaULCPrsNQ35rHOFM8wwU3q5WboivljlnFSUZ11syqv6mvsk_2ztxodFJr6LOZBKBtBXt2lZIW4fyjNbwA0McfX4xIHpmH5USXLHUlgqD0yPnwuuCHbqKM9BNxAETGHJTjJC_XGWUXD0b7m9PT5vqGe-R"
    ],
    [
        "id" => 2,
        "title" => "Helix Engine: Event-Driven Core",
        "category" => "Engineering",
        "description" => "Building a high-throughput microservices architecture capable of processing 100k+ events per second with sub-10ms latency.",
        "image" => "https://lh3.googleusercontent.com/aida-public/AB6AXuA3SujdWKSk6fqJkzklbgqKsOsnPyr13u9cG4CZFyovdTcam6hJabGQqc6rDynhWLg58jvN1BM2SmIAmvNGk-la0z9fp9sTkX4vdhjoUvrtVUMs6DIsQETSpPCjmOItXSmIqjUiwX4Rb6tIZaYqBWCcc_BYtdbzgl9L8ibQL3KetKF0Yo2BJoPGJme9K_MfEimkfIvZ3laTCgxnIGsBLn1XZ4KxYEdbx8o3Wi_bCJ_7E8XcYyd0OpTvXtoKVKAIjbeOo9Ms4ZVLjawe"
    ]
];

http_response_code(200);
echo json_encode(["projects" => $projects]);
