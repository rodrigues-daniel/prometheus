

angular.module('controle').controller('EditOrdemController', function($scope, $routeParams, $location, flash, OrdemResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.ordem = new OrdemResource(self.original);
        };
        var errorCallback = function() {
            flash.setMessage({'type': 'error', 'text': 'The ordem could not be found.'});
            $location.path("/Ordems");
        };
        OrdemResource.get({OrdemId:$routeParams.OrdemId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.ordem);
    };

    $scope.save = function() {
        var successCallback = function(){
            flash.setMessage({'type':'success','text':'The ordem was updated successfully.'}, true);
            $scope.get();
        };
        var errorCallback = function(response) {
            if(response && response.data && response.data.message) {
                flash.setMessage({'type': 'error', 'text': response.data.message}, true);
            } else {
                flash.setMessage({'type': 'error', 'text': 'Something broke. Retry, or cancel and start afresh.'}, true);
            }
        };
        $scope.ordem.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/Ordems");
    };

    $scope.remove = function() {
        var successCallback = function() {
            flash.setMessage({'type': 'error', 'text': 'The ordem was deleted.'});
            $location.path("/Ordems");
        };
        var errorCallback = function(response) {
            if(response && response.data && response.data.message) {
                flash.setMessage({'type': 'error', 'text': response.data.message}, true);
            } else {
                flash.setMessage({'type': 'error', 'text': 'Something broke. Retry, or cancel and start afresh.'}, true);
            }
        }; 
        $scope.ordem.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});