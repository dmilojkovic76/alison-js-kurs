/*global $*/

//The spec for the feature is as follows:
//
//    - Clicking on a headline in the #blog div should slide down the excerpt paragraph
//
//    - Clicking on another headline should slide down its excerpt paragraph, and slide up any other currently showing excerpt paragraphs.
//
//Hint: don't forget about the :visible selector!

$(document).ready(function () {
    'use strict';

    $('#blog h3').click(function (e) {
        e.preventDefault();
        var $klik = $(this);

        $klik.next('p').slideToggle('fast', function () {
            $klik.parent().siblings().find('p:visible').slideUp();
        });

    });

});
