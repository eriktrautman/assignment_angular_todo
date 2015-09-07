todo.controller("TodoCtrl",
  ['$scope', function($scope){

    $scope.todoItem = { 
      text: "Get groceries from the store",
      dueDate: new Date(),
      completed: false 
    }

    $scope.items = [ $scope.todoItem ]


  }]
);