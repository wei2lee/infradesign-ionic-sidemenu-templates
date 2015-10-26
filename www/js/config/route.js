(function () {
    var _module = angular.module('route', []);
    _module.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/menu.html',
            controller: 'AppCtrl'
        })

        .state('app.item', {
                url: '/item',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/content/item.html',
                        controller: 'ItemCtrl'
                    }
                }
            })
            // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/item');
    });


}());