var app = angular.module('LunchCheck',[]);

app.controller('LunchCheckController',fonction);

fonction.inject('$scope');

function fonction($scope){
    
   


    
    $scope.traitement = function(){
           
         
         var a = $scope.verify.toString();

         var array=a.split(",");
         var len=array.length;
         console.log(len);
         
         var result;
        if(len<= 3){  result="Enjoys!";  $scope.couleur="#010D3D";}

        if(3 < len){  result="Too much !"; $scope.couleur="#010D3D";}
        
        if($scope.verify==""){   result="Please enter data first "; $scope.couleur="#D43629";}	
       
        $scope.message=result;


       
    };


};

