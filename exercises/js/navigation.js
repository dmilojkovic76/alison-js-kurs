/*global $*/

//Your task is to add dropdowns to the main navigation at the top of the page.
//
//    - Hovering over an item in the main menu should show that item's submenu items, if any.
//
//    - Exiting an item should hide any submenu items.
//
//To accomplish this, use the $.fn.hover method to add and remove a class from the submenu items to control whether they're visible or hidden. (The file at /exercises/css/style.css includes the "hover" class for this purpose.)

$(document).ready(function () {
    'use strict';

    var $navigator = $('#nav li');

    $navigator.hover(function () {
            $navigator.children('ul').addClass('hover').show();
        },
        function () {
            $navigator.children('ul').removeClass('hover').hide();
        });
    // make the nav items appear clickable
    $navigator.css({
        'cursor': 'pointer'
    });

});
