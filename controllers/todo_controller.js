todo.controller("TodoCtrl",
  ['$scope', '$window', 'todoCrud', function( $scope, $window, todoCrud ){


    // Initialize variables
    $scope.items = todoCrud.getItems();
    $scope.hideCompleted = todoCrud.hideCompleted;


    // Add an item to the collection
    $scope.addItem = function(){
      todoCrud.addItem( $scope.item )
    }


    // Remove an item from our collection
    //   by finding and splicing it out
    $scope.removeItem = function( item ){
      console.log( "Destroying item: " + item );
      todoCrud.removeItem( item );
    }


    // Change whether we will view all items or
    //   only the uncompleted ones
    $scope.toggleCompleted = function(){
      todoCrud.toggleCompleted();
    }


    // Remove all completed items from our collection
    $scope.destroyCompleted = function(){
      todoCrud.destroyCompleted();
    }


    // Just a helper to test whether things are working
    $scope.test = function(){
      $window.console.log("HIHI");
    }

  }]
);