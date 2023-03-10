(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['$scope', 'allItems', 'MenuService'];
function SignUpController($scope, allItems, MenuService) {
  var signUp = this;
  var shortNameList = [];
  var fields = Object.keys(allItems);
  signUp.menuItemToTitleDescr = {};

  $scope.hasSubmitted = false;

  for (var i = 0; i < fields.length; i++) {
    var shortName = fields[i];
    var subMenuItems = allItems[shortName].menu_items;
    for (var j = 0; j < subMenuItems.length; j++) {
      shortNameList.push(subMenuItems[j].short_name);
      signUp.menuItemToTitleDescr[subMenuItems[j].short_name] = {
        "name": subMenuItems[j].name,
        "description": subMenuItems[j].description
      };
    }
  }

  signUp.shortNameSet = new Set(shortNameList);

  $scope.myValidation = function(value) {
    var isValid = signUp.shortNameSet.has(value.$viewValue);
    value.$setValidity('favMenuNum', isValid);

    if (isValid) {
      $scope.stored.user.favMenuNumName = signUp.menuItemToTitleDescr[value.$viewValue].name;
      $scope.stored.user.favMenuNumDescr = signUp.menuItemToTitleDescr[value.$viewValue].description;
    }
  }

  $scope.submit = function() {
    console.log($scope.stored.user);
    MenuService.savePreference($scope.stored.user);
    $scope.hasSubmitted = true;
  }

}


})();
