// service 服務：key & fn() （物件） -> 一個值，採用建構式寫法

//S員工（service）已經上班一陣子了，不能只會說『歡迎光臨！』，還要會說『小心慢走！』，『上菜囉！』
//angular.module('restaurant')
//.service('restaurantService', [function () {
//    this.welcome = '歡迎光臨！';
//    this.beCareful = '小心慢走！';
//    this.yourMeal = '上菜囉！';
//}]);

(function () {
    angular.module('app')
    .service('taiwan', [function () {
        this.peopleNum = 2300;
    }]);
})();