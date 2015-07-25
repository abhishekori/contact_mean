function AppCtrl($scope,$http) {

    console.log("Hello world from Controller");
var refresh = function() {
    $http.get('/contactlist').success(function (response) {

        console.log('i got the data back');
        $scope.contactlist = response;
    });
};

    refresh();
$scope.addContact = function () {

    console.log($scope.contact);

    $http.post('/contactlist',$scope.contact).success(function (respose) {

        console.log(respose);
        refresh();
    });

};
    $scope.remove = function (id) {

console.log(id);

        $http.delete('/contactlist/'+id).success(function(response)
            {
                console.log(response);
                refresh();
            });
    };

}