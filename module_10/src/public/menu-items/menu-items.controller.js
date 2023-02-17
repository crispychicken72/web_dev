(function () {
"use strict";

angular.module('public')
.controller('MenuItemsController', MenuItemsController);

MenuItemsController.$inject = ['menuItems'];
function MenuItemsController(menuItems) {
    console.log("lskjflasdjflkj")
  var $ctrl = this;
  $ctrl.menuItems = menuItems;
}

})();
