angular.module('myApp').controller('loginCtrl',loginCtrl);
function loginCtrl($state,$scope,$http)
{
   $scope.login=function(data)
   {
      $http.post('http://localhost:3021/user/login',data).success(function (data,status) {
      console.log(data)    
          if(data=='incorrect email'&& data=='not found'&& status==200){
            $state.go('login');
            }else if (data=='correct'&& status==200) {
            $state.go('view')  
            }
    }).catch(function (data) {
      $scope.loading=false;
      alert("internal server error");
    });
    $scope.user='',
    $scope.password=''
  }
}
