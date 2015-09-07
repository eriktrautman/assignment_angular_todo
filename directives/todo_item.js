todo.directive('todoItem', function(){
  return {
    templateUrl: "directives/todo_item.html",
    restrict: "A",

    // Need to use the "inherited" scope instead
    //   of the "isolate scope" so we can access
    //   the methods of our parent controller.
    // This is done by setting `scope: true` instead
    //   of supplying it with an object {}
    scope: true
  };
})
