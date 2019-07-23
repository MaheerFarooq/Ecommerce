var uploadCoverPicture = null;

function send_files_ajax() {
    var files = $('#pictures')[0].files;
    if (files.length > 0) {
        toast("Uploading please Wait.", "okay");
        var url = "";
        for (i = 0; i < files.length; i++) {
            url = get_url();
            upload_file(url, files[i]);
        }
    }

}

function get_url() {
    let url = "";
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

function upload_file(url, file) {
    var formData = new FormData($("form")[0]);
    formData.append("file", file);
    formData.append("cover", uploadCoverPicture);
    $.ajax({
        type: 'POST',
        url: url,
        processData: false,
        contentType: false,
        async: true,
        data: formData,
        success: function (data) {
            if (uploadCoverPicture === false) {
                $('.js-profile-image-container').attr('src', data + '=s98-c').removeClass('hide');
                $('.js-profile-pic-letter').addClass('hide');
                $('.js-profile-image-container-nav').attr('src', data + '=s32-c').removeClass('hide');
                $('.js-profile-pic-letter-nav').addClass('hide');
            } else {
                $('.js-cover-image-container').css('background-image', 'url(' + data + ')');
            }


        }
    });
}

function empty_value() {
    this.value = null;
}

function clickFileButton({UploadProfilePic = false}) {
    uploadCoverPicture = UploadProfilePic;
    $('#pictures').click();
}