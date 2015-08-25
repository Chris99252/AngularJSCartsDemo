// factory 服務：key & fn() （物件） -> return 值，閉包寫法
// 餐廳服務：F店員 - 客人 歡迎光臨！！ 客人 小心慢走！！ 客人 上菜囉！！

(function () {
    angular.module('app')
    .factory('tianjin', [function () {
          return {
              bobSize: "10km",
          };
      }])
    .factory('counter', [function () {
        var initalCounter = 1;
        return {
            getCount: function(){
                return initalCounter++;
            }
        };
    }]);
})();