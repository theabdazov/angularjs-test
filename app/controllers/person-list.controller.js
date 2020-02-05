'use strict';
app.controller('PersonListCtrl', function ($scope, PersonService) {
  $scope.fields = [];
  $scope.people = [];
  const getData=()=>{
    PersonService.fetchAllPeople().then(
      res=>{
        $scope.$evalAsync(function() {
          $scope.fields =res.metaData.map(el=>el.name);
          $scope.people = res.rows;
        });

      }
    );
  };

  $scope.deleteById = (id)=>{
    PersonService.delete(id).then(
      res=>{
        if(res){
          getData();
        }
      }
    );
  };

  getData();

});
