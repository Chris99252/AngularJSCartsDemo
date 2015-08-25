(function () {
    angular.module('app')
    .controller('MainCtrl', ['$cookies', 'version', 'time', 'taiwan', 'tianjin', MainCtrl]);
    function MainCtrl($cookies, version, time, taiwan, tianjin) {

        // ngCookie Test
        $cookies.put('angularJSngCookie', 1);
        
        // GlobalModel

        //$scope.PName = "T-shirt";
        //$scope.Qty = 1;
        //$scope.Price = 100;

        // ViewModel

        var vm = this;
        vm.PName = "T-Shrit";
        vm.Price = 100;
        vm.Qty = 1;
        vm.isDebug = false;
        vm.isCheckAll = false;
        vm.isDeleteSelect = false;
        vm.cartsOrderBy = 'Price';
        vm.carts = [];

        // 將 version(value服務) 注入到 MainCtrl  vm.version

        vm.version = version + ".main";

        // 將 time(provider服務) 注入到 MainCtrl  vm.nowTime

        vm.nowTime = time.getTime();

        vm.peopleNum = taiwan.peopleNum;

        vm.bobSize = tianjin.bobSize;

        // 初始 carts 陣列

        vm.carts.push({
            PName: 'T-Shirt',
            Price: 199,
            Qty: 3
        });
        vm.carts.push({
            PName: 'Shoes',
            Price: 1800,
            Qty: 2
        });
        vm.carts.push({
            PName: 'Eye glasses',
            Price: 1000,
            Qty: 5
        });

        // 10 件以上自動打九折的商業邏輯
        vm.subTotal = function (price, qty) {
            var total = price * qty;
            if (vm.Qty >= 10) {
                total = total * 9;
            }
            return total;
        };

        vm.addToCarts = function () {
            vm.carts.push({
                PName: vm.PName,
                Price: vm.Price,
                Qty: vm.Qty
            });
        };

        vm.deBug = function (result) {
            vm.isDebug = true;
            if (!result) {
                vm.isDebug = false;
            }
        };

        vm.sum = function () {
            var total = 0;
            angular.forEach(vm.carts, function (item) {
                total += vm.subTotal(item.Qty, item.Price);
            });
            return total;
        };

        vm.delete = function (item) {
            var index = vm.carts.indexOf(item);
            vm.carts.splice(index, 1);
            if (!vm.carts.length) {
                vm.isDeleteSelect = false;
            }
        };

        vm.changeQty = function (item, num) {

            item.Qty = item.Qty + num;

            if (item.Qty > 10) {
                item.Qty = item.Qty - num;
            }

            if (item.Qty <= 0) {
                if (confirm('您確定要刪除這筆數量為0的資料嗎？')) {
                    vm.delete(item);
                }
                else {
                    item.Qty = item.Qty - num;
                }
            }
        };

        vm.delSelect = function () {
            var newarray = [];
            angular.forEach(vm.carts, function (item) {
                if (!item.isDelete) {
                    newarray.push(item);
                    vm.isCheckAll = false;
                }
            });

            vm.isDeleteSelect = false;

            vm.carts = newarray;
        };

        vm.checkAll = function () {
            angular.forEach(vm.carts, function (item) {
                item.isDelete = vm.isCheckAll;
            });
            vm.isDeleteSelect = true;
            if (!vm.isCheckAll) {
                vm.isDeleteSelect = false;
            }
        };

        vm.checkNoDelete = function () {
            vm.isDeleteSelect = false;
            var result = 0;
            angular.forEach(vm.carts, function (item) {
                if (item.isDelete) {
                    vm.isDeleteSelect = true;
                }
                else {
                    result = result + 1;
                }
            });
            if (result == vm.carts.length) {
                vm.isCheckAll = false;
            }
            if (!result) {
                vm.isCheckAll = true;
            }
        };
    }
})();