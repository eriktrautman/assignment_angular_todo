todo.controller("TodoCtrl",
  ['$scope', '$window', 'todoCrud', function( $scope, $window, todoCrud ){


    // Set up our initial items
    var item1 = {
      text: "Foo Item",
      dueDate: new Date(),
      completed: false,
    }

    var item2 = {
      text: "Bar Item",
      dueDate: new Date(),
      completed: true,
    }


    // Initialize variables
    $scope.items = [ item1, item2 ];
    $scope.hideCompleted = false;


    // Add an item to the collection
    $scope.addItem = function(){

      $window.console.log("Clicked name:" + $scope.item.text + " and due-date of " + $scope.item.dueDate + " and completed of " + $scope.item.completed );

      // Use the model values attached to $scope to
      //   construct the new item
      var newItem = {
        text: $scope.item.text,
        dueDate: $scope.item.dueDate,
        completed: $scope.item.completed || false,
      }

      // Add the item to our collection
      $scope.items.push( newItem );

      // Reset fields in our form
      $scope.item.text = undefined;
      $scope.item.dueDate = undefined;

    }


    // Remove an item from our collection
    //   by finding and splicing it out
    $scope.removeItem = function( item ){
      console.log( "Destroying item: " + item );
      var index = $scope.items.indexOf( item );
      $scope.items.splice( index, 1 );
    }


    // Change whether we will view all items or
    //   only the uncompleted ones
    $scope.toggleCompleted = function(){
      $scope.hideCompleted = !$scope.hideCompleted;
    }


    // Remove all completed items from our collection
    $scope.destroyCompleted = function(){
      var newItems = []
      $scope.items.forEach(function(item){
        if( !item.completed ){
          newItems.push( item )
        }
      })
      $scope.items = newItems;
    }


    // Just a helper to test whether things are working
    $scope.test = function(){
      $window.console.log("HIHI");
    }

  }]
);