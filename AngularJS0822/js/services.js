// service 服務：key & fn() （物件） -> 一個值，採用建構式寫法
// 餐廳服務：S店員 - 歡迎光臨！！ 小心慢走！！ 上菜囉！！

(function () {
    angular.module('app')
    .service('taiwan', [function () {
        this.peopleNum = 2300;
    }]);
})();