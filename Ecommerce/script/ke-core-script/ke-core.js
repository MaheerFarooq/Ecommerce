/**
 * @license
 * Copyright 2017 kompassEra. All rights reserved.
 *
 */

function toast(messageText, btntTxt) {
    'use strict';
    var snackbarContainer = document.querySelector('#toast-container');
    var handler = function (event) {
    };

    'use strict';
    var data = {
        message: messageText,
        timeout: 2100,
        actionHandler: handler,
        actionText: btntTxt
    };
    snackbarContainer.MaterialSnackbar.showSnackbar(data);
}


function toastModal(messageText, btntTxt) {
    'use strict';
    var snackbarContainer = document.querySelector('.toast-container-modal');
    var handler = function (event) {
    };

    'use strict';
    var data = {
        message: messageText,
        timeout: 2100,
        actionHandler: handler,
        actionText: btntTxt
    };
    snackbarContainer.MaterialSnackbar.showSnackbar(data);
}

function applyLoaderToButton(btnId) {
    var $button = $('#' + btnId);
    $button.addClass('is-loading');
    $button.prop('disabled', true);

}

function removeLoaderFromButton(btnId) {
    var $button = $('#' + btnId);
    $button.removeClass('is-loading disabled');
    $button.prop('disabled', false);
}