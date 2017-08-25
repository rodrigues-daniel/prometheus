angular.module('controle').factory('OrdemResource', function($resource){
    var resource = $resource('rest/ordems/:OrdemId',{OrdemId:'@id'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});