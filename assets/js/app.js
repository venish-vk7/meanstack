var app = angular.module('taskManagent',[]);
app.controller('dashboardController',function($scope){
   $scope.data=[
       {
        "no":1,
        "name":'task 1',
        "date":'10/12/2017',
        "status":"completed"
       },
       {
        "no":2,
        "name":'task 3',
        "date":'13/12/2017',
        "status":"In Progress"
       },
       {
        "no":3,
        "name":'task 3',
        "date":'19/12/2017',
        "status":"Not yet start"
       }
   ]
});