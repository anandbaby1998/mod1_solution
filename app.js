(function(){

angular.module('DIAapp',[])
.controller('LunchCheckController',LunchCheckController);



function LunchCheckController($scope){

$scope.checkfood = function(){

var sample = $scope.food;
if(sample == null){
  $scope.foodvalue = "Please enter a value";
}


var words = sample.split(",").filter(item => item);
const valcheck = words.length;

if(valcheck <= 3)
{
   $scope.foodvalue = "Enjoy!!";
   $scope.foodvalue1 = "";
}
else
{
    $scope.foodvalue1 = "Too Much!";
    $scope.foodvalue = "";
}



};

};













})();
