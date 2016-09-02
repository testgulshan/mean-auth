app.controller('RegisterCtrl', function ($scope, $http) {
  $scope.title = 'Register';
  $scope.register = function (user) {
    console.log(user);
    $http({
      method: 'POST',
      url: '/register',
      data: user
    }).then(function successCallback(response) {
      console.log(response);
    }, function errorCallback(response) {
      console.log(response);
    })
  }
})
