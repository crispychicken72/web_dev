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
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/main-shoppinglist.template.html',
    controller: 'MainShoppingListController as catListContr',
    resolve: {
      categoryList: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  // Item detail
  .state('categories.items', {
    url: '/categories/{categoryId}',
    templateUrl: 'src/menuapp/templates/item-detail.template.html',
    controller: 'ItemDetailController as itemDetail',
    params: {
      categoryId: null
    },
    resolve: {
      subitems: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
        console.log('HERE');
        console.log($stateParams.categoryId);
        return MenuDataService.getItemsForCategory($stateParams.categoryId);
      }]
    }
  });

}

})();
