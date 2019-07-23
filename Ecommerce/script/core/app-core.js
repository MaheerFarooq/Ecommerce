/**
 * @license Classroom 1.0 Variables
 * Copyright 2018 Bolt Reactor (LTD) - KOMPASSERA (LTD). All rights reserved.
 *
 */

// Rules for primary side-navigation.
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

// Rules for rolling dashboard.
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

// Rules for secondary side-navigation.
$(document).ready(function() {
    //
    const $triggerClientList = $(".js-trigger-client-list");
    const $indexClientList = $(".js-client-list");
    const $indexNavToggleOverlay = $(".js-toggle-overlay");
    const $hideBodyOverflow = $(".js-hide-overflow");
    const $hideIconXsm = $(".js-hide-xsm__overlay")
    $triggerClientList.click(function() {
        $indexClientList.addClass('list-active');
        $indexNavToggleOverlay.addClass('is-active');
        $hideBodyOverflow.addClass('md-overflow-hidden');
        $hideIconXsm.addClass('hide--xs');
    });
    $indexNavToggleOverlay.click(function() {
        $indexClientList.removeClass('list-active');
        $indexNavToggleOverlay.removeClass('is-active');
        $hideBodyOverflow.removeClass('md-overflow-hidden');
        $hideIconXsm.removeClass('hide--xs');
    });
});

// Rules for toggle tabs.
$(document).ready(function() {
    //
    const $triggerTabOne = $(".js-tab-1");
    const $triggerTabTwo = $(".js-tab-2");
    const $tabPanelOne = $("#tab-1");
    const $tabPanelTwo = $("#tab-2");
    $triggerTabOne.click(function() {
        $tabPanelOne.addClass('is-active');
        $tabPanelTwo.removeClass('is-active');
    });
    $triggerTabTwo.click(function() {
        $tabPanelTwo.addClass('is-active');
        $tabPanelOne.removeClass('is-active');
    });
});

// Rules for rolling top-navigation.
$(document).ready(function() {
    //
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        const $fixHeaderOnScroll = $(".js-fix-header-on-scroll");
        if (scroll >= 50) {
            $fixHeaderOnScroll.addClass('is-active--scroll');
        }
        if (scroll <= 50) {
            $fixHeaderOnScroll.removeClass('is-active--scroll');
        }
    });
});

// Rules for hover-toggle-side-navigation.
$(document).ready(function() {
    //
    const $drawerTrigger = $('#js-trigger-drawer');
    const $drawerNav = $('#js-drawer-nav');
    const $drawerExtendedMain = $('#js-drawer-extended-main');
    const $drawerExtendedNav = $('#js-drawer-extended-nav');
    const $drawerTriggerIconOpen = $('#js-drawer-icon-open');
    const $drawerTriggerIconClose = $('#js-drawer-icon-close');
    $drawerTrigger.click(function () {
       $drawerNav.toggleClass('md-toggle-drawer');
       $drawerExtendedMain.toggleClass('md-toggle-drawer');
       $drawerExtendedNav.toggleClass('md-toggle-drawer');
       $drawerTriggerIconOpen.toggleClass('hide');
       $drawerTriggerIconClose.toggleClass('hide');
    });
});

// Rules for panels [Collapse].
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

// Rules for modal.
$(document).ready(function() {
    const $triggerModal = $(".triggerModal");
    const $modalContainer = $('.modal-container');
    $triggerModal.click(function () {
        $modalContainer.toggleClass('visible');
    });
});

// Rules for customize cards [hide].
$(document).ready(function() {
    // To hide the cards
    const $hideThisCardTutorial = $(".js-hide-me-tutorial");
    const $hideThisCardNews = $(".js-hide-me-news");
    const $actionToHideCardNews = $(".js-demo-hidden-news");
    const $actionToHideCardTutorial = $(".js-demo-hidden-tutorial");
    // To show the cards
    const $reverseThisCardNews = $(".js-reverse-demo-card-news");
    const $hiddenCardReversed = $(".js-demo-hidden-news-reverse");
    $hideThisCardTutorial.click(function () {
        $actionToHideCardTutorial.addClass('hide');
    });
    $hideThisCardNews.click(function () {
        $actionToHideCardNews.addClass('hide');
    });
    $reverseThisCardNews.click(function () {
        $hiddenCardReversed.addClass('hide');
    });
});