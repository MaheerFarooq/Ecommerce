$(document).ready(function () {

    $(document).on('click', '.js-btn-blog-approve', function (ev) {
        $.ajax({
            type: 'POST',
            url: '/blogs/view-blogs-for-qa',
            data: {
                'blog_key': ev.currentTarget.getAttribute('data-key'),
                'approve': 'true'
            },
            success: function (data) {
                location.reload();
            }
        });
    });
    $(document).on('click', '.js-btn-blog-reject', function (ev) {
        $.ajax({
            type: 'POST',
            url: '/blogs/view-blogs-for-qa',
            data: {
                'blog_key': ev.currentTarget.getAttribute('data-key'),
                'approve': 'false'
            },
            success: function (data) {
                location.reload();
            }
        });
    });
});