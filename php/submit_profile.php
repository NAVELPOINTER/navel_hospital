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
    $image = $_POST['image'];

    $sql = "UPDATE online_users SET profile = LOAD_FILE('$image') WHERE service_tag = '1GF3'";

    if($connect->query($sql) == TRUE){
        echo "<script>
            alert_box('Profile $image updated successfully', '../html/medical-data-center-patients/account-info.html');
        </script>";
    }else{
        echo "<script>
            alert_box('Profile update Failed!', '../html/medical-data-center-patients/account-info.html');
        </script>";
        echo "because".$connect->error;
    }
}else{
    echo "<script>
            alert_box('An error occurred!', '../html/medical-data-center-patients/account-info.html');
        </script>";
}

?>