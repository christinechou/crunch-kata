angular.module('shoji-catalog.services', [])

.factory('Data', function($http, $location) {

  var getAll = function() {
    return $http({
      method: 'GET',
      url: 'api/data'
    })
    .then(function(resp) {
      return resp.data;
    })
  };
  return {
    getAll: getAll,
  };

})
