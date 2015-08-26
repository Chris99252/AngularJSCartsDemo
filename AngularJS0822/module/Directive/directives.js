(function () {
    angular.module('app')
    .directive('addCart', [function () {
        return {
            restrict: 'AE',
            templateUrl: '/module/Directive/add-cart.html'
        };
    }]);
})();