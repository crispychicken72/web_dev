(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$q', '$timeout', '$http']
function MenuDataService($q, $timeout, $http) {
  var service = this;

  service.getAllCategories = function() {
      return $http({
          method: "GET",
          url: "https://coursera-jhu-default-rtdb.firebaseio.com/categories.json"
      }).then(function (resp) {
          return resp.data;
      });
  };

  service.getItemsForCategory = function(categoryShortName) {
      return $http({
          method: "GET",
          url: "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/" + categoryShortName + ".json"
      }).then(function (resp) {
          return resp.data.menu_items;
      });
  };
}

})();
