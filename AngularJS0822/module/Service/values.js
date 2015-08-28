// value 服務：key & value （物件） -> 最單純物件一個值。

//V員工（value）新進人員第一天上班，你只要會跟客人說『歡迎光臨！』就好了。
//angular.module('restaurant')
//.value('restaurantService', '歡迎光臨！');

(function () {
    angular.module('app')
    .value('version', '1.0.0');
})();