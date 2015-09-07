todo.filter('filterCompleted', function() {

  return function( collection, hideCompleted ) {

    console.log("HASHAS");
    
    var filteredCollection = []

    angular.forEach( collection, function( item ){
      if( hideCompleted && item.completed ){
        // do nothing -- we're filtering this out!
      } else{
        filteredCollection.push( item ); 
      }
    })

    return filteredCollection;

  };
});