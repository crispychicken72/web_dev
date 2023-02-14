(function() {

'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownAppController', NarrowItDownAppController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItems);

function FoundItems() {
    var ddo = {
        templateUrl: 'module_8/foundItems.html',
        scope: {
            items: '<',
            onRemove: '&'
        },
        controller: FoundItemsDirectiveController,
        controllerAs: 'list',
        bindToController: true
    }

    return ddo;
}

function FoundItemsDirectiveController() {
    var narrowDirContr = this;
}

NarrowItDownAppController.$inject = ['$scope', 'MenuSearchService'];
function NarrowItDownAppController($scope, MenuSearchService) {
    var vm = this;

    vm.word = "";
    vm.found = MenuSearchService.found;

    vm.find = function() {
        MenuSearchService.getMatchedMenuItems(vm.word, vm);
    };

    vm.removeItem = function (itemIndex) {
        vm.found.splice(itemIndex, 1);
    };

}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
    var vm = this;
    vm.found = [];

    vm.getMatchedMenuItems = function(searchTerm, context) {
        $http({
            method: "GET",
            url: "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json"
        }).then(function (resp) {

            if (searchTerm == "") {
                return;
            }

            var result = resp.data;
            var itemList = [];
            
            var objKeyArr = Object.keys(result);
            for (var i = 0; i < objKeyArr.length; i++) {
                var field = objKeyArr[i];
                var innerObj = result[field]

                for (var j = 0; j < innerObj.menu_items.length; j++) {
                    if (innerObj.menu_items[j].description.includes(searchTerm)) {
                        itemList.push(innerObj.menu_items[j]);
                    }
                }
            }

            vm.found = itemList;
            context.found = itemList;
        });

    };


}
    
})();