function MainCtrl ($scope, $filter) {

	// $scope.PName = 'T-Shrit';
	// $scope.Qty = 1;
	// $scope.Price = 299;

	var vm = this; // View Model 專為view設定的model
	vm.PName = 'T-Shrit';
	vm.Qty = 1;
	vm.Price = 1000;

	vm.subTotal = function(Qty, Price){
		var subTotal = Qty * Price;

		if (Qty >= 10) {
			subTotal = subTotal * 0.9;
		};
		return subTotal;
	};

	vm.carts = [];
	vm.carts.push({
		PName: "T-Shrit",
		Price: 199,
		Qty: 3
	});
	vm.carts.push({
		PName: "Shoes",
		Price: 1800,
		Qty: 2
	});
	vm.carts.push({
		PName: "Eye glasses",
		Price: 1000,
		Qty: 5
	});

	vm.add = function(){
		vm.carts.push({
			PName: vm.PName,
			Price: vm.Price,
			Qty: vm.Qty
		});
	};

	vm.sum = function(){
		var total = 0;
		angular.forEach(vm.carts, function(item){
			total += vm.subTotal(item.Qty, item.Price);
		});
		return total;
	};

	vm.del = function(model){
		var idx = vm.carts.indexOf(model);
		vm.carts.splice(idx,1);
	};

	vm.changeQty = function(model, num){

	    model.Qty = model.Qty + num;

	    if (model.Qty > 10) 
	    {
			model.Qty = model.Qty - num;
	    }

		if (model.Qty <= 0) {
			if (confirm('您確定要刪除這筆數量為0的資料嗎？'))
			{
            	vm.del(model);
			}
			else
			{
            	model.Qty = model.Qty - num;
			}
		} 
	};

	vm.delselect = function(){
		var newarray = [];
		angular.forEach(vm.carts, function(item){
			if (!item.IsDelete) {
				newarray.push(item);
			}
		});

		vm.carts = newarray;
	};

	vm.CheckAll = function(){
		angular.forEach(vm.carts, function(item){
			item.IsDelete = vm.IsCheckAll
		});
	}

	vm.IsDebug = false;

	vm.cartsOrderBy = 'Price';
}