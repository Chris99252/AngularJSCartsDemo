// provider 服務：key & fn() （物件） -> 最彈性的寫法（value, service, factory 都是由 provider提供物件）

//P員工（provider）服務經理，覺得我們服務要更到位，針對不同身份的人來用餐，尊稱也要合乎對方的身份，如果有一群董事長們來用餐，那就需要做一些調整了，比如說『董事長歡迎光臨』
//angular.module('restaurant')
//.provider('restaurantService', [function () {
//    var guest = '客人';
//    this.setGuest = function (s) {
//        guest = s;
//    }
//    this.$get = [function () {
//        return {
//            welcome: guest + '歡迎光臨！',
//            beCareful: guest + '小心慢走！',
//            yourMeal: guest + '上菜囉！'
//        };
//    }];
//}])
//angular.module('restaurant', [])
//.config('restaurantServiceProvider',
//function appConfig(restaurantServiceProvider) {
//    restaurantServiceProvider.setGuest('董事長');
//});

(function () {
    angular.module('app')
    .provider('time', [function () {


        this.$get = [function () {
            return {
                getTime: function () {
                    return new Date();
                }
            };
        }];
    }])
    .provider('time2', [function () {
        var vm = this;
        
        vm.defaults = {
            'length': 100
        };

        this.$get = [function () {
            return {
                getTime: function () {
                    return (new Date()).toString().substr(0, vm.defaults.length);
                }
            };
        }];
    }])
})();