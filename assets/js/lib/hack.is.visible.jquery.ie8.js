(function () {
    var oldHidden = jQuery.expr.filters.hidden;
    jQuery.expr.filters.hidden = function(elem) {
        if (elem.previousSibling && elem.previousSibling.nodeType != 8) {
            $(elem).before('<!-- -->');
        }
        return oldHidden(elem);
    }
})();