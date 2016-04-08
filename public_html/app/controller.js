angular.module('controller',[])

.controller('BlogCtrl', ['$scope', '$http', '$log', function($scope, $http, $log) {

	$scope.frmToggle = function() {
		$('#blogForm').slideToggle();
	} 
	
	
	

	//console.log("BlogCtrl");
    
	$scope.showBlog = function(blog) {
	console.log(blog.amount);
	$scope.currentBlog = blog;
	//$scope.frm1.editAmount = blog.amount;
	//$scope.frm1.pokus = 1;
	var cislo=parseFloat(blog.amount);
	$scope.frm.amountEdit = cislo;
	
	};
  
  
  $scope.reloadData = function() {
  
    $http.get('./app/popData.php')
		.success(function(data) {
			$scope.blogs = data;
		})  
		.error(function(err) {
			$log.error(err);
		})               
    
  };
 
  $scope.reloadData();
   

	$scope.pushData = function($params) {
		$http.post('./app/pushData.php',{'date':$params.date, 'amount':$params.amount})
			.success(function(data) {
			//	$scope.blogs = data;
				$scope.frm.date = " ";
				//$scope.frm.amoun = " ";
        //alert($scope.frm.description);            
        
        $scope.reloadData();
 
			})
			.error(function(err) {
				$log.error(err);
			})
	}

	$scope.removeData = function($params) {
		var cnfrm = confirm("Are you sure to delete?");
		if(cnfrm) {
			$http.post('./app/removeData.php', {'id':$params})
			.success(function(data) {
				
      $scope.reloadData();
    
        //$scope.blogs = data;
			})
			.error(function(err) {
				$log.error(err);
			})
		} else {
			// 
		}
		
	}
	
	
	$scope.updateData = function($params) {
		
			
			console.log($params);
			//console.log($scope.currentBlog);
			
			$http.post('./app/updateData.php',{'id':$scope.currentBlog.id, 'amount':$params.amountEdit})
				.success(function(data) {
		$scope.currentBlog = null;           
        
        $scope.reloadData();
 
			})
			.error(function(err) {
				$log.error(err);
			})
			
			
	}
	
	
	

}])