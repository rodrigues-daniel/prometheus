
angular.module('controle').controller('NewOrdemController', function ($scope, $location, locationParser, flash, OrdemResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.ordem = $scope.ordem || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            flash.setMessage({'type':'success','text':'The ordem was created successfully.'});
            $location.path('/Ordems');
        };
        var errorCallback = function(response) {
            if(response && response.data) {
                flash.setMessage({'type': 'error', 'text': response.data.message || response.data}, true);
            } else {
                flash.setMessage({'type': 'error', 'text': 'Something broke. Retry, or cancel and start afresh.'}, true);
            }
        };
        OrdemResource.save($scope.ordem, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Ordems");
    };
});