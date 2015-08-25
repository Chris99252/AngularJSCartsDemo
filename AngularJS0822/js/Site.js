(function () {
    angular.module('app', ['ngCookies'])
    .config(['$controllerProvider', '$cookiesProvider', function ($controllerProvider, $cookiesProvider) {
        //$controllerProvider.allowGlobals();
        $cookiesProvider.defaults.path = '/';
    }])
})()