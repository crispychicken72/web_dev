(function () {
"use strict";

angular.module('public')
.controller('MenuController2', MenuController2);

MenuController2.$inject = ['$scope', 'allItems', 'MenuService'];
function MenuController2($scope, allItems, MenuService) {
  var signUp = this;
  var shortNameList = [];
  var fields = Object.keys(allItems);
  $scope.hasSubmitted = false;

  for (var i = 0; i < fields.length; i++) {
    var shortName = fields[i];
    var subMenuItems = allItems[shortName].menu_items;
    for (var j = 0; j < subMenuItems.length; j++) {
      shortNameList.push(subMenuItems[j].short_name);
    }
  }

  signUp.shortNameSet = new Set(shortNameList);

  $scope.myValidation = function(value) {
    console.log($scope.stored);
    var isValid = signUp.shortNameSet.has(value.$viewValue);
    value.$setValidity('favMenuNum', isValid);
  }

  console.log($scope);

  $scope.submit = function() {
    MenuService.savePreference($scope.stored.user);
    $scope.hasSubmitted = true;
  }
  // $scope.stored.submit = function() {
  //   MenuService.savePreference($scope.newsletterForm);
  // }

}


})();
