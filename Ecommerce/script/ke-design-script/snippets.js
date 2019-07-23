/**
 * @license
 * Copyright 2017 kompassEra. All rights reserved.
 *
 */

/*
 * Code. To toggle modal
 */
$(document).ready(function() {
    const $triggerModal = $(".js-trigger-modal");
    const $bodyOverlay = $(".js-open-overlay");
    const $appModal = $(".js-modal-content");
    $triggerModal.click(function() {
        $appModal.toggleClass('is-open');
        $bodyOverlay.toggleClass('mdl-overflow--hidden');
    });
});

$(document).ready(function() {
    const $triggerCNav = $(".js-trigger-c-nav");
    const $bodyOverlay = $(".js-open-overlay");
    const $homePageCNav = $(".js-c-nav");
    $triggerCNav.click(function() {
        $homePageCNav.addClass('is-open');
        $bodyOverlay.toggleClass('mdl-overflow--hidden');
    });
});

/*
 * Code. To toggle faq
 */
// $(document).ready(function() {
//     const $showMore = $(".js-show-more");
//     const $showLess = $(".js-show-less");
//     const $faqToggle = $(".js-toggle-faq");
//     $showMore.click(function() {
//         $faqToggle.removeClass('md-show-more');
//         $faqToggle.addClass('md-show-less');
//         $showMore.toggleClass('hide');
//         $showLess.toggleClass('hide');
//     });
//     $showLess.click(function() {
//         $faqToggle.removeClass('md-show-less');
//         $faqToggle.addClass('md-show-more');
//         $showMore.toggleClass('hide');
//         $showLess.toggleClass('hide');
//     });
// });
$(document).ready(function() {
    const $showMore = $(".js-show-more");
    const $showLess = $(".js-show-less");
    const $faqToggle = $(".js-toggle-faq");
    $showMore.click(function() {
        console.log("Test");
        $('.js-toggle-faq').css({
          'height': '100%'
        });
        $showMore.toggleClass('hide');
        $showLess.toggleClass('hide');
    });
    $showLess.click(function() {
        console.log("Test2");
        $('.js-toggle-faq').css({
          'height': '384px'
        });
        $showMore.toggleClass('hide');
        $showLess.toggleClass('hide');
    });
});

/*
 * Code. Progress bar
 */
// const progress = 15;
// document.querySelector('#p1').addEventListener('mdl-componentupgraded', function() {
//     this.MaterialProgress.setProgress(progress);
// });

// console.log('Application__kompassEra__snippets');
