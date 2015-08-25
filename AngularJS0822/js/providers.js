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
    }]);
})();