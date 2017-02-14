// MAIN CONTROLLER
function mainController($scope) {
  this.people = [];
  this.submit = function(){
     this.people.push({
    "lastname":$scope.name,
    "firstname":$scope.firstname,
    "email":$scope.email
  });
}
}
