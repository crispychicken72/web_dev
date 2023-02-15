(function () {
'use strict';

angular.module('MenuApp')
.controller('MainShoppingListController', MainShoppingListController);


MainShoppingListController.$inject = ['MenuDataService', 'items'];
function MainShoppingListController(MenuDataService, items) {
  console.log("Here");
  var mainList = this;
  mainList.items = items;
}

})();
