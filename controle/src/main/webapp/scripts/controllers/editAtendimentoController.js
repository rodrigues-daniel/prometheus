

angular.module('controle').controller('EditAtendimentoController', function($scope, $routeParams, $location, flash, AtendimentoResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.atendimento = new AtendimentoResource(self.original);
        };
        var errorCallback = function() {
            flash.setMessage({'type': 'error', 'text': 'The atendimento could not be found.'});
            $location.path("/Atendimentos");
        };
        AtendimentoResource.get({AtendimentoId:$routeParams.AtendimentoId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.atendimento);
    };

    $scope.save = function() {
        var successCallback = function(){
            flash.setMessage({'type':'success','text':'The atendimento was updated successfully.'}, true);
            $scope.get();
        };
        var errorCallback = function(response) {
            if(response && response.data && response.data.message) {
                flash.setMessage({'type': 'error', 'text': response.data.message}, true);
            } else {
                flash.setMessage({'type': 'error', 'text': 'Something broke. Retry, or cancel and start afresh.'}, true);
            }
        };
        $scope.atendimento.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/Atendimentos");
    };

    $scope.remove = function() {
        var successCallback = function() {
            flash.setMessage({'type': 'error', 'text': 'The atendimento was deleted.'});
            $location.path("/Atendimentos");
        };
        var errorCallback = function(response) {
            if(response && response.data && response.data.message) {
                flash.setMessage({'type': 'error', 'text': response.data.message}, true);
            } else {
                flash.setMessage({'type': 'error', 'text': 'Something broke. Retry, or cancel and start afresh.'}, true);
            }
        }; 
        $scope.atendimento.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});