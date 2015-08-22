function MainCtrl($scope) {
    // GlobalModel

    //$scope.PName = "T-shirt";
    //$scope.Qty = 1;
    //$scope.Price = 100;

    // ViewModel
    var vm = this;
    vm.PName = "T-Shrit";
    vm.Qty = 1;
    vm.Price = 100;

    // 10 件以上自動打九折的商業邏輯
    vm.subTotal = function () {
        var total = vm.Qty * vm.Price;
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

    vm.IsDebug = false;

    vm.Debug = function (isDebug) {
        vm.IsDebug = true;
        if (!isDebug) {
            vm.IsDebug = false;
        }
    };


}