<?php
	class DB {
		private $con = false;
		private $data = array();

		public function __construct() {
			$this->con = mysqli_connect("localhost","root","","workhours") or die("Error " . mysqli_error($connection)); 
	
		}
    
    
    public function getConnection(){
    return $this->con;
    }
    
   
    }
 
  

      

?>
