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
    $name = $_POST['name'];
    $service_tag = $_POST['service_tag'];
    $department = $_POST['department'];
    $staff = $_POST['staff'];
    $date = $_POST['date'];
    $time = $_POST['time'];

    $sql = "INSERT INTO appointments(name, service_tag, department, med_staff, date, time) VALUES ('$name', '$service_tag', '$department', '$staff', '$date', '$time')";

    if($connect->query($sql) == TRUE){
        echo "<script>
            alert_box('Booking was successful! You shall be notified if it is approved', '../html/medical-data-center-patients/medical-data-center_patient.html');
        </script>";
    }else{
        echo "<script>
            alert_box('Booking failed', '../html/medical-data-center-patients/book-appointment.html');
        </script>";
    }
}else{
    echo "<script>
            alert_box('An error occurred during submission', '../html/medical-data-center-patients/medical-data-center_patient.html');
        </script>";
}
?>
