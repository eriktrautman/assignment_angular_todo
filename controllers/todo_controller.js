todo.controller("TodoCtrl",
  ['$scope', function($scope){

    $scope.todo_item = { 
      text: "Get groceries from the store",
      dueDate: new Date(),
      completed: false 
    }


  }]
);