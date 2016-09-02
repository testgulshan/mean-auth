app.controller('LoginCtrl', function ($scope, $http) {
  $scope.title = 'Login';
  $scope.login = function (user) {
    console.log(user);
    $http({
      method: 'POST',
      url: '/login',
      data: user
    }).then(function successCallback(response) {
      console.log(response);
    }, function errorCallback(response) {
      console.log(response);
    })
  }
})