(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuController', MenuController);


MenuController.$inject = ['MenuDataService', 'categoryList'];
function MenuController(MenuDataService, categoryList) {
  var menuContr = this;
  menuContr.categoryList = categoryList;
}

})();
