$(document).ready(function () {
    var personalInfoForm = $('#update_form');
    personalInfoForm.submit(function (ev) {
        ev.preventDefault();
        applyLoaderToButton("save-personal-info-btn");
        if ($('#update_form').isValid() === true) {
            $.ajax({
                type: personalInfoForm.attr('method'),
                url: personalInfoForm.attr('action'),
                data: personalInfoForm.serialize(),
                success: function (data) {
                    if (data['status'] === 0)
                        toast('Birth date is not valid!', 'okay');
                    if (data['status'] === 1)
                        toast('Data saved successfully!', 'okay');
                },
                fail: function (data) {
                    toast("Data not saved.", "ok")
                },
                complete: function () {
                    removeLoaderFromButton("save-personal-info-btn");
                }
            });
        } else {
            toast('Fill necessary fields to save!', 'okay')
        }
    });
});