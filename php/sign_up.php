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

if($_SERVER["REQUEST_METHOD"] == 'POST'){
    $username = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $id_no = $_POST['id_no'];
    $service_tag = $_POST['service_tag'];
    $profile = "";

    $service_tags = "SELECT service_tag FROM patients";
    $found = 0;
    $num_service_tags = $connect->query($service_tags);

    while($patient = $num_service_tags->fetch_assoc()){
        if(strcmp($service_tag, $patient["service_tag"]) == 0){
            $found = 1;
            break;
        }
    }

    if($found == 1){
        $sql_insert = "INSERT INTO online_users(user_name, email, password, id_no, service_tag, profile) VALUES('$username', '$email', '$password', '$id_no', '$service_tag', '$profile')";
        if($connect->query($sql_insert) === true){
            echo "<script>
                alert_box('Account created successfully!', '../html/index.html');
            </script>";
        }else{
            echo "<script>
                alert_box('An error occurred!', '../html/index.html');
            </script>";
        }
    }else{
        echo "<script>
            alert_box('You are ineligible to create an Account! You have never received our medical services', '../html/index.html');
        </script>";
    }
}else{
    echo "<script>
        alert_box('An error occurred during signing in!', '../html/index.html');
    </script>";
}

