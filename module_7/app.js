(function() {

    'use strict';
    
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
    .filter('computeTotalPrice', computeTotalPriceFilter);
    

    ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService'];
    function ToBuyController($scope, ShoppingListCheckOffService) {
        var vm = this;
        vm.itemsToBuy = ShoppingListCheckOffService.itemsToBuy;
        console.log(vm.itemsToBuy)

        vm.boughtItem = function(index) {
            console.log("SDLFKJSDLKFJSDLKFJ");
            ShoppingListCheckOffService.MoveToBuyBought(index);
        };
    }

    AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];
    function AlreadyBoughtController($scope, ShoppingListCheckOffService) {
        var vm = this;
        vm.itemsBought = ShoppingListCheckOffService.itemsBought;
    }

    function ShoppingListCheckOffService() {
        var vm = this;

        vm.itemsBought = [];
        vm.itemsToBuy = [
            { name: "cookies", quantity: 6, pricePerItem: 2 },
            { name: "bananas", quantity: 5, pricePerItem: 1 },
            { name: "milk", quantity: 1, pricePerItem: 4 },
            { name: "soap bars", quantity: 3, pricePerItem: 1 },
            { name: "chips", quantity: 3, pricePerItem: 2 }
        ];

        vm.MoveToBuyBought = function(index) {
            var itemToMove = vm.itemsToBuy.splice(index, 1);
            vm.itemsBought.push(itemToMove[0]);
        }

        vm.SetItemsToBuy = function(initItemsToBuy) {
            vm.itemsToBuy = initItemsToBuy;
        }

        vm.SetItemsBought = function(initItemsBought) {
            vm.itemsBought = initItemsBought;
        }
    }

    function computeTotalPriceFilter() {
        return function(item) {
            return "$$$" + item.pricePerItem * item.quantity;
        }
    }
    
    })();