////////////////////////////////////////////////////////////profile data part
const $bodyOverlay = $(".js-open-overlay");
const $workModal = $(".work-modal");
const $workAppModal = $(".work-modal-content");
const $educationModal = $(".education-modal");
const $educationAppModal = $(".education-modal-content");
const $skillsModal = $(".skills-modal");
const $skillsAppModal = $(".skills-modal-content");
const $closeModal = $(".close-modal");

$(function () {
    $(".cancel-account").hide();
    $("#cancel-button").on("click", function () {
        $(".cancel-account").show();
    });
});

////////////////////////////////////////////////////////////image Section//////////////////////////////////////////
var loader = '<div class="mdl-spinner mdl-js-spinner is-active"></div>';

function empty_value() {
    this.value = null;
}

function send_files_ajax() {
    toast("Uploading please Wait.", "okay");
    $('#profile-small-images').html(loader);
    componentHandler.upgradeDom();
    var files = $('#pictures')[0].files;
    var url = "";
    for (i = 0; i < files.length; i++) {
        url = get_url();
        send_files(url, files[i]);
    }
    get_previous_images(null);
    this.value = null;
}

function get_previous_images(key_for_del) {
    $('#profile-small-images').html(loader);
    componentHandler.upgradeDom();
    $.ajax({
        type: 'POST',
        url: '/profile/get-previous-images',
        async: true,
        data: {'key': '', 'key_for_del': key_for_del},
        success: function (data) {
            $('#profile-small-images').html(data);
            $(".mdl-avatar").attr('src', $('#js_user_profile_photo_avatar').attr('src'));
            componentHandler.upgradeDom();
        }
    });
    componentHandler.upgradeDom();
}

function set_as_default_image(key_for_del) {
    toast("Setting Default Image.", "okay");
    $.ajax({
        type: 'POST',
        async: false,
        url: '/profile/get-previous-images',
        data: {'key': '', 'key_for_default': key_for_del},
        success: function (data) {
            $('#profile-small-images').html(data);
            $(".mdl-avatar").attr('src', $('#js_user_profile_photo_avatar').attr('src'));
            $(".divLoading").hide();
        }
    });
    componentHandler.upgradeDom();
}

function send_files(url, file) {
    $('#profile-small-images').html(loader);
    componentHandler.upgradeDom();
    var formData = new FormData($("form")[0]);
    formData.append("file", file);
    $.ajax({
        type: 'POST',
        url: url,
        processData: false,
        contentType: false,
        async: false,
        data: formData,
        success: function (data) {

            // $('#main-profile-img').attr('src', data);
            //$('#main-profile-picture-round').attr('src', data);
        }
    });
}

function get_url() {
    $(".divLoading").show();
    url = "";
    $.ajax({
        type: 'GET',
        url: '/get_upload_url',
        data: {'key': ''},
        async: false,
        success: function (data) {
            url = data
        }
    });
    return url
}

function delete_profile_picture(serving_key) {
    toast("Deleting Image", "okay");
    get_previous_images(serving_key);
    componentHandler.upgradeDom();
}

function clickFileButton() {
    $('#pictures').click();
}

////////////////////////////////////////////////////////////education Section//////////////////////////////////////////

var college = $('#user_college_form');
college.submit(function (ev) {
    ev.preventDefault();
    $.ajax({
        type: college.attr('method'),
        url: college.attr('action'),
        data: college.serialize(),
        success: function (data) {
            $('#user-education-institute-list').html(data);
            toast("Data saved successfully.", "ok");
            clearEducationForm();
            $educationAppModal.toggleClass('is-open');
            $bodyOverlay.toggleClass('mdl-overflow--hidden');
            componentHandler.upgradeDom();
        },
        fail: function (data) {
            toast("Data not saved.", "ok")
        }
    });
});

var work = $('#user_work_form');
work.submit(function (ev) {
    ev.preventDefault();
    $.ajax({
        type: work.attr('method'),
        url: work.attr('action'),
        data: work.serialize(),
        success: function (data) {
            $('#user-work-experience-list').html(data);
            toast("Data saved successfully.", "ok");
            clearWorkForm();
            $workAppModal.toggleClass('is-open');
            $bodyOverlay.toggleClass('mdl-overflow--hidden');
            componentHandler.upgradeDom();
        },
        fail: function (data) {
            toast("Data not saved.", "ok")
        }
    });
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
            $skillsAppModal.toggleClass('is-open');
            $bodyOverlay.toggleClass('mdl-overflow--hidden');
            componentHandler.upgradeDom();
        },
        fail: function (data) {
            toast("Data not saved.", "ok")
        }
    });
});


/////////////////////////////////////////////////////////
$(document).ready(function () {
    $workModal.click(function () {
        $workAppModal.toggleClass('is-open');
        $bodyOverlay.toggleClass('mdl-overflow--hidden');
    });

    $educationModal.click(function () {
        $educationAppModal.toggleClass('is-open');
        $bodyOverlay.toggleClass('mdl-overflow--hidden');
    });

    $skillsModal.click(function () {
        $skillsAppModal.toggleClass('is-open');
        $bodyOverlay.toggleClass('mdl-overflow--hidden');
    });

    $closeModal.click(function () {
        $(this).closest('.mdl-modal').toggleClass('is-open');
        $bodyOverlay.toggleClass('mdl-overflow--hidden');
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
        console.log(ev.currentTarget.getAttribute('data-institute-end-date-year'))
        if (ev.currentTarget.getAttribute('data-institute-end-date-year') === "None") {
            $('#end-date-education').hide();
        } else {
            $('#end-date-education').show();
            $('#end-date-education').removeClass("hidden");
            $('#graduated-checkbox').prop('checked', true);
            $('#graduated-checkbox').parent().addClass("is-checked")
        }
        $educationAppModal.toggleClass('is-open');
        $bodyOverlay.toggleClass('mdl-overflow--hidden');
    });

    $(document).on('click', '.institute-delete-button', function (ev) {
        $.ajax({
            type: 'POST',
            url: '/profile/delete-user-college',
            data: {'education-key': ev.currentTarget.getAttribute('data-institute-key')},
            success: function (data) {
                $('#user-education-institute-list').html(data);
                componentHandler.upgradeDom();
                toast(ev.currentTarget.getAttribute('data-institute-type') + " deleted Successfully!", "OKAY")
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
        $workAppModal.toggleClass('is-open');
        $bodyOverlay.toggleClass('mdl-overflow--hidden');
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

    $(document).on('click', '.skill-edit-button',function () {
        $skillsModal.click();
    });


});
