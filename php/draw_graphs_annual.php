<! Doctype html>
<html lang="en-Us">
    <head>
        <title></title>
        <script src="../js/index.js"></script>
        <link rel="stylesheet" href="../css/index.css"/>
        <script src="../js/node_modules/chart.js/dist/chart.min.js"></script>
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
    <canvas id="myChart" width="100%" height="30px">

    </canvas>
    </body>
</html>



<?php 

include 'connect.php';

$sql = "SELECT date_admitted, gender, age, disease FROM patients";

$result = $connect->query($sql);

$patients_array = array();

if($result->num_rows > 0){
    while($row = $result->fetch_assoc()){
        $single_patient_info = array();
        $single_patient_info['label'] = $row['gender'];
        $single_patient_info['value'] = $row['disease'];

        array_push($patients_array, $single_patient_info);
    }

    $connect->close();

    

    echo "<script>

        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Typhoid',
                    data: [10, 30, 12, 35, 78, 87, 12, 23, 14, 67, 18, 12],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

    </script>";


}else{
    echo "<script>
            alert_box('No record', '../php/draw_graphs_annual.php');
        </script>";
}
?>