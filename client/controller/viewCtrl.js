angular.module('myApp').controller('viewCtrl',viewCtrl);
function viewCtrl($state,$scope,$http)
{
   $scope.view=function()
   {
      $http.get('http://localhost:3021/user/view').success(function (data,status) {     
           if(status==200){
            $scope.users=data;
            }
         else{
           $scope.loading=false;
           alert("wrong info");
         }
    }).catch(function (data) {
      $scope.loading=false;
      alert("internal server error");
    });
  }
}
   