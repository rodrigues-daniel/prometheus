
angular.module('controle').controller('NewAtendimentoController', function ($scope, $location, locationParser, flash, AtendimentoResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.atendimento = $scope.atendimento || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            flash.setMessage({'type':'success','text':'The atendimento was created successfully.'});
            $location.path('/Atendimentos');
        };
        var errorCallback = function(response) {
            if(response && response.data) {
                flash.setMessage({'type': 'error', 'text': response.data.message || response.data}, true);
            } else {
                flash.setMessage({'type': 'error', 'text': 'Something broke. Retry, or cancel and start afresh.'}, true);
            }
        };
        AtendimentoResource.save($scope.atendimento, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Atendimentos");
    };
});