/*global $*/
// Your task is to use the text of the label for the search input to create "hint" text for the search input. The steps are as follows:

// *** 1. Set the value of the search input to the text of the label element

// *** 2. Add a class of "hint" to the search input

// *** 3. Remove the label element

// *** 4. Bind a focus event to the search input that removes the hint text and the "hint" class

// *** 5. Bind a blur event to the search input that restores the hint text and "hint" class if no search text was entered

// What other considerations might there be if you were creating this functionality for a real site?

$(document).ready(function () {
    'use strict';
    var $searchInput = $('#search input[name="q"]'),
        $searchLabel = $('#search label[for="q"]');

    $searchInput
        .val($searchLabel.text())
        .addClass('hint');

    $searchLabel.remove();

    $searchInput.bind('focus', function (e) {
        $searchInput
            .val('')
            .removeClass('hint');
    });

    $searchInput.bind('blur', function (e) {
        $searchInput
            .val($searchLabel.text())
            .addClass('hint');
    });
});
