todo.service('todoCrud', function(){
  
  var sampleItem = { 
      text: "Get groceries from the store",
      dueDate: new Date(),
      completed: false 
    }

  var obj = {};
  obj.items = [ sampleItem ];

  obj.test = function(){
    console.log("HIHI");
    alert("Hello");
  }

  obj.addItem = function(){
    var newItem = {
      text: $scope.text,
      dueDate: $scope.dueDate,
    }
    todoCrud.items.push( newItem );
  }

  obj.create = function(){ };
  obj.index = function(){ };
  obj.destroy = function( id ){ };

  return obj;

})