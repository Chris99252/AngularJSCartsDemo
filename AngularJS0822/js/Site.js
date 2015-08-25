(function () {
    angular.module('app', ['ngCookies'])
    .config(['$controllerProvider', '$cookiesProvider', appConfig])
    .run(['$rootScope', 'version', appRunConfig]);
    

    function appConfig($controllerProvider, $cookiesProvider) {
        //$controllerProvider.allowGlobals();
        $cookiesProvider.defaults.path = '/';
    };

    function appRunConfig($rootScope, version) {
        // 將 version(value服務) 注入到  app.run() 並寫入全域的 $rootScope 之中 
        $rootScope.version = version;
    };

})();