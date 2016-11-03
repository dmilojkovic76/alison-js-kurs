/*global $*/
// Your task is to create tabbed navigation for the two div.module elements. To accomplish this:
//
// *** 1. Hide all of the modules.
//
// *** 2. Create an unordered list element before the first module.
//
// *** 3. Iterate over the modules using $.fn.each. For each module, use the text of the h2 element as the text for a list item that you add to the unordered list element.
//
// 4. Bind a click event to the list item that:
//
//    - Shows the related module, and hides any other modules
//
//    - Adds a class of "current" to the clicked list item
//
//    - Removes the class "current" from the other list item
//
// 5. Finally, show the first tab.

$(document).ready(function () {
    'use strict';
    var $moduli = $('div.module');

    $moduli.hide();
    $('<ul id="novaLista"></ul>')
        .addClass('tabs')
        .insertBefore($moduli.eq(0));

    $moduli.each(function () {
        var $modul = $(this),
            $tab = $('<li>' + $modul.find('h2:first').text() + '</li>').appendTo($('#novaLista'));
        $tab.click(function () {
            $tab.addClass('current').siblings().removeClass('current');
            $modul.show().siblings('.module').hide();
        });
    });
    $moduli.eq(0).show();
    $('#novaLista li:first').addClass('current');
});
