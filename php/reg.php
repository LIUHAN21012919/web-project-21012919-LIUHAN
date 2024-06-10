<?php
require  'db.php';
$conn = getConnection();
//写一个插入数据库的方法
$username =  trim($_POST['username']);
$password = md5(trim($_POST['password']));
$email = trim($_POST['email']);
$avter = trim($_POST['avter']);
header('Content-Type: application/json');
// 读取当前账号是否注册
$sql = "select * from user where username='$username'";
$result = $conn->query($sql);
if($result->num_rows>0){
    $jsonData = json_encode([
        'code'=> 400,
        'msg'=> 'Account registered',
    ]);
    echo $jsonData;
    exit;
}
$sql = "INSERT INTO user (username,password,avter,email)  VALUES('$username','$password','$avter','$email')";
if (mysqli_multi_query($conn, $sql)){
    $jsonData = json_encode([
        'code'=> 200,
        'msg'=> 'registered successfully',
        'data'=> [
            'username'=> $username,
            'token'=> bin2hex(random_bytes(32)),
            'email'=> $email,
            'avter'=> $avter,
            'id'=> mysqli_insert_id($conn)
        ]
    ]);
    echo $jsonData;
} else {
    $jsonData = json_encode([
        'code'=> 400,
        'msg'=> 'login has failed',
        'data'=> $conn->error
    ]);
    echo $jsonData;
}

