<?php
require  'db.php';
$conn = getConnection();
header('Content-Type: application/json');
$username = $conn->real_escape_string($_POST['username']);
$password = md5($conn->real_escape_string($_POST['password']));
if(empty($username) || empty($password)){
    $jsonData = json_encode([
        'code'=> 400,
        'msg'=> 'Login failed',
        'data'=> $conn->error
    ]);
    echo $jsonData;
    exit;
}
$sql = "select * from user where username='$username' and password='$password'";
$result = $conn->query($sql);
if($result->num_rows>0){
    $row = $result->fetch_assoc();
    echo json_encode([
        'code'=> 200,
        'msg'=> 'Login successful',
        'data'=> $row,
        'token'=>   bin2hex(random_bytes(32))
    ]);

}else{
    $jsonData = json_encode([
        'code'=> 400,
        'msg'=> 'This account is not registered',
        'data'=> $conn->error
    ]);
    echo $jsonData;
}
