(function() {

'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController)

LunchCheckController.$inject = ['$scope']
function LunchCheckController($scope) {

    $scope.message = "";
    $scope.lunchList = "";

    $scope.check = function() {
        if (!$scope.lunchList.length) {
            $scope.message = "Please enter data first";
            $scope.myStyle = {color: "red", border: "1px solid red"};
            return;
        }

        var lunchItems = $scope.lunchList.split(",");

        var count = 0;
        for (var i = 0; i < lunchItems.length; i++) {
            var lunchItem = lunchItems[i];

            if (lunchItem.trim().length != 0) {
                count = count + 1;
            }
        }

        if (count <=3) {
            $scope.message = "Enjoy!";
            $scope.myStyle = {color: "green"}
            $scope.myStyle = {color: "green", border: "1px solid green"};
        } else {
            $scope.message = "Too much!";
            $scope.myStyle = {color: "green", border: "1px solid green"};
        }

    };
}

})();