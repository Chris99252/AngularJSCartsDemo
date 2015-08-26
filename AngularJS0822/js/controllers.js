// 替模組註冊服務 MainCtrl controller

(function () {
    // module : 取得模組
    // controller : 註冊服務(注入各項服務)
    angular.module('app')
    .controller('MainCtrl', ['$cookies', '$filter', 'version', 'time', 'taiwan', 'tianjin', 'counter', 'time2', MainCtrl]);
    function MainCtrl($cookies, $filter, version, time, taiwan, tianjin, counter, time2) {

        // ngCookie Test
        $cookies.put('angularJSngCookie', 1);
        
        // GlobalModel：不建議這樣寫

        //$scope.PName = "T-shirt";
        //$scope.Qty = 1;
        //$scope.Price = 100;

        // ViewModel：官方建議

        var vm = this;

        // 計數器預設值
        vm.Counter = 0;

        // 訂購單預設值
        vm.PName = "T-Shrit";
        vm.Price = 100;
        vm.Qty = 1;

        // 偵錯頁面預設關閉
        vm.isDebug = false;

        // 清單全選按鈕預設關閉
        vm.isCheckAll = false;

        // 批次刪除按鈕預設關閉
        vm.isDeleteSelect = false;

        // 初始 carts 陣列
        vm.carts = [];
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

        // 購物車清單 orderby 預設依照商品價格 ASC
        vm.carts = $filter('orderBy')(vm.carts, 'Price');

        vm.keyword = {
            PName: '',
            Price: ''
        };

        vm.strict = '';

        vm.changeOrderBy = function (result) {
            vm.carts = $filter('orderBy')(vm.carts, result);
        };

        //var cartsFilterTemp = $filter('filter')(vm.carts, vm.keyword, vm.strict);

        // 將 version(value服務) 注入到 MainCtrl  vm.version
        vm.version = version + ".main";

        // 將 time(provider服務) 注入到 MainCtrl  vm.nowTime
        vm.nowTime = time.getTime();

        // 將 taiwan(service服務) 注入到 MainCtrl  vm.peopleNum
        vm.peopleNum = taiwan.peopleNum;

        // 將 tianjin(factory服務) 注入到 MainCtrl vm.tianjin
        vm.tianjin = tianjin;

        // 將 counter(factory服務) 注入到 MainCtrl vm.Counter
        vm.addCount = function () {
            vm.Counter = counter.getCount();
        };

        // 將 time2(provider服務) 注入到 MainCtrl  vm.nowTime2
        vm.nowTime2 = time2.getTime();

        // 10 件以上自動打九折的商業邏輯
        vm.subTotal = function (price, qty) {
            var total = price * qty;
            if (vm.Qty >= 10) {
                total = total * 9;
            }
            return total;
        };

        // 將產品加入至購物車清單（carts 陣列，加入一筆資料）
        vm.addToCarts = function () {
            vm.carts.push({
                PName: vm.PName,
                Price: vm.Price,
                Qty: vm.Qty
            });
        };

        // 開啟/關閉 偵錯頁面
        vm.deBug = function (result) {
            vm.isDebug = true;
            if (!result) {
                vm.isDebug = false;
            }
        };

        // 計算購物車清單的總計金額
        vm.sum = function () {
            var total = 0;
            angular.forEach(vm.carts, function (item) {
                total += vm.subTotal(item.Qty, item.Price);
            });
            return total;
        };

        // 刪除購物車清單的一筆資料
        vm.delete = function (item) {
            var index = vm.carts.indexOf(item);
            vm.carts.splice(index, 1);
            if (!vm.carts.length) {
                vm.isDeleteSelect = false;
            }
        };

        // 更改購物車清單內的產品數量（- 到 0 刪除 / 最高 + 到 10）
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

        // 批次刪除功能（isDelete = false 留下）
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