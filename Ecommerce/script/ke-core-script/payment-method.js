$(document).ready(function () {
    const $paymentModal = $(".payment-modal");
    const $bodyOverlay = $(".js-open-overlay");
    const $paymentAppModal = $(".payment-modal-content");
    $paymentModal.click(function () {
        $paymentAppModal.toggleClass('is-open');
        $bodyOverlay.toggleClass('mdl-overflow--hidden');
    });

    $("#payment_method").on("submit", function (e) {
        e.preventDefault();
        payment = $("#payment_method");
        $.ajax({
            type: payment.attr('method'),
            url: payment.attr('action'),
            data: payment.serialize(),
            success: function (response) {
                if (response.status === 1) {
                    $paymentAppModal.toggleClass('is-open');
                }
            },
            fail: function (data) {

            }
        });
    });
});
