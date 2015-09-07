todo.controller("TodoCtrl",
  ['$scope', '$window', 'todoCrud', function( $scope, $window, todoCrud ){

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


    $scope.items = [ item1, item2 ];
    $scope.tester = "e";
    $scope.hideCompleted = false;


    $scope.addItem = function(){

      $window.console.log("Clicked name:" + $scope.item.text + " and due-date of " + $scope.item.dueDate + " and completed of " + $scope.item.completed );

      var newItem = {
        text: $scope.item.text,
        dueDate: $scope.item.dueDate,
        completed: $scope.item.completed || false,
      }

      $scope.items.push( newItem );
      $scope.item.text = undefined;
      $scope.item.dueDate = undefined;
    }


    $scope.removeItem = function( item ){
      var index = $scope.items.indexOf( item );
      $scope.items.splice( index, 1 );
    }


    $scope.toggleCompleted = function(){
      console.log("Toggling completion")
      $scope.hideCompleted = !$scope.hideCompleted;
      console.log("hideCompleted: " + $scope.hideCompleted)
    }


    $scope.destroyCompleted = function(){
      var newItems = []
      $scope.items.forEach(function(item){
        if( !item.completed ){
          newItems.push( item )
        }
      })
      $scope.items = newItems;
    }
    // $scope.toggleCompleted = function( item ){
    //   $window.console.log(item);
    //   $window.console.log( "toggling completed: " + item.completed );
    //   item.completed = false;
    //   $window.console.log( "toggled completed: " + item.completed );
    // }


    $scope.alert = alert.bind($window);


    $scope.test = function(){
      // $scope.tester = "FOO";
      $window.console.log("HIHI");
      $window.alert("Hello");
    }

  }]
);