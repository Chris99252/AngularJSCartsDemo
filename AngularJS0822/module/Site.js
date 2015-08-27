// 主要的 controller 程式碼的執行起點

(function () {
    // module : 建立模組、載入相依模組
    // config : 模組初始化 (設定提供者參數)
    // run : 模組初始化 (設定服務實體)
    angular.module('app', ['ngCookies', 'angularUtils.directives.dirPagination'])
    .config(['$controllerProvider', '$cookiesProvider', 'time2Provider', appConfig])
    .run(['$rootScope', 'version', appRunConfig]);
    
    // configFn : 設定提供者參數
    function appConfig($controllerProvider, $cookiesProvider, time2Provider, cartFilterProvider) {
        // $controllerProvider.allowGlobals();

        // 將 cookies 服務 注入到 app.config() 並設定cookie存取的路徑
        $cookiesProvider.defaults.path = '/';

        // 將 time2 服務 注入到 app.config() 並設定預設輸出長度
        time2Provider.defaults.length = 3;
    };

    // runFn : 設定服務實體
    function appRunConfig($rootScope, version) {
        // 將 version(value服務) 注入到  app.run() 並寫入全域的 $rootScope 之中 
        $rootScope.version = version;
    };

})();