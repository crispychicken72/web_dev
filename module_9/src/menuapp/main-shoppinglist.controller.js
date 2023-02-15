(function () {
'use strict';

angular.module('MenuApp')
.controller('MainShoppingListController', MainShoppingListController);


MainShoppingListController.$inject = ['MenuDataService', 'categoryList'];
function MainShoppingListController(MenuDataService, categoryList) {
  console.log("Here");
  var catListContr = this;
  catListContr.categoryList = categoryList;
}

})();
