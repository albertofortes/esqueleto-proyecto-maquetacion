function RessController($scope, $window) {
    var w = angular.element($window);
    $scope.getWidth = function() {
        var width = w.width() + getScrollbarWidth();
        return width;

    };
    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
        $scope.windowWidth = newValue;
    });

    w.bind('resize', function () {
        $scope.$apply();
    });
}

function getScrollbarWidth() {
    var outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

    document.body.appendChild(outer);

    var widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = "scroll";

    // add innerdiv
    var inner = document.createElement("div");
    inner.style.width = "100%";
    outer.appendChild(inner);        

    var widthWithScroll = inner.offsetWidth;

    // remove divs
    outer.parentNode.removeChild(outer);

    return widthNoScroll - widthWithScroll;
}
