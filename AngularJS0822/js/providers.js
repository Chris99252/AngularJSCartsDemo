// provider 服務：key & fn() （物件） -> 最彈性的寫法（value, service, factory 都是由 provider提供物件）
// 餐廳服務：P店員 - 頭家 歡迎光臨！！ 頭家 小心慢走！！ 頭家 上菜囉！！

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