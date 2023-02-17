(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['$scope', 'preference'];
function MyInfoController($scope, preference) {
    var foobar = this;
    foobar.asdf = "SLKDFJSDLJF";

    $scope.isPrefEmpty = Object.keys(preference).length == 0;
    if (Object.keys(preference).length == 0) {
        return;
    }


    console.log(preference);

    $scope.preference = preference;

    console.log($scope);
    console.log();

    $scope.asdf = "SDLFKJSDLF";

    var splitArr = preference.favMenuNum.split(/(\d.*)/, 2);
    $scope.category = splitArr[0];
    $scope.itemNum = preference.favMenuNum;

}
})();
