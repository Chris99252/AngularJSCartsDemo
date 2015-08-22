function MainCtrl($scope) {
    // GlobalModel

    //$scope.PName = "T-shirt";
    //$scope.Qty = 1;
    //$scope.Price = 100;

    // ViewModel
    var vm = this;
    vm.PName = "T-Shrit";
    vm.Price = 100;
    vm.Qty = 1;

    // 10 件以上自動打九折的商業邏輯
    vm.subTotal = function (price, qty) {
        var total = price * qty;
        if (vm.Qty >= 10) {
            total = total * 9;
        }
        return total;
    };

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

    vm.addToCarts = function () {
        vm.carts.push({
            PName: vm.PName,
            Price: vm.Price,
            Qty: vm.Qty
        });
    };

    vm.isDebug = false;

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


}