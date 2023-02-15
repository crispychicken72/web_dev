(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);

// Version with resolving to 1 item based on $stateParams in route config
ItemDetailController.$inject = ['$stateParams', '$scope', 'subitems'];
function ItemDetailController($stateParams, $scope, subitems) {
  var itemDetail = this;

  $scope.subitems = subitems;
}

})();
