$(document).ready(function () {
    $('.listing-delete-button').on('click', function (ev) {
        var listingKey = ev.currentTarget.getAttribute('data-listing-key');

        $.ajax({
            type: 'POST',
            url: '/listing-delete',
            data: {'listing-key': listingKey},
            success: function (data) {
                if (data['status'] === 1) {
                    $('.listing-card-' + listingKey).remove();
                    toast('Listing has been deleted!', 'OKAY')
                }

            }
        });
    });


    $(document).on('click', '.mark-listing-inactive-button', function (ev) {
        var listingKey = ev.currentTarget.getAttribute('data-listing-key');
        $.ajax({
            type: 'POST',
            url: '/listing-mark-inactive',
            data: {'listing-key': listingKey},
            success: function (data) {
                $('.listing-card-' + listingKey).remove();
                $('#container-inactive-listings').html(data);
                componentHandler.upgradeDom();
                toast('Listing has been marked as inactive!!', 'OKAY')
            }
        });
    });


    $(document).on('click', '.listing-reactivate-button', function (ev) {
        var listingKey = ev.currentTarget.getAttribute('data-listing-key');
        $.ajax({
            type: 'POST',
            url: '/listing-reactivate',
            data: {'listing-key': listingKey},
            success: function (data) {
                $('.listing-card-' + listingKey).remove();
                $('#container-complete-listings').html(data);
                componentHandler.upgradeDom();
                toast('Listing has been marked as inactive!!', 'OKAY')

            }
        });
    });
});