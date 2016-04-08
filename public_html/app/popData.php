<?php
    	include('config.php');
       	$db = new DB();
       
        

    //fetch table rows from mysql db
    $sql = "SELECT * FROM `hours` ORDER BY `id` DESC";
    $result = mysqli_query($db->getConnection(), $sql);

    //create an array
    $emparray = array();
    while($row = mysqli_fetch_assoc($result))
    {
        $emparray[] = $row;
    }
    echo json_encode($emparray);

 
