(function () {
"use strict";

angular.module('public')
.controller('MenuController2', MenuController2);

MenuController2.$inject = ['menuCategories'];
function MenuController2(menuCategories) {
  var $ctrl = this;
  $ctrl.menuCategories = menuCategories;
}


})();
