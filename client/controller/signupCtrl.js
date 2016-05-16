angular.module('myApp').controller('signupCtrl',signupCtrl);
function signupCtrl($state,$scope,$http)
{
   $scope.signup=function(data)
   {
      $http.post('http://localhost:3021/user/signup',data).success(function (data,status) {
      alert(data)   
           if(data=='incorrect email or password'&& status==200){
           	$state.go('signup');
            }else if (data=='successfully upload'&& status==200) {
            $state.go('login')	
            }
         else{
           $scope.loading=false;
           alert("wrong info");
         }
    }).catch(function (data) {
      $scope.loading=false;
      alert("internal server error");
    });
    $scope.user='',
    $scope.email='',
    $scope.password='',
    $scope.repass=''
  }
   }