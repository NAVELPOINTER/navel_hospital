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

$service_tag = $_POST['service-tag'];

$sql = "SELECT * FROM online_users WHERE service_tag = '$service_tag'";

$sql_results = $connect->query($sql);

if($sql_results->num_rows == 1){
    $sql = "DELETE FROM online_users WHERE service_tag = '$service_tag'";

    if($connect->query($sql) === TRUE){
        echo "<script>
            alert_box('Deleted Successfully', '../html/medical-data-center-patients/account-info.html');
        </script>";
    }else{
        echo "<script>
            alert_box('Error Occurred during deletion', '../html/medical-data-center-patients/medical-data-center_patient.html');
        </script>";
    }
}else if($sql_results->num_rows > 1){
    echo "<script>
        alert_box('Invalid service Tag', '../html/medical-data-center-patients/medical-data-center_patient.html');
    </script>";
}else{
    echo "<script>
        alert_box('Such Account does not exist', '../html/medical-data-center-patients/account-info.html');
    </script>";
}

mysqli_close($connect);
?>
