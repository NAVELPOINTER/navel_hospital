<! Doctype html>
<html lang="en-Us">
    <head>
        <title></title>
        <script src="../js/index.js"></script>
        <link rel="stylesheet" href="../css/index.css"/>
        <style>
            body{
                background-color: #dfe5ec;
            }
        </style>
    </head>
    <body>
    <div class="alert-box">
        <h3>Navel Hospital</h3>
        <p id="message"></p>
        <button id="alert-box-button">Ok</button>
    </div>
    </body>
</html>
<?php

include 'connect.php';

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $username = $_POST['name'];
    $password = $_POST['password'];

    $sql = "SELECT * from online_users WHERE user_name = '$username' AND password = '$password'";

    $sql_result = $connect->query($sql);

    if($sql_result->num_rows == 1){
        echo "<script>
            alert_box('Login Successful!', '../html/about-us.html');
        </script>";
    }else{
        echo "<script>
            alert_box('Login Failed!', '../html/index.html');
        </script>";
    }
}else{
    echo "<script>
        alert_box('An error occurred during submission', '../html/index.html');
    </script>";
}