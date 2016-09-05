myApp.controller('LoginController', ['$scope', '$http', '$window', '$location', function($scope, $http, $window, $location) {
  console.log('Bilo is in LoginController!');

    $scope.user = {
      username: '',
      password: ''
    };
    $scope.message = 'Welcome';

    $scope.login = function() {
      if($scope.user.username === '' || $scope.user.password === '') {
        $scope.message = "Enter your username and password!";
      } else {
        console.log('Bilo is sending to server...', $scope.user);
        $http.post('/', $scope.user).then(function(response) {
          if(response.data.username) {
            console.log('success: ', response.data);
            // location works with SPA (ng-route)
            $location.path('/adminscotch');//was login
          } else {
            console.log('failure: ', response);
            $scope.message = 'Incorrect';
          }
        });
      }
    };
    $scope.registerUser = function() {
      if($scope.user.username === '' || $scope.user.password === '') {
        $scope.message = "Choose a username and password!";
      } else {
        console.log('sending to server...', $scope.user);
        $http.post('/register', $scope.user).then(function(response) {
          console.log('success');
          $location.path('/adminscotch');
        },
        function(response) {
          console.log('error');
          $scope.message = "Please try again.";
        });
      }
    };
//Copied from home controller
    // $scope.user_id= {};
    // getUser();
    //
    // function getUser() {
    // $http.get('/router').then(function(response) {
    //       if(response.data.username) {
    //           $scope.userName = response.data.username;
    //           $scope.user_id = response.data._id;
    //           console.log('User Data: ', $scope.userName);
    //       } else {
    //           $location.path("/login");
    //       }
    //   });
    // }
    //Copied from HomeController
    $scope.logout = function() {
      $http.get('/router/logout').then(function(response) {
        console.log('logged out');
        $location.path("/login");
      });
    };
}]);
