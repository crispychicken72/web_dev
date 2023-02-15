(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Premade list page
  .state('mainList', {
    url: '/main-list',
    templateUrl: 'src/menuapp/templates/main-shoppinglist.template.html',
    controller: 'MainShoppingListController as mainList',
    resolve: {
      items: ['ShoppingListService', function (ShoppingListService) {
        return ShoppingListService.getAllCategories();
      }]
    }
  })

  // Item detail
  .state('mainList.itemDetail', {
    url: '/item-detail/{itemId}',
    templateUrl: 'src/menuapp/templates/item-detail.template.html',
    controller: 'ItemDetailController as itemDetail',
    params: {
      itemId: null
    },
    resolve: {
      subitems: ['$stateParams', 'ShoppingListService', function ($stateParams, ShoppingListService) {
        console.log('HERE');
        console.log($stateParams.itemId);
        return ShoppingListService.getItemsForCategory($stateParams.itemId);
      }]
    }
  });

}

})();
