<?php
require  'db.php';
$conn = getConnection();
header('Content-Type: application/json');

$userid = htmlspecialchars($_GET['userid']);

$sql = "select * from cart where userid = $userid";

$result = $conn->query($sql);
if($result->num_rows>0){
    $data = [];
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    echo json_encode([
        'code'=> 200,
        'msg'=> 'success',
        'data'=> $data,
    ]);
}else{
    echo json_encode([
        'code'=> 400,
        'msg'=> 'failed',
    ]);
}