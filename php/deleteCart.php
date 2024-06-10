<?php
require  'db.php';
$conn = getConnection();
header('Content-Type: application/json');

$id = htmlspecialchars($_GET['id']);

$sql = "delete from cart where id=$id";
$result = $conn->query($sql);
if($result){
    echo json_encode([
        'code'=> 200,
        'msg'=> 'Delete successful',
    ]);
}else{
    echo json_encode([
        'code'=> 500,
        'msg'=> 'Delete failed',
    ]);
}