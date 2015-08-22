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
    }
}