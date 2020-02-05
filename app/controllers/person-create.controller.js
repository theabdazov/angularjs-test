'use strict';
app.controller('PersonCreateCtrl', function ($scope,$location, PersonService) {
  $scope.person = {};
  const getMetaData = () => {
    PersonService.getMetaData().then(
      res => {
        console.log(res);
        $scope.$evalAsync(function() {$scope.fields = res;});

      }
    );
  };
  const create = (person) => {
    PersonService.create(person).then(
      res => {
        $location.path('/')
      }
    )
  };

  getMetaData();


  $scope.save = function (person, form) {
    if (form.$valid) {
      create((person))
    }
  };

});
