angular.module('shoji-catalog', [
  'shoji-catalog.services',
  'shoji-catalog.data',
  'ngRoute'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'app/surveyData/data.html',
    controller: 'DataCtrl'
  })

    // We add $httpInterceptor into the array
    // of interceptors
  // $httpProvider.interceptors.push('AttachTokens');
})
