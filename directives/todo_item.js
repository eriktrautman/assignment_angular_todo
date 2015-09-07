todo.directive('todoitem', function(){
  return {
    templateUrl: "directives/todo_item.html",
    restrict: "A",
    scope: {
        item: "="
    }
  };
})
