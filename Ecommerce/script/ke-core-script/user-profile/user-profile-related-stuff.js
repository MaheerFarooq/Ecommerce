////////////////////////////////////////////////////////////profile data part
const $closeModal = $(".close-modal");


var college = $('#user_college_form');
college.submit(function (ev) {
    ev.preventDefault();
    if ($('#user_college_form').isValid() === true) {

        $.ajax({
            type: college.attr('method'),
            url: college.attr('action'),
            data: college.serialize(),

            success: function (data, status, xhr) {
                var ct = xhr.getResponseHeader("content-type") || "";
                if (ct.indexOf('json') > -1) {
                    if (data['status'] === 0)
                        toastModal('Start date not valid!', 'okay');
                    if (data['status'] === 1)
                        toastModal('End date not valid!', 'okay');
                    if (data['status'] === 3)
                        toastModal('Start date should be less than end date!', 'okay');
                } else {

                    $('#user-education-institute-list').html(data);
                    toast("Education saved successfully.", "ok");
                    clearEducationForm();
                    $('#educationModal').modal('hide');
                    componentHandler.upgradeDom();
                }
            },
            fail: function (data) {
                toast("Data not saved.", "ok")
            }
        });
    } else {
        toastModal('Fill necessary fields to save!', 'okay')
    }

});

var work = $('#user_work_form');
work.submit(function (ev) {
    ev.preventDefault();
    if ($('#user_work_form').isValid() === true) {
        $.ajax({
            type: work.attr('method'),
            url: work.attr('action'),
            data: work.serialize(),
            success: function (data, status, xhr) {
                var ct = xhr.getResponseHeader("content-type") || "";
                if (ct.indexOf('json') > -1) {
                    if (data['status'] === 0)
                        toastModal('Work start date not valid!', 'okay');
                    if (data['status'] === 1)
                        toastModal('Work end date not valid!', 'okay');
                    if (data['status'] === 3)
                        toastModal('Start date should be less than end date!', 'okay');
                } else {
                    $('#user-work-experience-list').html(data);
                    toast("Work history saved successfully.", "ok");
                    clearWorkForm();
                    $('#workModal').modal('hide');
                    componentHandler.upgradeDom();
                }

            },
            fail: function (data) {
                toastModal("Data not saved.", "ok")
            }
        });
    } else {
        toastModal('Fill necessary fields to save!', 'okay')
    }
});

function hide_li_work_end(elm) {
    if ($('#' + elm).prop('checked') == true) {
        $('#' + elm + '_end_date_li').hide();
    } else {
        $('#' + elm + '_end_date_li').show();
        $('#' + elm + '_end_date_li').removeClass("hidden");
    }
}

$('#submit_work_form').click(function () {
    $('#user_work_form').submit();
});

$('#submit_college_form').click(function () {
    $('#user_college_form').submit();
});

function clearEducationForm() {
    $("#user_college_form").trigger("reset");
    $('#graduated-checkbox').prop('checked', false);
    $('#graduated-checkbox').parent().removeClass("is-checked");
    $('#end-date-education').hide();
    $('#end-date-education').addClass("hidden");
    $('#education-key').val('');
}

function clearWorkForm() {
    $("#user_work_form").trigger("reset");
    $('#work_currently_work_here').prop('checked', false);
    $('#work_currently_work_here').parent().removeClass("is-checked");
    $('#work_currently_work_here_end_date_li').show();
    $('#work_currently_work_here_end_date_li').removeClass("hidden");
    $('#work-key').val('');
}

var professional_skills = $('#user_professional_skills_form');
professional_skills.submit(function (ev) {
    ev.preventDefault();
    $.ajax({
        type: professional_skills.attr('method'),
        url: professional_skills.attr('action'),
        data: professional_skills.serialize(),
        success: function (data) {
            $('#user-skill-list-container').html(data);
            $('#skillsModal').modal('hide');
            componentHandler.upgradeDom();
        },
        fail: function (data) {
            toast("Data not saved.", "ok")
        }
    });
});


/////////////////////////////////////////////////////////
$(document).ready(function () {

    $closeModal.click(function () {
        clearEducationForm();
        clearWorkForm();
    });

    $(".link-reset-message").on("click", function () {
        $(".module-notification__message").hide();
    });

    $('#graduated-checkbox').click(function () {
        if ($('#graduated-checkbox').prop('checked') == true) {
            $('#end-date-education').show();
            $('#end-date-education').removeClass("hidden");
        } else {
            $('#end-date-education').hide();
        }
    });

    $(document).on('click', '.institute-edit-button', function (ev) {
        clearEducationForm();
        $('#college_school').val(ev.currentTarget.getAttribute('data-institute-clg-school'));
        $('#college_description').val(ev.currentTarget.getAttribute('data-institute-description'));
        $('#college_major_subjects').val(ev.currentTarget.getAttribute('data-institute-subjects'));
        $('#college_start_date_year').val(ev.currentTarget.getAttribute('data-institute-start-date-year'));
        $('#college_start_date_month').val(ev.currentTarget.getAttribute('data-institute-start-date-month'));
        $('#college_start_date_day').val(ev.currentTarget.getAttribute('data-institute-start-date-day'));
        $('#college_end_date_year').val(ev.currentTarget.getAttribute('data-institute-end-date-year'));
        $('#college_end_date_month').val(ev.currentTarget.getAttribute('data-institute-end-date-month'));
        $('#college_end_date_day').val(ev.currentTarget.getAttribute('data-institute-end-date-day'));
        $('#college_attender_for').val(ev.currentTarget.getAttribute('data-institute-attended-for'));
        $('#college_degree').val(ev.currentTarget.getAttribute('data-institute-degree'));
        $('#education-key').val(ev.currentTarget.getAttribute('data-institute-key'));
        console.log(ev.currentTarget.getAttribute('data-institute-end-date-year'));
        if (ev.currentTarget.getAttribute('data-institute-end-date-year') === "None") {
            $('#end-date-education').hide();
        } else {
            $('#end-date-education').show();
            $('#end-date-education').removeClass("hidden");
            $('#graduated-checkbox').prop('checked', true);
            $('#graduated-checkbox').parent().addClass("is-checked")
        }
        $('#educationModal').modal('show');

    });

    $(document).on('click', '.institute-delete-button', function (ev) {
        $.ajax({
            type: 'POST',
            url: '/profile/delete-user-college',
            data: {'education-key': ev.currentTarget.getAttribute('data-institute-key')},
            success: function (data) {
                toast("Institute deleted Successfully!", "OKAY");
                $('#user-education-institute-list').html(data);
                componentHandler.upgradeDom();
            }
        });
    });

    $(document).on('click', '.work-edit-button', function (ev) {
        $('#work-key').val(ev.currentTarget.getAttribute('data-work-key'));
        $('#work_company').val(ev.currentTarget.getAttribute('data-work-company'));
        $('#work_position').val(ev.currentTarget.getAttribute('data-work-position'));
        $('#work_city').val(ev.currentTarget.getAttribute('data-work-city'));
        $('#work_description').val(ev.currentTarget.getAttribute('data-work-description'));
        $('#work_start_date_year').val(ev.currentTarget.getAttribute('data-work-start-date-year'));
        $('#work_start_date_month').val(ev.currentTarget.getAttribute('data-work-start-date-month'));
        $('#work_start_date_day').val(ev.currentTarget.getAttribute('data-work-start-date-day'));
        $('#work_end_date_year').val(ev.currentTarget.getAttribute('data-work-end-date-year'));
        $('#work_end_date_month').val(ev.currentTarget.getAttribute('data-work-end-date-month'));
        $('#work_end_date_day').val(ev.currentTarget.getAttribute('data-work-end-date-day'));

        if (ev.currentTarget.getAttribute('data-work-end-date-year') === "None") {
            $('#work_currently_work_here_end_date_li').hide();
            $('#work_currently_work_here').prop('checked', true);
            $('#work_currently_work_here').parent().addClass("is-checked")
        } else {
            $('#work_currently_work_here_end_date_li').show();
            $('#work_currently_work_here_end_date_li').removeClass("hidden");
            $('#work_currently_work_here').prop('checked', false);
            $('#work_currently_work_here').parent().removeClass("is-checked")
        }
        $('#workModal').modal('show');
    });

    $(document).on('click', '.work-delete-button', function (ev) {
        $.ajax({
            type: 'POST',
            url: '/profile/delete-user-work',
            data: {'work-key': ev.currentTarget.getAttribute('data-work-key')},
            success: function (data) {
                $('#user-work-experience-list').html(data);
                componentHandler.upgradeDom();
                toast("Work Deleted Successfully!", "OKAY")
            }
        });
    });
    $("#user-skill-input").select2({
        tags: true,
        placeholder: "Select skills from list or add your own!"
    });

    $(document).on('click', '.skill-edit-button', function () {
        $('#skillsModal').modal('show');
    });

    $(document).on('click', '#btn-about-me-save', function () {
        if ($('#about-me-form').isValid() === true) {
            $.ajax({
                type: 'POST',
                url: '/profile/save-introduction',
                data: {
                    'tagline': $('#tagline-input').val(),
                    'introduction': $('#introduction-input').val()
                },
                success: function (data) {
                    $('#user-about-me-container').html(data);
                    toast('Introduction has been updated!', 'OKAY');
                    $('#aboutMeModal').modal('hide');
                    componentHandler.upgradeDom();
                }
            });
        }
    });
    $(document).on('click', '.js-edit-introduction', function () {
        $('#aboutMeModal').modal('show');
    });


    $(document).on('click', '#btn-places-save', function () {
        if ($('#places-form').isValid() === true) {
            $.ajax({
                type: 'POST',
                url: '/profile/save-user-places',
                data: {
                    'current-place': $('#current-place-input').val(),
                    'previous-places': $('#previous-places-input').val()
                },
                success: function (data) {
                    $('.js-places-container').html(data);
                    toast('places have been updated!', 'OKAY');
                    $('#placesModal').modal('hide');
                    componentHandler.upgradeDom();
                }
            });
        }
    });
    $(document).on('click', '.js-edit-places', function () {
        $('#placesModal').modal('show');
    });


    ///////////////privacy ////////////////////////
    $(document).on('click', '.js-change-user-privacy', function (ev) {
        let container = ev.currentTarget.getAttribute('data-privacy-container');
        $.ajax({
            type: 'POST',
            url: '/profile/manipulate-privacy',
            data: {
                'selected-option': ev.currentTarget.getAttribute('data-privacy-selected-option'),
                'profile-section': ev.currentTarget.getAttribute('data-privacy-section')
            },
            success: function (data) {
                $('.' + container).html(data);
                toast('privacy settings updated!', 'OKAY');
                componentHandler.upgradeDom();
            }
        });

    })

});

