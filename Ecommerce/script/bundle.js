/**
 * @license Bundle 1.0 Variables
 * Copyright 2018 Bolt Reactor (LTD). All rights reserved.
 *
 */

// Toggle side navigation
$(document).ready(function () {
    const $triggerSideNav = $(".js-trigger-side-nav");
    const $initializeSideNav = $("body");
    const $closeSideNav = $(".js-ui-mask")
    $triggerSideNav.click(function () {
        $initializeSideNav.toggleClass('nav-open');
        $initializeSideNav.toggleClass('hide-overflow');
    });
    $closeSideNav.click(function () {
        $initializeSideNav.toggleClass('nav-open');
        $initializeSideNav.toggleClass('hide-overflow');
    });
});

// Toggle hybrid side navigation
$(document).ready(function () {
    const $triggerSideNav = $(".js-trigger-side-nav--lg");
    const $toggleSideNavHybrid = $(".js-side-nav-hybrid");
    const $toggleMainHybrid = $(".js-main-hybrid");
    $triggerSideNav.click(function () {
        $toggleSideNavHybrid.toggleClass('is-hybrid');
        $toggleMainHybrid.toggleClass('is-hybrid');
    });
});

// Toggle hybrid [Tablet-Desktop] side navigation
$(document).ready(function () {
    const $triggerSideNavHdrCollapse = $(".js-trigger-side-nav-hdr-collapse");
    const $toggleSideNavHdrCollapse = $(".js-side-nav-hdr-collapse");
    const $toggleMainHdrCollapse = $(".js-main-hdr-collapse");
    $triggerSideNavHdrCollapse.click(function () {
        var mq = window.matchMedia("(min-width: 1024px)");
        if (mq.matches) {
            $toggleSideNavHdrCollapse.toggleClass('is-hybrid--desktop');
            $toggleMainHdrCollapse.toggleClass('is-hybrid--desktop');
        }
        else {
            $toggleSideNavHdrCollapse.toggleClass('is-hybrid--tablet');
            $toggleMainHdrCollapse.toggleClass('is-hybrid--tablet');
        }
    });
});

// Toggle search results map
$(document).ready(function () {
    const $toggleMap = $(".js-results__toggle-map");
    const $toggleListings = $(".js-results__toggle-content");
    const $searchResultsMap = $(".js-results__map");
    $toggleMap.click(function () {
        $searchResultsMap.css("display", "block");
        $toggleMap.addClass("hide");
        $toggleListings.removeClass("hide");
    });
    $toggleListings.click(function () {
        $searchResultsMap.css("display", "none");
        $toggleMap.removeClass("hide");
        $toggleListings.addClass("hide");
    });
});

// Select phone number
$(document).ready(function () {
    var input = document.querySelector("#phone");
    if (input !== null) {
        window.intlTelInput(input, {
            // allowDropdown: false,
            // autoHideDialCode: false,
            // autoPlaceholder: "off",
            // dropdownContainer: document.body,
            // excludeCountries: ["us"],
            // formatOnDisplay: false,
            // initialCountry: "auto",
            // geoIpLookup: function(callback) {
            //   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
            //       var countryCode = (resp && resp.country) ? resp.country : "";
            //       callback(countryCode);
            //     });
            //   },
            // hiddenInput: "full_number",
            // initialCountry: "auto",
            // localizedCountries: { 'de': 'Deutschland' },
            // nationalMode: false,
            // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
            // placeholderNumberType: "MOBILE",
            // preferredCountries: ['cn', 'jp'],
            // separateDialCode: true,
            utilsScript: "script/vendor/utils.js",
        });
    }

});

// Toggle collapse
$(document).ready(function () {
    const $triggerCollapse = $(".js-trigger-collapse");
    const $toggleCollapse = $(".js-toggle-collapse");
    const $toggleIcon = $(".js-toggle-collapse-icon");
    $triggerCollapse.click(function () {
        $toggleCollapse.toggleClass("is-collapsed");
        $toggleIcon.text(function (i, v) {
            return v === 'keyboard_arrow_down' ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
        });
    });
});

// Toggle collapse
$(document).ready(function () {
    const $triggerCollapse = $(".js-trigger-collapse__related-articles");
    const $toggleCollapse = $(".js-toggle-collapse__related-articles");
    const $toggleIcon = $(".js-toggle-collapse-icon__related-articles");
    $triggerCollapse.click(function () {
        $toggleCollapse.toggleClass("is-collapsed");
        $toggleIcon.text(function (i, v) {
            return v === 'Show Related Articles' ? 'Hide Related Articles' : 'Show Related Articles'
        });
    });
});

// Toggle edit mode
$(document).ready(function () {
    const $triggerEditName = $(".js-trigger-edit-name");
    const $inputName = $(".js-input-name");
    const $editNameActive = $(".js-edit-name-active");
    const $editNameCancel = $(".js-edit-name-cancel");
    $triggerEditName.click(function () {
        $inputName.toggleClass("hide");
        $editNameActive.toggleClass("is-hidden")
    });
    $editNameCancel.click(function () {
        $inputName.toggleClass("hide");
        $editNameActive.toggleClass("is-hidden")
    });
});

// Toggle search widget
$(document).ready(function () {
    const $openSearchWidget = $(".js-open--search-widget");
    const $closeSearchWidget = $(".js-close--search-widget");
    const $togglePrimaryHeader = $(".js-toggle--hdr-pro");
    const $toggleSearchWidgetHeader = $(".js-toggle--hdr-search-widget");
    const $lightBoxSearch = $(".js-light-box--search");
    const $closeSearchWidgetLightBox = $(".js-search-light-box");
    const $hideOverflow = $("body");
    $openSearchWidget.click(function () {
        $togglePrimaryHeader.toggleClass("hide");
        $toggleSearchWidgetHeader.toggleClass("hide");
        $lightBoxSearch.toggleClass("is-active");
        $hideOverflow.toggleClass('hide-overflow');
    });
    $closeSearchWidget.click(function () {
        $togglePrimaryHeader.toggleClass("hide");
        $toggleSearchWidgetHeader.toggleClass("hide");
        $lightBoxSearch.toggleClass("is-active");
        $hideOverflow.toggleClass('hide-overflow');
    });
    $closeSearchWidgetLightBox.click(function () {
        $togglePrimaryHeader.toggleClass("hide");
        $toggleSearchWidgetHeader.toggleClass("hide");
        $lightBoxSearch.toggleClass("is-active");
        $hideOverflow.toggleClass('hide-overflow');
    });
});

// Toggle class 'is-selected'
$(document).ready(function () {
    $(function () {
        $('.js-menu-underlined--auto li a').on('click', function () {
            $(this).parent().addClass('is-selected').siblings().removeClass('is-selected');
        });
    });
});

// Toggle Loader
$(document).ready(function () {
    $(function () {
        const $activateLoader = $(".js-activate-loader");
        $activateLoader.click(function () {
            $activateLoader.addClass('is-loading');
            setTimeout(function () {
                $activateLoader.removeClass('is-loading');
            }, 2000);
        });
    });
    $(function () {
        const $activateLoader = $(".js-activate-loader__button");
        $activateLoader.click(function () {
            $activateLoader.addClass('is-loading');
            setTimeout(function () {
                $activateLoader.removeClass('is-loading');
            }, 2000);
        });
    });
    $(function () {
        const $activateLoaderFullScreen = $(".js-activate-loader__full-screen");
        const $loaderFullScreen = $(".js-loader__full-screen");
        $activateLoaderFullScreen.click(function () {
            $loaderFullScreen.addClass('is-loading');
            setTimeout(function () {
                $loaderFullScreen.removeClass('is-loading');
            }, 2000);
        });
    });
});

// Copy to Clipboard
$(document).ready(function () {
    //
    if ($('#copyButton').length > 0) {
        document.getElementById("copyButton").addEventListener("click", function () {
            copyToClipboard(document.getElementById("copyTarget"));
        });
    }

    $(function () {
        const $copyButton = $(".js-copy-button");
        $copyButton.click(function () {
            $copyButton.text(function (i, v) {
                return v === 'Link Copied' ? 'Link Copy' : 'Link Copied'
            });
        });
    });

    //
    function copyToClipboard(elem) {
        // create hidden text element, if it doesn't already exist
        var targetId = "_hiddenCopyText_";
        var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
        var origSelectionStart, origSelectionEnd;
        if (isInput) {
            // can just use the original source element for the selection and copy
            target = elem;
            origSelectionStart = elem.selectionStart;
            origSelectionEnd = elem.selectionEnd;
        } else {
            // must use a temporary form element for the selection and copy
            target = document.getElementById(targetId);
            if (!target) {
                var target = document.createElement("textarea");
                target.style.position = "absolute";
                target.style.left = "-9999px";
                target.style.top = "0";
                target.id = targetId;
                document.body.appendChild(target);
            }
            target.textContent = elem.textContent;
        }
        // select the content
        var currentFocus = document.activeElement;
        target.focus();
        target.setSelectionRange(0, target.value.length);

        // copy the selection
        var succeed;
        try {
            succeed = document.execCommand("copy");
        } catch (e) {
            succeed = false;
        }
        // restore original focus
        if (currentFocus && typeof currentFocus.focus === "function") {
            currentFocus.focus();
        }

        if (isInput) {
            // restore prior selection
            elem.setSelectionRange(origSelectionStart, origSelectionEnd);
        } else {
            // clear temporary content
            target.textContent = "";
        }
        return succeed;
    }
});

// Carousel Related Links
$(document).ready(function () {
    var swiper = new Swiper('.js-swiper-container__related-articles', {
        slidesPerView: 4,
        spaceBetween: 30,
        // init: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            }
        }
    });
});

// Carousel Sample1
$(document).ready(function () {
    var swiper = new Swiper('.js-swiper-container__sample1', {
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
        speed: 700,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

// Bootstrap Dropdown on Click
$(document).ready(function () {
    //
    $('.boot-dropdown-menu a').on('click', function (event) {
        $(this).parent().toggleClass('open');
    });
    //
    $('body').on('click', function (e) {
        if (!$('.boot-dropdown-menu').is(e.target)
            && $('.boot-dropdown-menu').has(e.target).length === 0
            && $('.open').has(e.target).length === 0
        ) {
            $('.boot-dropdown-menu').removeClass('open');
        }
    });
});

// $(document).ready(function () {
//     const $dropdownTrigger = $(".js-dropdown-menu__trigger");
//     const $dropdownContent = $(".js-dropdown-menu__content");
//     $dropdownTrigger.click(function () {
//         $dropdownContent.toggleClass("show");
//     });
//
//     // Close the dropdown if the user clicks outside of it
//     // var box = document.querySelector(".app-notifications__dropdown");
//     var boxContent = document.querySelector(".js-dropdown-menu__content");
//
//     // Detect all clicks on the document
//     document.addEventListener("click", function(event) {
//         // If user clicks inside the element, do nothing
//         if (event.target.closest(".app-notifications__dropdown")) return;
//
//         // If user clicks outside the element, hide it!
//         boxContent.classList.remove("show");
//     });
//
// });

// Hide Header on Scroll
// $(document).ready(function () {
//     var prevScrollpos = window.pageYOffset;
//     window.onscroll = function() {
//         var currentScrollPos = window.pageYOffset;
//         if (prevScrollpos > currentScrollPos) {
//             document.getElementById("navbar").style.top = "0";
//         } else {
//             document.getElementById("navbar").style.top = "-130px";
//         }
//         prevScrollpos = currentScrollPos;
//     }
// });

// // Toggle password
// $(document).ready(function () {
//    function myFunction() {
//        var x = document.getElementById("user-pwd");
//        if (x.type === "password") {
//            x.type = "text";
//        } else {
//            x.type = "password";
//        }
//    }
// });

// $(document).ready(function () {
//     var prevScrollpos = window.pageYOffset;
//     window.onscroll = function() {
//         var currentScrollPos = window.pageYOffset;
//         if (prevScrollpos > currentScrollPos) {
//             document.getElementById("navbar").style.top = "0";
//         } else {
//             document.getElementById("navbar").style.top = "-130px";
//         }
//         prevScrollpos = currentScrollPos;
//     }
// });

// var mq = window.matchMedia( "(max-width: 570px)" );
// if (mq.matches) {
//     // window width is at less than 570px
// }
// else {
//     // window width is greater than 570px
// }

// Sample
// $(document).ready(function () {
//     const $camelCase = $(".js-class-name");
//     $camelCase.click(function () {
//         $camelCase.toggleClass("class");
//     });
// });

// $(document).ready(function () {
//
// });