// filter 過濾器：服務的一種,用來過濾、篩選、轉換資料之用

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