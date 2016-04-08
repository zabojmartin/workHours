<?php
	$data = json_decode(file_get_contents("php://input"));

	include('config.php');

	$db = new DB();
	
	$sql = "INSERT INTO `hours`(`date`,`amount`)VALUES('$data->date','$data->amount')";

	  //$sql = "SELECT * FROM `blogs` ORDER BY `id` DESC";
    $result = mysqli_query($db->getConnection(), $sql);

    //create an array
    $emparray = array();
    while($row = mysqli_fetch_assoc($result))
    {
        $emparray[] = $row;
    }
    echo json_encode($emparray);