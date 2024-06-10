<?php
require  'db.php';
$conn = getConnection();
header('Content-Type: application/json');
// 查询商品信息
$sql = "select * from shop";
$result = $conn->query($sql);
if($result->num_rows>0){
    $data = [];
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    echo json_encode([
        'code'=> 200,
        'msg'=> 'query was successful',
        'data'=> $data,
    ]);
}else{
    echo json_encode([
        'code'=> 400,
        'msg'=> 'Query failed',

    ]);
}