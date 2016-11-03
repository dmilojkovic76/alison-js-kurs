/*global $*/

//  Your task is to take a plain semantic HTML page and enhance it with JavaScript by adding a slideshow.
//
//   *** 1. Move the #slideshow element to the top of the body.
//
//    2. Write code to cycle through the list items inside the element; fade one in, display it for a few seconds, then fade it out and fade in the next one.
//
//    3. When you get to the end of the list, start again at the beginning.
//
//  For an extra challenge, create a navigation area under the slideshow that shows how many images there are and which image you're currently viewing. (Hint: $.fn.prevAll will come in handy for this.)

$(document).ready(function () {
    'use strict';

    var $slideshow = $('#slideshow').insertBefore('#main'),
        $brojac = $('<div></div>').insertAfter($slideshow),
        $kontrole = $('<div></div>').insertAfter($slideshow),
        $prevBtn = $('<input type="button" value="Pre" />').appendTo($kontrole),
        $nextButton = $('<input type="button" value="Nxt" />').appendTo($kontrole);


    $slideshow.find('li').hide();


    $slideshow.find('li:first').fadeIn();


});
