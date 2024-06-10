<?php
require  'db.php';
$conn = getConnection();
header('Content-Type: application/json');
$id =htmlspecialchars($_GET['id']);
$sql = "select * from shop where id=$id";
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
        'code'=> 200,
        'msg'=> 'Query failed',
        'data'=> $result,
    ]);

}