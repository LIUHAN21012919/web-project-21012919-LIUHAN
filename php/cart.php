<?php
require  'db.php';
$conn = getConnection();
header('Content-Type: application/json');
// 获得前端传来的所有数据
$shopid = $_POST['shopid'];
$userid = $_POST['userid'];
if (empty($userid)){
    echo json_encode([
        'code'=> 400,
        'msg'=> 'userid is empty',
    ]);
    return;
}

$sql = "select * from shop where id='$shopid'";
$result = $conn->query($sql);
if($result->num_rows>0){
    $data = [];
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    $title= $data[0]['title'];
    $originalprice= $data[0]['originalprice'];
    $img= $data[0]['img'];
    $sql = "insert into cart(img,price,title,userid,shopid) values('$img','$originalprice','$title','$userid','$shopid')";
    $result = $conn->query($sql);
    if($result){
        echo json_encode([
            'code'=> 200,
            'msg'=> 'Successfully added',
        ]);
    }else{
        echo json_encode([
            'code'=> 400,
            'msg'=> 'Add failed',
            'data'=>$conn->error
        ]);
    }
}else{
    echo json_encode([
        'code'=> 400,
        'msg'=> 'Add failed',
    ]);
}



