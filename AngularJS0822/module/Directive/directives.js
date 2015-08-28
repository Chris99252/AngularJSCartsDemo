// directive 畫面與指令：主要目的用來控制 DOM 物件的變化，次要目的則是用來修飾網頁的預設行為

(function () {
    angular.module('app')
    .directive('addCart', [function () {
        return {
            restrict: 'AE',
            templateUrl: '/module/Directive/add-cart.html'
        };
    }]);
})();