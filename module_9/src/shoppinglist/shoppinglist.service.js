(function () {
'use strict';

angular.module('ShoppingList')
.service('ShoppingListService', ShoppingListService);


ShoppingListService.$inject = ['$q', '$timeout', '$http']
function ShoppingListService($q, $timeout, $http) {
  var service = this;

  service.getAllCategories = function() {
      return $http({
          method: "GET",
          url: "https://coursera-jhu-default-rtdb.firebaseio.com/categories.json"
      }).then(function (resp) {
          console.log("service.getAllCategories");
          console.log(resp.data);
          
          return resp.data;
      });
  };

  service.getItemsForCategory = function(categoryShortName) {
      return $http({
          method: "GET",
          url: "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/" + categoryShortName + ".json"
      }).then(function (resp) {
          console.log("service.getItemsForCategory");
          console.log(resp.data.menu_items);

          return resp.data.menu_items;
      });
  };
}

})();
