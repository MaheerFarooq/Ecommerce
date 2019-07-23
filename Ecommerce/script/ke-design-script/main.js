/**
 * @license Main 1.0 Variables
 * Copyright 2018 Bolt Reactor (LTD). All rights reserved.
 *
 */

$(document).ready(function() {
    //
    const $triggerCoreSideNav = $(".js-trigger-core__side-nav");
    const $indexNaveContainer = $(".js-index--nav-container");
    const $indexNavToggleOverlay = $(".js-toggle-overlay");
    const $hideBodyOverflow = $(".js-hide-overflow");
    $triggerCoreSideNav.click(function() {
        $indexNaveContainer.toggleClass('index--nav-container-not-hidden');
        $indexNavToggleOverlay.toggleClass('is-active');
        $hideBodyOverflow.toggleClass('md-overflow-hidden');
    });
    $indexNavToggleOverlay.click(function() {
        $indexNaveContainer.toggleClass('index--nav-container-not-hidden');
        $indexNavToggleOverlay.toggleClass('is-active');
        $hideBodyOverflow.toggleClass('md-overflow-hidden');
    });
});

$(document).ready(function() {
    //
    $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    const $toggleIndexInfoBanner = $(".js-toggle-index-info-banner");
    const $toggleIndexDashboardBar = $(".js-toggle-dashboard-bar");
    const $toggleIndexInfoHeader = $(".js-toggle-header-lg-sm");
    if (scroll >= 150) {
        $toggleIndexInfoBanner.addClass('index--info-small');
        $toggleIndexDashboardBar.addClass('index--dashboard-bar-small');
        $toggleIndexInfoHeader.addClass('index--info__header-sm');
        $toggleIndexInfoHeader.removeClass('index--info__header-lg');

    }
    if (scroll <= 150) {
        $toggleIndexInfoBanner.removeClass('index--info-small');
        $toggleIndexDashboardBar.removeClass('index--dashboard-bar-small');
        $toggleIndexInfoHeader.addClass('index--info__header-lg');
        $toggleIndexInfoHeader.removeClass('index--info__header-sm');
    }
    });
});

// $(document).ready(function() {
//     //
//     const $drawerTrigger = $('#js-trigger-drawer');
//     const $drawerNav = $('#js-drawer-nav');
//     const $drawerExtendedMain = $('#js-drawer-extended-main');
//     const $drawerExtendedNav = $('#js-drawer-extended-nav');
//     const $drawerTriggerIconOpen = $('#js-drawer-icon-open');
//     const $drawerTriggerIconClose = $('#js-drawer-icon-close');
//     $drawerTrigger.click(function () {
//        $drawerNav.toggleClass('md-toggle-drawer');
//        $drawerExtendedMain.toggleClass('md-toggle-drawer');
//        $drawerExtendedNav.toggleClass('md-toggle-drawer');
//        $drawerTriggerIconOpen.toggleClass('hide');
//        $drawerTriggerIconClose.toggleClass('hide');
//     });
// });

// $(document).ready(function() {
//     //
//     const $triggerClientList = $(".js-trigger-client-list");
//     const $indexClientList = $(".js-client-list");
//     const $indexNavToggleOverlay = $(".js-toggle-overlay");
//     const $hideBodyOverflow = $(".js-hide-overflow");
//     $triggerClientList.click(function() {
//         $indexClientList.addClass('list-active');
//         $indexNavToggleOverlay.addClass('is-active');
//         $hideBodyOverflow.addClass('md-overflow-hidden');
//     });
//     $indexNavToggleOverlay.click(function() {
//         $indexClientList.removeClass('list-active');
//         $indexNavToggleOverlay.removeClass('is-active');
//         $hideBodyOverflow.removeClass('md-overflow-hidden');
//     });
// });

// $(document).ready(function() {
//     //
//     const $triggerTabOne = $(".js-tab-1");
//     const $triggerTabTwo = $(".js-tab-2");
//     const $triggerTabThree = $(".js-tab-3");
//     const $tabPanelOne = $("#tab-1");
//     const $tabPanelTwo = $("#tab-2");
//     const $tabPanelThree = $("#tab-3");
//     $triggerTabOne.click(function() {
//         $tabPanelOne.addClass('is-active');
//         $tabPanelTwo.removeClass('is-active');
//         $tabPanelThree.removeClass('is-active');
//     });
//     $triggerTabTwo.click(function() {
//         $tabPanelTwo.addClass('is-active');
//         $tabPanelOne.removeClass('is-active');
//         $tabPanelThree.removeClass('is-active');
//     });
//     $triggerTabThree.click(function() {
//         $tabPanelOne.removeClass('is-active');
//         $tabPanelTwo.removeClass('is-active');
//         $tabPanelThree.addClass('is-active');
//     });
// });

$(document).ready(function() {
    const $buttonOne = $(".noTopic");
    const $buttonTwo = $('.allStudents');
    const $buttonThree = $('.noDueDate');
    const $ConOne = $('.Example');
    const $ConTwo = $('.Example1');
    const $ConThree = $('.Example2');
    $buttonOne.click(function () {
        console.log("test");
        $ConTwo.removeClass('in');
        $ConThree.removeClass('in');
    });
    $buttonTwo.click(function () {
        $ConOne.removeClass('in');
        $ConThree.removeClass('in');
    });
    $buttonThree.click(function () {
        $ConOne.removeClass('in');
        $ConTwo.removeClass('in');
    });
    console.log("Green");
});

$(document).ready(function() {
    const $triggerModal = $(".triggerModal");
    const $modalContainer = $('.modal-container');
    $triggerModal.click(function () {
        $modalContainer.toggleClass('visible');
    });
});