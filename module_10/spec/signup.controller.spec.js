// I don't know why I keep getting the following error: 
// Error: [$injector:modulerr] http://errors.angularjs.org/1.5.8/$injector/modulerr?p0=public&p1=Error%3A%20%5B%24injector%3Amodulerr%5D%20http%3A%2F%2Ferrors.angularjs.org%2F1.5.8%2F%24injector%2Fmodulerr%3Fp0%3Dui.router%26p1%3DError%253A%2520%255B%2524injector%253Anomod%255D%2520http%253A%252F%252Ferrors.angularjs.org%252F1.5.8%252F%2524injector%252Fnomod%253Fp0%253Dui.router%250A%2520%2520%2520%2520at%2520http%253A%252F%252F127.0.0.1%253A5555%252Fmodule_10%252Flib%252Fangular.min.js%253A6%253A412%250A%2520%2520%2520%2520at%2520http%253A%252F%252F127.0.0.1%253A5555%252Fmodule_10%252Flib%252Fangular.min.js%253A25%253A99%250A%2520%2520%2520%2520at%2520b%2520(http%253A%252F%252F127.0.0.1%253A5555%252Fmodule_10%252Flib%252Fangular.min.js%253A24%253A142)%250A%2520%2520%2520%2520at%2520http%253A%252F%252F127.0.0.1%253A5555%252Fmodule_10%252Flib%252Fangular.min.js%253A24%253A385%250A%2520%2520%2520%2520at%2520http%253A%252F%252F127.0.0.1%253A5555%252Fmodule_10%252Flib%252Fangular.min.js%253A39%253A471%250A%2520%2520%2520%2520at%2520q%2520(http%253A%252F%252F127.0.0.1%253A5555%252Fmodule_10%252Flib%252Fangular.min.js%253A7%253A355)%250A%2520%2520%2520%2520at%2520g%2520(http%253A%252F%252F127.0.0.1%253A5555%252Fmodule_10%252Flib%252Fangular.min.js%253A39%253A319)%250A%2520%2520%2520%2520at%2520http%253A%252F%252F127.0.0.1%253A5555%252Fmodule_10%252Flib%252Fangular.min.js%253A39%253A488%250A%2520%2520%2520%2520at%2520q%2520(http%253A%252F%252F127.0.0.1%253A5555%252Fmodule_10%252Flib%252Fangular.min.js%253A7%253A355)%250A%2520%2520%2520%2520at%2520g%2520(http%253A%252F%252F127.0.0.1%253A5555%252Fmodule_10%252Flib%252Fangular.min.js%253A39%253A319)%0A%20%20%20%20at%20http%3A%2F%2F127.0.0.1%3A5555%2Fmodule_10%2Flib%2Fangular.min.js%3A6%3A412%0A%20%20%20%20at%20http%3A%2F%2F127.0.0.1%3A5555%2Fmodule_10%2Flib%2Fangular.min.js%3A40%3A222%0A%20%20%20%20at%20q%20(http%3A%2F%2F127.0.0.1%3A5555%2Fmodule_10%2Flib%2Fangular.min.js%3A7%3A355)%0A%20%20%20%20at%20g%20(http%3A%2F%2F127.0.0.1%3A5555%2Fmodule_10%2Flib%2Fangular.min.js%3A39%3A319)%0A%20%20%20%20at%20http%3A%2F%2F127.0.0.1%3A5555%2Fmodule_10%2Flib%2Fangular.min.js%3A39%3A488%0A%20%20%20%20at%20q%20(http%3A%2F%2F127.0.0.1%3A5555%2Fmodule_10%2Flib%2Fangular.min.js%3A7%3A355)%0A%20%20%20%20at%20g%20(http%3A%2F%2F127.0.0.1%3A5555%2Fmodule_10%2Flib%2Fangular.min.js%3A39%3A319)%0A%20%20%20%20at%20Object.cb%20%5Bas%20injector%5D%20(http%3A%2F%2F127.0.0.1%3A5555%2Fmodule_10%2Flib%2Fangular.min.js%3A43%3A336)%0A%20%20%20%20at%20Object.workFn%20(http%3A%2F%2F127.0.0.1%3A5555%2Fmodule_10%2Flib%2Fangular-mocks.js%3A3074%3A52)%0A%20%20%20%20at%20window.inject.angular.mock.inject%20(http%3A%2F%2F127.0.0.1%3A5555%2Fmodule_10%2Flib%2Fangular-mocks.js%3A3054%3A42)
// I've tried debugging for more than an hour but can't seem to get why

describe("SignUpController", function() {

    var signUpController;

    beforeEach(function() {
        // Load module
        module('public', ['ui.router', 'common']);
    
        // Load any dependencies
        inject(function ($rootScope, $injector) {
          var $controller = $injector.get('$controller');
    
          var MenuServiceMock = {};
          MenuServiceMock.getMenuItems = function() {
              return [];
          }

          // Instantiate controller
          signUpController = $controller('SignUpController', {
            $state: {},
            $scope: $rootScope,
            menuItems: menu_items,
            MenuService: MenuServiceMock
          });

        });
      });

    it("should properly work on happy path", function() {
        signUpController.shortNameSet = new Set(["A1"]);
        signUpController.menuItemToTitleDescr = {
            "A1": {
                favMenuNumName: "Mock Name",
                favMenuNumDescr: "Mock Descr"
            }
        };

        signUpController.$scope.myValidation("A1");

        expect($scope.stored.user.favMenuNumName).toBe("Mock Name");
        expect($scope.stored.user.favMenuNumDescr).toBe("Mock Descr");
        expect($scope.newsletterForm.$valid).toBe(true);
    });

    it("should properly work on unhappy path", function() {
        signUpController.shortNameSet = new Set(["A1"]);
        signUpController.menuItemToTitleDescr = {
            "A1": {
                favMenuNumName: "Mock Name",
                favMenuNumDescr: "Mock Descr"
            }
        };

        signUpController.$scope.myValidation("B1");

        expect($scope.newsletterForm.$valid).toBe(false);
    });

});
