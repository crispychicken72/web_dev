(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

// Version with resolving to 1 item based on $stateParams in route config
ItemsController.$inject = ['$stateParams', '$scope', 'subitems'];
function ItemsController($stateParams, $scope, subitems) {
  var itemContr = this;

  $scope.subitems = subitems;
}

})();
