angular.module('userProfiles').controller('MainController', function($scope, mainService) {
  mainService.getUsers().then(res => {
      $scope.users = res.data.data;
    }
  );

});