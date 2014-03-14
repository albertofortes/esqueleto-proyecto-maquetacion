function RessController($scope, $window) {
    var w = angular.element($window);
    $scope.getWidth = function() {
        return w.width();
    };
    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
        $scope.windowWidth = newValue;
    });

    w.bind('resize', function () {
        $scope.$apply();
    });
}
