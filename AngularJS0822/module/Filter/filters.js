(function () {
    angular.module('app')
    .filter('cartsOrderBy', function ($filter) {
        return function (model, result) {
            return $filter('orderBy')(model, result);
        }
    })
    .filter('cartsSearch', function ($filter) {
        return function (model, keyword, strict) {
            return $filter('filter')(model, keyword, strict);
        }
    })
})();