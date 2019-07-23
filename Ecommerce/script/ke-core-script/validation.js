$.formUtils.addValidator({
    name: 'check_list',
    validatorFunction: function (value, $el, config, language, $form) {
        let obj = $($el).next().find("option[value='" + value + "']");
        return obj != null && obj.length > 0;
    },
    errorMessage: 'Please Select Value from the list',
    errorMessageKey: 'badValue'
});

$(document).ready(function () {

    $.validate({
        lang: 'es',
        modules: 'file'
    });
});
