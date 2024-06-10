<?php
$servername = 'localhost'; // 数据库服务器地址
$username = 'root'; // 数据库用户名
$password = ''; // 数据库密码
$dbname = 'cosmeticwebsite'; // 数据库名

// 创建连接
$conn = mysqli_connect($servername, $username, $password,$dbname);
// 检测连接
if (!$conn) {
    die("连接失败: " . mysqli_connect_error());
}
// 将连接对象设置为全局变量
function getConnection() {
    global $conn;
    return $conn;
}
?>
