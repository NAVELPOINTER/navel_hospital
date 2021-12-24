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
    $service_tag = $_POST['service-tag'];
    $username = $_POST['username'];
    $password = $_POST['password'];
    $url = $_POST['url'];


    $sql = "SELECT * FROM online_users WHERE service_tag = '$service_tag' AND user_name = '$username' AND password = '$password'";

    $results = $connect->query($sql);

    if(($results->num_rows) != 1){
        $sql = "SELECT * FROM online_users_staff WHERE service_tag = '$service_tag' AND username = '$username' AND password = '$password'";

        $results = $connect->query($sql);
        

        if(($results->num_rows) != 1){
            echo "<script>
                    alert_box('Failed to log In', '../html/$url');
                </script>";
        }else{
            
            echo "<script>
                    alert_box('log In Successful', '../html/medical-data-center-staff/medical-data-center_staff.html');
                </script>";
        }
    }else{
        echo "<script>
                    alert_box('log In Successful', '../html/medical-data-center-patients/medical-data-center_patient.html');
                </script>";
    }
} else{
    echo "Method is Get";
}

?>