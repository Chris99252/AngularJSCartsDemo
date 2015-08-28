// factory 服務：key & fn() （物件） -> return 值，閉包寫法

//F員工（factory）服務領班，覺得只說歡迎光臨，不是很有禮貌，規定員工要加個尊稱，比如說『客人歡迎光臨』，『客人小心慢走』
//angular.module('restaurant')
//.factory('restaurantService', [function () {
//    var guest = '客人';
//    return {
//        welcome: guest + '歡迎光臨！',
//        beCareful: guest + '小心慢走！',
//        yourMeal: guest + '上菜囉！'
//    }
//};
//}]);

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