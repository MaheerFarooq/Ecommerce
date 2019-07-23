var saveExitCheck = 0;
$(document).ready(function () {
    componentHandler.upgradeDom();
    if ($('#edit-listing').length > 0) {
        $('.listing-key').val($('#listing-key').val());
        $("#p1").find(".progressbar").css({"width": "14%"});
        $(".listing-back").addClass("hide");

    }
    autocomplete = new google.maps.places.Autocomplete(
        (document.getElementById('search-places')),
        {types: ['(cities)']});

    $("#save-exit").on("click", function () {
        saveExitCheck = 1;
        $(".save-quit").trigger("click");
    });
});
$(document).on("click", "#listing-step1", function (ev) {
    ev.preventDefault();
    $.ajax({
        type: 'POST',
        url: '/listing-step1',
        data: {'listing-key': $('.listing-key').val()},
        success: function (data) {
            $('#listing-container').html(data);
            $('.listing-key').val($('#listing-key').val());
            $("#p1").find(".progressbar").css({"width": "14%"});
            $(".listing-back").addClass("hide");
            componentHandler.upgradeDom();
            $.validate({
                form: '#listing-step1-form'
            });
        }
    });
});

$(document).on("click", "#listing-step2", function () {
    if ($('#listing-step1-form').isValid() === true) {
        $.ajax({
            type: 'POST',
            url: '/listing-step2',
            data: $('#listing-step1-form').serialize() + "&listing-key=" + $('.listing-key').val(),
            success: function (data) {
                if (saveExitCheck === 1) {
                    window.location.href = '/listings';
                }else {
                    $('#listing-container').html(data);
                    $("#p1").find(".progressbar").css({"width": "28%"});
                    $(".listing-back").removeClass("hide").find("a").attr('id', 'listing-step1');
                    componentHandler.upgradeDom();
                    $.validate({
                        form: '#listing-step2-form'
                    });
                }
            }
        });
    }

});

$(document).on("click", "#listing-step3", function () {
    if ($('#listing-step2-form').isValid() === true) {
        $.ajax({
            type: 'POST',
            url: '/listing-step3',
            data: $('#listing-step2-form').serialize() + "&listing-key=" + $('.listing-key').val(),
            success: function (data) {
                 if (saveExitCheck === 1) {
                    window.location.href = '/listings';
                }else {
                     $('#listing-container').html(data);
                     $("#p1").find(".progressbar").css({"width": "42%"});
                     $(".listing-back").removeClass("hide").find("a").attr('id', 'listing-step2');
                     componentHandler.upgradeDom();
                     addAutofillDropdownToStreet();
                     $.validate({
                         form: '#listing-step3-form'
                     });
                 }
            }
        });
    }
});

$(document).on("click", "#listing-step4", function () {
    if ($('#listing-step3-form').isValid() === true) {
        $.ajax({
            type: 'POST',
            url: '/listing-step4',
            data: $('#listing-step3-form').serialize() + "&listing-key=" + $('.listing-key').val(),
            success: function (data) {
                 if (saveExitCheck === 1) {
                    window.location.href = '/listings';
                }else {
                     $('#listing-container').html(data);
                     $("#p1").find(".progressbar").css({"width": "56%"});
                     $(".listing-back").removeClass("hide").find("a").attr('id', 'listing-step3');
                     componentHandler.upgradeDom();
                     initialize();
                     $.validate({
                         form: '#listing-step4-form'
                     });
                 }
            }
        });
    }
});

$(document).on("click", "#listing-step5", function () {
    if ($('#listing-step4-form').isValid() === true) {
        $.ajax({
            type: 'POST',
            url: '/listing-step5',
            data: $('#listing-step4-form').serialize() + "&listing-key=" + $('.listing-key').val(),
            success: function (data) {
                 if (saveExitCheck === 1) {
                    window.location.href = '/listings';
                }else {
                     $('#listing-container').html(data);
                     $("#p1").find(".progressbar").css({"width": "70%"});
                     $(".listing-back").removeClass("hide").find("a").attr('id', 'listing-step4');
                     componentHandler.upgradeDom();
                     $('.listing-key').val($('#listing-key').val());
                 }
            }
        });
    }
});

$(document).on("click", "#listing-step6", function () {
    $.ajax({
        type: 'POST',
        url: '/listing-step6',
        data: {'listing-key': $('.listing-key').val()},
        success: function (data) {
             if (saveExitCheck === 1) {
                    window.location.href = '/listings';
                }else {
                 $('#listing-container').html(data);
                 $("#p1").find(".progressbar").css({"width": "80%"});
                 $(".listing-back").removeClass("hide").find("a").attr('id', 'listing-step5');
                 $('#calender-layout').addClass('md-calendar');
                 componentHandler.upgradeDom();
                 InitializeCalender();
             }
        }
    });
});

$(document).on("click", "#listing-step-teaching-place", function () {
    $.ajax({
        type: 'POST',
        url: '/listing-step-teaching-place',
        data: {'listing-key': $('.listing-key').val()},
        success: function (data) {
             if (saveExitCheck === 1) {
                    window.location.href = '/listings';
                }else {
                 $('#listing-container').html(data);
                 $("#p1").find(".progressbar").css({"width": "100%"});
                 $(".listing-back").removeClass("hide").find("a").attr('id', 'listing-step6');
                 $('#calender-layout').removeClass('md-calendar');
                 componentHandler.upgradeDom();
             }
        }
    });
});


$(document).on("click", "#listing-step7", function () {
    if ($('#directed-by-teacher').prop("checked") === true ||
        $('#directed-by-student').prop("checked") === true ||
        $('#remotely').prop("checked") === true) {
        $.ajax({
            type: 'POST',
            url: '/listing-step7',
            data: $('#listing-teaching-place-form').serialize() + "&listing-key=" + $('.listing-key').val(),
            success: function (data) {
                 if (saveExitCheck === 1) {
                    window.location.href = '/listings';
                }else {
                     $('#listing-container').html(data);
                     $("#p1").find(".progressbar").css({"width": "90%"});
                     $(".listing-back").removeClass("hide").find("a").attr('id', 'listing-step-teaching-place');
                     // $('#calender-layout').removeClass('md-calendar');
                     componentHandler.upgradeDom();
                     $.validate({
                         form: '#listing-step7-form'
                     });
                 }
            }
        });
    } else {
        $('#subject-error-place').html('Kindly select one of the value');
    }
});

$(document).on("click", "#publish-listing", function () {
    if ($('#listing-step7-form').isValid() === true) {
        $.ajax({
            type: 'POST',
            url: '/listing-step8',
            data: $('#listing-step7-form').serialize() + "&listing-key=" + $('.listing-key').val(),
            success: function (data) {
                window.location.href = window.location.origin + "/listings";
            }
        });
    }
});

//////////////////////////////////////////////////////////Map Section Start/////////////////////////////////////////////////////////////
var geocoder, map, marker, cityCircle;
var mapOptions = {
    zoom: 15
};

function geolocate() {
}

function addAutofillDropdownToStreet() {
    $('#js_listings_street_line_1').prop("placeholder", "");
    autocomplete = new google.maps.places.Autocomplete(
        (document.getElementById('js_listings_street_line_1')),
        {types: ['geocode']});
    autocomplete.addListener('place_changed', function () {
        var place = autocomplete.getPlace();
        $('.street-address-lat').val(place.geometry.location.lat());
        $('.street-address-lng').val(place.geometry.location.lng());
        geocoder = new google.maps.Geocoder();
        geocodeLatLng(geocoder, null, null, place.geometry.location.lat(), place.geometry.location.lng());
    });
    // $('#js_listings_street_line_1').on("blur", function () {
    //     if ($('#js_listings_street_line_1').val() === "") {
    //         alert("")
    //     }
    // });
}


function initialize(drag) {
    drag = drag == true ? true : false;
    geocoder = new google.maps.Geocoder();
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    codeAddress(drag);
}

function codeAddress(drag) {
    latitude = ($('.street-address-lat').val()).toString();
    longitude = ($('.street-address-lng').val()).toString();
    if (latitude.length > 3) {
        var pos = {
            lat: parseFloat($('.street-address-lat').val()),
            lng: parseFloat($('.street-address-lng').val())
        };
        map.setCenter(pos);
        map.panTo(pos);
        if (marker)
            marker.setMap(null);
        if (drag) {
            marker = new google.maps.Marker({
                map: map,
                position: pos,
            });
        } else {
            marker = new google.maps.Marker({
                map: map,
                position: pos,
                draggable: true
            });
        }
        if (cityCircle)
            cityCircle.setMap(null);
        cityCircle = new google.maps.Circle({
            strokeColor: '#ff6c64',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#f8c2bc',
            fillOpacity: 0.35,
            map: map,
            center: pos,
            radius: 100.45454,
            draggable: true
        });
        marker.addListener('drag', function (event) {
            cityCircle.setOptions({center: {lat: event.latLng.lat(), lng: event.latLng.lng()}});
        });
        google.maps.event.addListener(marker, "dragend", function () {
            document.getElementById('lat').value = marker.getPosition().lat();
            document.getElementById('lng').value = marker.getPosition().lng();
            $('.street-address-lat').val(marker.getPosition().lat());
            $('.street-address-lng').val(marker.getPosition().lng());
            geocodeLatLng(geocoder, map, null, marker.getPosition().lat(), marker.getPosition().lng());
        });
        if ($('#lat').length > 0) {
            document.getElementById('lng').value = marker.getPosition().lng();
            document.getElementById('lat').value = marker.getPosition().lat();
        }
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                geocodeLatLng(geocoder, map, null, position.coords.latitude, position.coords.longitude);


            }, function () {
                handleLocationError(true, infoWindow, map.getCenter());
            });
        }
    }
}

function geocodeLatLng(geocoder, map, infowindow, latitude, longitude) {
    // console.log(arguments)
    var latlng = {lat: latitude, lng: longitude};
    geocoder.geocode({'location': latlng}, function (results, status) {

        if (status === 'OK') {
            a = results.length;
            if ($('#auto-computed-city').length > 0) {
                document.getElementById('auto-computed-city').value = results[a - 3].formatted_address.split(',')[0];
                document.getElementById('auto-computed-state').value = results[a - 2].formatted_address.split(',')[0];
                document.getElementById('auto-computed-country').value = results[a - 1].formatted_address.split(',')[0];
                document.getElementById('auto-computed-street-address').value = results[0].formatted_address;
            }
        } else {
            toast("Browser does not support geolocation!!!", "OKAY")
        }
    });
}

/////////////////////////////////////////////////////////Map Section End/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////Photos Section Start///////////////////////////////////////////////////
function getUrl() {
    // $(".divloading").show();
    var url = null;
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

function emptyValue() {
    this.value = null;
}

function sendFilesAjax(id) {
    var files;
    // $('#create-pictures').html('<div class="mdl-spinner mdl-js-spinner is-active"></div>');
    files = $('#listing-images')[0].files;
    var url = "";
    for (i = 0; i < files.length; i++) {
        url = getUrl();
        sendFiles(url, files[i], id);
    }
    getPreviousImages(null);

    this.value = null;
}

function sendFiles(url, file, id) {
    var formData = new FormData($("form")[0]);
    formData.append("file", file);
    formData.append("id", id);
    formData.append("listing-key", $('#listing-key').val());
    $.ajax({
        type: 'POST',
        url: url,
        processData: false,
        contentType: false,
        async: false,
        data: formData,
        success: function (data) {
        }
    });

}

function getPreviousImages(key_for_del) {
    $.ajax({
        type: 'GET',
        url: '/listing/get-previous-images',
        data: {'listing-key': $('#listing-key').val(), 'key_for_del': key_for_del},
        success: function (data) {
            $('#listing-images-display').html(data);
            $('.update-caption-image').on('change', function () {
                $.ajax({
                    type: 'POST',
                    url: '/listing/update-image-caption',
                    data: {'caption': this.value, 'image-key': $(this).closest('div').find('#img-key').val()},
                    async: true,
                    success: function (data) {
                        // console.log(data)
                    }
                });
            });
            // $(".divloading").hide();
        }
    });
}

/////////////////////////////////////////////////////////Photos Section End///////////////////////////////////////////////////

