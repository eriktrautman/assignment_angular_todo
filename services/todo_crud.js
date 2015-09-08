todo.service('todoCrud', function(){
  

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

    var items = [ item1, item2 ];
    var hideCompleted = false


    var getItems = function(){
      return items;
    }


    var addItem = function( item ){

      // Use the model values attached to $scope to
      //   construct the new item
      var newItem = {
        text: item.text,
        dueDate: item.dueDate,
        completed: item.completed || false,
      }

      // Add the item to our collection
      items.push( newItem );

      // Reset fields in our form
      item.text = undefined;
      item.dueDate = undefined;

      // Send back the newly reset item
      return item;
    }


    // Remove an Item from the collection
    var removeItem = function( item ){
      var index = items.indexOf( item );
      items.splice( index, 1 );
    }


    // Change whether to show completed 
    //   To-Do items or not
    var toggleCompleted = function(){
      hideCompleted = !hideCompleted;
    }


    // This function MUST be destructive to
    //   the ORIGINAL `items` array, not 
    //   creating a new one and returning it.
    // If we did that, the $digest loop would
    //   lose track of it.
    var destroyCompleted = function(){
      items.forEach(function(item){
        if( item.completed ){
          removeItem( item );
        }
      })
    }



  // Use a revealing module
  return {
    getItems:         getItems,
    hideCompleted:    hideCompleted,
    addItem:          addItem,
    removeItem:       removeItem,
    toggleCompleted:  toggleCompleted,
    destroyCompleted: destroyCompleted,
  };

})