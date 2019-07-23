$(document).ready(function () {
    $(document).on('click', '.js-be-a-blog-qa', function () {
        $.ajax({
            type: 'POST',
            url: '/blogs/sign-up-for-writer',
            data: {},
            success: function (data) {
                toast(data['message'], 'OKAY')
            }
        });
    });
    $(document).on('click', '.js-btn-blog-accept', function (ev) {
        changeQAStatus(ev.currentTarget.getAttribute('data-key'), 'accept');
    });
    $(document).on('click', '.js-btn-blog-reject', function (ev) {
        changeQAStatus(ev.currentTarget.getAttribute('data-key'), 'reject');
    });
    $(document).on('click', '.js-btn-blog-revoke', function (ev) {
        changeQAStatus(ev.currentTarget.getAttribute('data-key'), 'revoke');
    });

});

function changeQAStatus(key, type) {
    $.ajax({
        type: 'POST',
        url: '/blogs/change-qa-status',
        data: {
            'request_id': key,
            'type': type
        },
        success: function (data) {
            if (data['status'] === 1) {
                location.reload();
            }
        }
    });
}