angular.module('taskApp')
.service('taskService', function() {
   var tasks = [
        {text: 'Get the laundry', assigned: 'Jill'},
        {text: 'Do the shopping', assigned: 'Bob'},
        {text: 'Pick up the kids', assigned: 'Randy'},
        {text: 'Go to the library', assigned: 'Bill'},
        {text: 'Make dinner', assigned: 'Tom'},
        {text: 'Go to the PTA meeting', assigned: 'Nancy'}
   ];

this.readTask = function () {
    return tasks;
};

this.createTask = function(text, assigned) {
    tasks.push({text: text, assigned: assigned});
    };

    this.deleteTask = function(index) {
        tasks.splice(index, 1);
    };
});