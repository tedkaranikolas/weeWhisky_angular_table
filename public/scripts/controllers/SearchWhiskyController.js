//begin SearchWhiskyController
myApp.controller('SearchWhiskyController', ['$scope', '$http', function($scope, $http){
  console.log('Bilo in SearchWhiskyController');

  $scope.queryScotchDB = function(){
    var scotchOut = {
      keyword : $scope.keywordIn,
      region : $scope.scotchRegion,
      whisky_type : $scope.whiskyType,
    };//end queryScotchDB
    console.log('Bilo is sending ', scotchOut);
    $http({
      method: 'POST',
      url: '/queryOut',
      data: scotchOut
    }).then(function(response){
      $scope.allTheScotch = response.data;
      console.log('Bilo is ready for a drink: ', response.data);
    });//end queryScotchDB
//clears all input fields
    $scope.keywordIn = '';
    $scope.scotchRegion = '';
    $scope.whiskyType = '';
  };
}]);//end SearchWhiskyController
