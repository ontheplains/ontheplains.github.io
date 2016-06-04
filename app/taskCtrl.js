angular.module('taskApp')
    .controller('taskCtrl', function($scope, taskService){

    $scope.tasks = taskService.readTask();

    $scope.createTask = function (){
        taskService.createTask($scope.text, $scope.assigned);

    $scope.text = '';
    $scope.assigned = '';

    };
   $scope.deleteTask = function (index) {
       taskService.deleteTask(index);
   }

});
