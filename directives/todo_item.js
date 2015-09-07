todo.directive('todoItem', function(){
  return {
    templateUrl: "directives/todo_item.html",
    restrict: "E",
    scope: {
        item: "="
    }
  };
})
