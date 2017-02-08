/**
 * Created by Sergej on 03.09.2016.
 */
angular.module('boolean-algebra', [
    'ngRoute',
    'pascalprecht.translate',
    'ngSanitize'
]).config(function ($routeProvider, $locationProvider) {
    var href = angular.element('head base').attr('href');
    $routeProvider.when('/', {
        templateUrl: href + 'view/boolalg.html',
        controller: 'BACtrl'
    });
    $routeProvider.otherwise({
        redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
}).config(['$translateProvider', function ($translateProvider) {
    //translation
    $translateProvider.useStaticFilesLoader({
        prefix: 'translations/lang-',
        suffix: '.json'
    });
    // Enable escaping of HTML
    $translateProvider.useSanitizeValueStrategy('escape');

    $translateProvider.preferredLanguage('de_DE');
}]);

