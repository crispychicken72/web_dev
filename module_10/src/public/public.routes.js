(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      abstract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.menu2', {
      url: '/menu2',
      templateUrl: 'src/public/menu2/menu2.html',
      controller: 'MenuController2',
      controllerAs: 'menuCtrl2',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    })
    .state('public.signup', {
      url: '/sign-up',
      templateUrl: 'src/public/sign-up/sign-up.html',
      controller: 'SignUpController',
      controllerAs: 'signUpCtrl',
      // resolve: {
      //   menuCategories: ['MenuService', function (MenuService) {
      //     return MenuService.getCategories();
      //   }]
      // }
      // controller: 'SignUpController',
      // controllerAs: 'signupCtrl'
    });
}
})();