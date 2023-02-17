(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['$scope', 'menuCategories', ];
function SignUpController($scope, menuCategories) {
    console.log("lskjflasdjflkj")
    // $scope.signUp = {};
    const reg = this;

    console.log('$scope', $scope);

    // var reg = this;
    signUpCtrl.newsletterForm = {};
    // reg.menuCategories = menuCategories;
    // console.log(reg.menuCategories);
//     console.log(menuItems);
//   var $ctrl = this;
//   $ctrl.menuItems = menuItems;
}

})();
