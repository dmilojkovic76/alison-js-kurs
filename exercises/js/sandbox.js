// JQuery basics vezbe
/*global $, alert*/
$(document).ready(function () {
    'use strict';

    //   S E L E C T I O N S
    // 1. Select all of the div elements that have a class of "module".
    $("div.module").css({
        "backgroundColor": "blue",
        "color": "white"
    });

    // 2. Come up with three selectors that you could use to get the third item in the #myList unordered list. Which is the best to use? Why?
    var $select2_1 = $("#myListItem"),
        $select2_2 = $("#myList").children().eq(2),
        $select2_3 = $("#myList li:eq(2)");
    $select2_1.css({
        "backgroundColor": "yellow"
    });
    $select2_2.css({
        "color": "blue"
    });
    $select2_3.text($select2_3.text() + " - druga selekcija");

    // 3. Select the label for the search input using an attribute selector.
    $('label[for="q"]').text($('label[for="q"]').text() + " - treca selekcija");

    // 4. Figure out how many elements on the page are hidden (hint: .length).
    console.log("Cetvrta selekcija " + $(":hidden").length);

    // 5. Figure out how many image elements on the page have an alt attribute.
    console.log("Peta selekcija " + $("img[alt]").length);

    // 6. Select all of the odd table rows in the table body
    console.log("sesta selekcija " + $("#fruits tbody tr:odd").length);


    //  T R A V E R S I N G
    // 1. Select all of the image elements on the page; log each image's alt attribute.
    $("img").each(function () {
        var $thisImg = $(this);
        console.log($thisImg.attr("alt"));
    });

    // 2. Select the search input text box, then traverse up to the form and add a class to the form.
    $('input[name="q"]').closest("form").addClass("dodato");

    // 3. Select the list item inside #myList that has a class of "current" and remove that class from it; add a class of "current" to the next list item.
    $("#myList li.current").removeClass("current").next().addClass("current");

    // 4. Select the select element inside #specials; traverse your way to the submit button.
    $('#specials select').parent().next().find('input.input_submit');

    // 5. Select the first list item in the #slideshow element; add the class "current" to it, and then add a class of "disabled" to its sibling elements.
    $('#slideshow li:first').addClass('current').siblings().addClass('disabled');

    //   M A N I P U L A T I O N
    // 1. Add five new list items to the end of the unordered list #myList. Hint:
    //      for (var i = 0; i<5; i++) { ... }
    var $myLista = $('#myList');
    for (var i = 0; i < 5; i += 1) {
        $myLista.append('<li> Novi Item ' + i + '</li>');
    }

    // 2. Remove the odd list items
    $('#myList li:odd').remove();

    // 3. Add another h2 and another paragraph to the last div.module
    $('.module:last').append('<h2>Novi H2 element</h2><p>Novi P element</p>');

    // 4. Add another option to the select element; give the option the value "Wednesday"
    $('#specials select').append('<option value="Wednesday">Wednesday</option>');

    // 5. Add a new div.module to the page after the last one; put a copy of one of the existing images inside of it.
    $('<div class="module" id="dodatak">' +
        '<h2>Vegetables</h2>' +
        '<img src="images/vegetable.jpg" alt="vegetables" />' +
        '</div>').insertAfter('div.module:last');


});
