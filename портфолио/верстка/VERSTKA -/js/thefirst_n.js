/*
 * 	Easy Slider 1.7 - jQuery plugin
 *	written by Alen Grakalic
 *	http://cssglobe.com/post/4004/easy-slider-15-the-easiest-jquery-plugin-for-sliding
 *
 *	Copyright (c) 2009 Alen Grakalic (http://cssglobe.com)
 *	Dual licensed under the MIT (MIT-LICENSE.txt)
 *	and GPL (GPL-LICENSE.txt) licenses.
 *
 *	Built for jQuery library
 *	http://jquery.com
 *
 */

/*
 *	markup example for $("#slider").easySlider();
 *
 * 	<div id="slider">
 *		<ul>
 *			<li><img src="images/01.jpg" alt="" /></li>
 *			<li><img src="images/02.jpg" alt="" /></li>
 *			<li><img src="images/03.jpg" alt="" /></li>
 *			<li><img src="images/04.jpg" alt="" /></li>
 *			<li><img src="images/05.jpg" alt="" /></li>
 *		</ul>
 *	</div>
 *
 */

(function ($) {

    $.fn.easySlider = function (options) {

        // default configuration properties
        var defaults = {
            prevId: 'prevBtn',
            prevText: '',
            nextId: 'nextBtn',
            nextText: '',
            controlsShow: true,
            controlsBefore: '',
            controlsAfter: '',
            controlsFade: false,
            firstId: 'firstBtn',
            firstText: 'First',
            firstShow: false,
            lastId: 'lastBtn',
            lastText: 'Last',
            lastShow: false,
            vertical: false,
            speed: 200,
            auto: false,
            pause: 3000,
            continuous: false,
            numeric: false,
            numericId: 'controls'
        };

        var options = $.extend(defaults, options);

        this.each(function () {
            var obj = $(this);
            var s = $("li", obj).length;
            var w = $("li", obj).width();
            var h = $("li", obj).height();
            var clickable = true;
            obj.width(w);
            obj.height(h);
            obj.css("overflow", "visible");
            var ts = s - 1;
            var t = 0;
            $("ul", obj).css('width', s * w);

            if (options.continuous) {
                $("ul", obj).prepend($("ul li:last-child", obj).clone().css("margin-left", "-" + w + "px"));
                $("ul", obj).append($("ul li:nth-child(2)", obj).clone());
                $("ul", obj).css('width', (s + 1) * w);
            }
            ;

            if (!options.vertical) $("li", obj).css('float', 'left');

            if (options.controlsShow) {
                var html = options.controlsBefore;
                if (options.numeric) {
                    html += '<ol id="' + options.numericId + '"></ol>';
                } else {
                    if (options.firstShow) html += '<span id="' + options.firstId + '"><a href=\"javascript:void(0);\">' + options.firstText + '</a></span>';
                    html += ' <span id="' + options.prevId + '"><a href=\"javascript:void(0);\">' + options.prevText + '</a></span>';
                    html += ' <span id="' + options.nextId + '"><a href=\"javascript:void(0);\">' + options.nextText + '</a></span>';
                    if (options.lastShow) html += ' <span id="' + options.lastId + '"><a href=\"javascript:void(0);\">' + options.lastText + '</a></span>';
                }
                ;

                html += options.controlsAfter;
                $(obj).after(html);
            }
            ;

            if (options.numeric) {
                for (var i = 0; i < s; i++) {
                    $(document.createElement("li"))
                        .attr('id', options.numericId + (i + 1))
                        .html('<a rel=' + i + ' href=\"javascript:void(0);\">' + (i + 1) + '</a>')
                        .appendTo($("#" + options.numericId))
                        .click(function () {
                            animate($("a", $(this)).attr('rel'), true);
                        });
                }
                ;
            } else {
                $("a", "#" + options.nextId).click(function () {
                    animate("next", true);
                });
                $("a", "#" + options.prevId).click(function () {
                    animate("prev", true);
                });
                $("a", "#" + options.firstId).click(function () {
                    animate("first", true);
                });
                $("a", "#" + options.lastId).click(function () {
                    animate("last", true);
                });
            }
            ;

            function setCurrent(i) {
                i = parseInt(i) + 1;
                $("li", "#" + options.numericId).removeClass("current");
                $("li#" + options.numericId + i).addClass("current");

                $('.notebook .notebook_text span.text').removeClass('active');
                $('.notebook .notebook_text span.text[data-id="' + i + '"]').addClass('active');
            };

            function adjust() {
                if (t > ts) t = 0;
                if (t < 0) t = ts;
                if (!options.vertical) {
                    $("ul", obj).css("margin-left", (t * w * -1));
                } else {
                    $("ul", obj).css("margin-left", (t * h * -1));
                }
                clickable = true;
                if (options.numeric) setCurrent(t);
            };

            function animate(dir, clicked) {
                if (clickable) {
                    clickable = false;
                    var ot = t;
                    switch (dir) {
                        case "next":
                            t = (ot >= ts) ? (options.continuous ? t + 1 : ts) : t + 1;
                            break;
                        case "prev":
                            t = (t <= 0) ? (options.continuous ? t - 1 : 0) : t - 1;
                            break;
                        case "first":
                            t = 0;
                            break;
                        case "last":
                            t = ts;
                            break;
                        default:
                            t = dir;
                            break;
                    }
                    ;
                    var diff = Math.abs(ot - t);
                    var speed = diff * options.speed;
                    if (!options.vertical) {
                        p = (t * w * -1);
                        $("ul", obj).animate(
                            { marginLeft: p },
                            { queue: false, duration: speed, complete: adjust }
                        );
                    } else {
                        p = (t * h * -1);
                        $("ul", obj).animate(
                            { marginTop: p },
                            { queue: false, duration: speed, complete: adjust }
                        );
                    }
                    ;

                    if (!options.continuous && options.controlsFade) {
                        if (t == ts) {
                            $("a", "#" + options.nextId).hide();
                            $("a", "#" + options.lastId).hide();
                        } else {
                            $("a", "#" + options.nextId).show();
                            $("a", "#" + options.lastId).show();
                        }
                        ;
                        if (t == 0) {
                            $("a", "#" + options.prevId).hide();
                            $("a", "#" + options.firstId).hide();
                        } else {
                            $("a", "#" + options.prevId).show();
                            $("a", "#" + options.firstId).show();
                        }
                        ;
                    }
                    ;

                    if (clicked) clearTimeout(timeout);
                    if (options.auto && dir == "next" && !clicked) {
                        ;
                        timeout = setTimeout(function () {
                            animate("next", false);
                        }, diff * options.speed + options.pause);
                    }
                    ;

                }
                ;

            };
            // init
            var timeout;
            if (options.auto) {
                ;
                timeout = setTimeout(function () {
                    animate("next", false);
                }, options.pause);
            }
            ;

            if (options.numeric) setCurrent(0);

            if (!options.continuous && options.controlsFade) {
                $("a", "#" + options.prevId).hide();
                $("a", "#" + options.firstId).hide();
            }
            ;

        });

    };

})(jQuery);

var Form = function () {
    var $form = null;
    var need_sms_activation = false;
    var submitted = 1;
    var urls = [
        '/request/only_register/',
        '/request/new/'
    ];

    var redirect_choices = {
        0: '/accept/',
        1: '/accept/',
        2: window.location.pathname + 'success/',
        3: window.location.pathname + 'success/'
    };
    var redirect_choice = 1;

    this.init = function (element) {
        $form = $(element);
        if ($form.find("input[name=need_redirect]").val() != 0) {
            redirect_choice = $form.find("input[name=need_redirect]").val();
        }
        if ($form.has('[data-sms]').length) {
            need_sms_activation = true;
            submitted = 0;
        }

        $form.find('input[name=eventChanger]').click(function () {
            console.log(111);
            $this = $(this);
            $form.find('input[name="event_id"]').attr('value', $this.data('event'));
            $form.find('input[name="product_id"]').attr('value', $this.data('product'));
            $form.find('input[name="redirect"]').attr('value', $this.data('redirect'));
            $form.find('input[name="need_redirect"]').attr('value', $this.data('need_redirect'));
            $form.find('#formEventName').text($this.data('event_name'));
            $form.find('#formEventPrice').text($this.data('event_price'));
        });

        $form.attr('onsubmit', '');
        $form.on('submit', function (e) {
            e.preventDefault();
            submitMainForm();
        });

        $('[data-updatecaptcha]').live('click', function (e) {
            e.preventDefault();
            updateCaptcha();
        });

        $('[data-resendsms]').live('click', function (e) {
            e.preventDefault();
            updatePhoneArea();
        });

    };

    var updatePhoneArea = function () {
        $form.find('input[name=firstname]').attr('readonly', 'readonly');
        $form.find('input[name=email]').attr('readonly', 'readonly');

        $.ajax({
            cache: false,
            url: '/request/phone_activation/',
            type: 'POST',
            timeout: 10000,
            data: {
                phone_country: $form.find('input[name=phone_country_code]').val(),
                phone_code: $form.find('input[name=phone_code]').val(),
                phone: $form.find('input[name=phone]').val(),
                page_id: $form.find('input[name=event_id]').val()
            },
            success: fillPhoneArea,
            error: showTimeoutError
        });
    };

    var fillPhoneArea = function (data) {
        hideLoading();
        if (data.status == 'success') {
            $form.find('[data-sms]').html(data.message);
        } else {
            $.fancybox(
                data.message,
                {
                    showCloseButton: true,
                    overlayColor: "#000000",
                    overlayOpacity: 0.5,
                    padding: 50
                }
            );
        }

        var submitButton = $form.find('button[type=submit]');
        $form.off('submit');
        $(submitButton).text('Отправить');

        if ($form.find('.user-captcha').length) {
            $form.on('submit', function (e) {
                e.preventDefault();
                submitCaptchaForm();
            });
        } else if ($form.find(".activation_phone_accepted").length) {
            $(submitButton).hide();
            submitted = 1;
            submitMainForm();
        } else {
            $form.on('submit', function (e) {
                e.preventDefault();
                submitPhoneActivationForm();
            });
        }
    };

    var updateCaptcha = function () {
        var src = $form.find('.user-captcha').attr('src') + '?rnd=' + Math.random();
        $form.find('.user-captcha').attr('src', src);
    };

    var showLoading = function () {
        $.fancybox(
            'Идет обработка запроса',
            {
                modal: true,
                overlayColor: "#000000",
                overlayOpacity: 0.5,
                padding: 50,
                centerOnScroll: true
            }
        );
    };

    var showTimeoutError = function (message, errorCode) {
        if (message instanceof Object) {
            message = 'Попробуйте отправить форму повторно';
        }
        message = message || 'Попробуйте отправить форму повторно';
        title = 'Извините, произошла ошибка.<br>'
        if (errorCode) {
            if (errorCode == 6) {
                title = 'Операция выполнена успешно.<br/>'
            }
        }
        setTimeout(function () {
            $.fancybox(
                    title + message,
                {
                    showCloseButton: true,
                    overlayColor: "#000000",
                    overlayOpacity: 0.5,
                    padding: 50
                }
            );
        }, 300);

    };

    var hideLoading = function () {
        setTimeout(function () {
            $.fancybox.close();
        }, 300);
    };

    var submitCaptchaForm = function () {
        if (!Validator.isValid($form)) {
            return false;
        }

        $.ajax({
            cache: false,
            url: '/request/phone_activation/',
            type: 'POST',
            timeout: 10000,
            data: {
                phone_country: $form.find('input[name=phone_country_code]').val(),
                phone_code: $form.find('input[name=phone_code]').val(),
                phone: $form.find('input[name=phone]').val(),
                captcha: $form.find('input[name=captcha]').val(),
                page_id: $form.find('input[name=event_id]').val(),
                confirm_captcha: 1
            },
            beforeSend: showLoading,
            success: fillPhoneArea,
            error: showTimeoutError
        });
    };

    var submitPhoneActivationForm = function () {
        if (!Validator.isValid($form)) {
            return false;
        }

        $.ajax({
            cache: false,
            url: '/request/phone_activation/',
            type: 'POST',
            timeout: 10000,
            data: {
                code: $form.find('input[name=phone_activation_code]').val(),
                activation_id: $form.find('input[name=phone_activation_id]').val(),
                confirm_form_send: 1
            },
            beforeSend: showLoading,
            success: fillPhoneArea,
            error: showTimeoutError
        });
    };

    var submitMainForm = function () {
        if (!Validator.isValid($form)) {
            return false;
        }

        $.ajax({
            cache: false,
            url: urls[submitted],
            timeout: 10000,
            type: 'POST',
            data: $form.serialize(),
            beforeSend: showLoading,
            success: parseRequest,
            error: showTimeoutError
        });
    };

    var parseRequest = function (request) {
        redirect_choice = $form.find("input[name=need_redirect]").attr('value');
        if (request.errorCode == 0 || request.errorCode == 3 || request.errorCode == 6) {
            showTimeoutError(request['errorMessage'], request.errorCode);
        } else {
            if ((need_sms_activation == true) && (submitted == 0)) {
                $.fancybox.close();
                updatePhoneArea();
            } else {
                var redirect = $form.find("input[name=redirect]").val();
                if (redirect == '') {
                    redirect = redirect_choices[redirect_choice];
                }
                switch (redirect_choice) {
                    case '3':
                        $.ajax({
                            url: redirect,
                            type: 'GET',
                            data: {email: $form.find("input[name=email]").val()},
                            timeout: 10000,
                            complete: function (response, responseStatus) {
                                $.fancybox.close();
                                if (responseStatus == 'success') {
                                    $form.next().remove();
                                    $form.replaceWith(response.responseText);
                                } else {
                                    alert('Произошла ошибка, попробуйте позже');
                                }
                            }
                        });
                        break;
                    case '2':
                        window.location = redirect + "?email=" + $form.find("input[name=email]").val();
                        break;
                    case '1':
                    default:
                        window.location = redirect + "?request=" + request.requestId + "&security_code=" + request.securityCode;
                }
            }
        }
    }
};

$(function () {

    // custom fancybox close button
    $(document).on('click', '.fancyboxClose', function () {
        $.fancybox.close()
    });

    $('form[data-form=request]').each(function () {
        //new Form().init(this);
        var $form = $(this);
        $('.eventChanger').click(function (e) {
            e.preventDefault()
            var $this = $(this);
            $form.find('input[name="event_id"]').attr('value', $this.data('event'));
            $form.find('input[name="product_id"]').attr('value', $this.data('product'));
            $form.find('input[name="redirect"]').attr('value', $this.data('redirect'));
            $form.find('input[name="need_redirect"]').attr('value', $this.data('need_redirect'));
            $form.find('#' + $this.data('rel')).attr('checked', 'checked');
            $form.find('#' + $this.data('rel')).attr('selected', 'selected');
            if ($this.data('authorized') == '1') {
                $form.find('input[name="ignore_allowed"]').attr('value', 1);
                $form.submit();
            } else {
                $.scrollTo($form, {duration: 500});
            }
        })
        $('.selectEventChanger').change(function (e) {
            var $this = $(this);
            $form.find('input[name="event_id"]').attr('value', $this.find(':selected').data('event'));
            $form.find('input[name="product_id"]').attr('value', $this.find(':selected').data('product'));
            $form.find('input[name="redirect"]').attr('value', $this.find(':selected').data('redirect'));
            $form.find('input[name="need_redirect"]').attr('value', $this.find(':selected').data('need_redirect'));
        })
    });


});

var Validator = {
    filters: {
        trim: function (value) {
            return jQuery.trim(value);
        },
        phoneCode: function (value) {
            if (8 == value) {
                return '+7';
            }

            var pattern = /^[0-9]{1,3}$/;
            if (pattern.test(value)) {
                return '+' + value;
            }

            return value;
        }
    },

    validators: {
        email: {
            pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Введите корректный e-mail',
            filters: ['trim']
        },
        name: {
            pattern: /^([a-zа-яA-ZА-ЯёЁ\-0-9 ]+)$/,
            message: "Введите корректное имя",
            filters: ['trim']
        },
        phone: {
            pattern: /^([0-9]+)$/,
            message: "Введите корректный телефон",
            filters: ['trim']
        },
        phone_code: {
            pattern: /^(\+[0-9]{1,3})$/,
            message: "Введите корректный код страны, например, +7",
            filters: ['trim', 'phoneCode']
        },
        partner: {
            pattern: /^([A-Za-z0-9]+)$/,
            message: "Введите корректный код партнера",
            filters: ['trim']
        },
        sms_code: {
            pattern: /^([0-9]+)$/,
            message: "Введите корректный смс код",
            filters: ['trim']
        },
        captcha: {
            pattern: /^([A-Za-z0-9]+)$/,
            message: "Введите код на картинке",
            filters: ['trim']
        }
    },

    filter: function (value, filters) {
        for (var i = 0; i < filters.length; i++) {
            var filterName = filters[i];
            value = this.filters[filterName](value);
        }

        return value;
    },

    lastError: '',

    isValid: function (element) {
        var t = this;
        var isValid = true;

        element.find('input[data-validator]').each(function () {
            var type = $(this).data('validator');
            var value = $(this).attr('value');
            var show = $(this).data('validator-show');

            if (t.validators[type] != undefined) {
                if (t.validators[type]['filters'] != undefined) {
                    value = t.filter(value, t.validators[type]['filters']);
                    $(this).attr('value', value);
                }
                if (!t.validators[type].pattern.test(value)) {
                    t.lastError = t.validators[type].message;
                    if (show == 'none') {
                        //пока так, все нормально
                    } else {
                        alert(t.lastError);
                    }
                    $(this).focus();
                    return isValid = false;
                }
            }
        });
        return isValid;
    }
};

if (typeof Bm == 'undefined') {
    Bm = {};
}

Bm.map = (function (module) {
    var map,
        placemarks = [];

    var getBalloonContent = function (cityData) {
        return '<div class="balloonHeader"><b>' + cityData.name + '</b></div>' +
            '<div class="balloonText">' + cityData.phone + '</div>' +
            (cityData.vk_link ? ('<a href="' + cityData.vk_link + '"  class="company">Группа Vk БМ-' + cityData.name + '</a>') : '');
    };

    module.init = function () {
        map = new ymaps.Map("map", {
            center: [54.83, 37.11],
            zoom: 5,
            type: 'yandex#map'
        });

        map.controls.add(
            new ymaps.control.ZoomControl()
        );

        for (var i in cities) {
            var Placement = new ymaps.Placemark([cities[i]['latitude'], cities[i]['longitude']], {
                balloonContentBody: getBalloonContent(cities[i]),
                hintContent: cities[i]['name']
            }, {
                iconImageHref: 'img/hint.png',
                iconImageSize: [50, 42],
                iconImageOffset: [-16, -39]
            });
            map.geoObjects.add(Placement);

            placemarks[cities[i]['id']] = Placement;
        }
    };

    module.showLocation = function (options) {
        var opt = $.extend({
            zoom: 16
        }, options);
        console.log(opt);

        $('html, body').animate({
            scrollTop: $("#map_bm").offset().top
        }, 800);
        map.panTo([
            [ opt.latitude, opt.longitude ]
        ], {
            flying: true,
            delay: 0,
            duration: 1400,
            timingFunction: 'ease-in',
            callback: function () {
                map.balloon.open([opt.latitude, opt.longitude], { content: opt.content }, { closeButton: true });
                map.setZoom(opt.zoom, {duration: 500});
            }
        });
    };

    module.openCityPlacemark = function (cityId) {
        var coordinates = placemarks[cityId].geometry.getCoordinates();
        map.panTo([
            [ coordinates[0], coordinates[1] ]
        ], {
            flying: true,
            delay: 0,
            duration: 600,
            timingFunction: 'ease-in',
            callback: function () {
                placemarks[cityId].balloon.open();
                map.setZoom(7, {duration: 500});
            }
        });
    };

    return module;
}(Bm.map || {}));

$(document).ready(function () {
    ymaps.ready(Bm.map.init);

    var $autocomplete = $('[data-autocomplete="city"]').autocomplete({
        autoFocus: true,
        minLength: 3,
        source: function (request, response) {
            $.getJSON('/get/city/', {
                city: request.term
            }, response);
        },
        select: function (event, ui) {
            $(this).attr('value', ui.item.city);
            $.ajax({
                url: '/find/city/',
                data: {
                    latitude: ui.item.lat,
                    longitude: ui.item.long,
                    nearest: true
                },
                success: function (response) {
                    console.log(response);
                    if (response.this_city) {
                        Bm.map.openCityPlacemark(response.cityId);
                    } else {
                        var balloonContent = 'В этом городе БМ еще нет :-(<br>Ближайший город<br><b>' +
                            '<a href="#" onclick="Bm.map.openCityPlacemark(' + response.cityId + '); return false;">' + response.name + '</a>' +
                            '</b><br>+7 (495) 215-06-06';
                        Bm.map.showLocation({
                            latitude: ui.item.lat,
                            longitude: ui.item.long,
                            content: balloonContent,
                            zoom: 7
                        });
                    }
                }
            });
            return false;
        }
    });
    if ($autocomplete.length) {
        $autocomplete.data('ui-autocomplete')._renderItem = function (ul, item) {
            ul.addClass('autocompleteMap').appendTo('.mapSearch_form');
            var address = item.city;
            if (item.province) {
                address += ', ' + item.province;
            }

            item.value = address;
            return $("<li>")
                .data('item.autocomplete', item)
                .append('<a>' + address + '</a>')
                .appendTo(ul);
        };
    }


});


$(function () {

    $(document.body).prepend($("<div class='bob'>"))

    $('.monitor').easySlider();

    dataIdSlider = 2;
    var countAnimation = 0;

    $('#nextBtn a').trigger('click');

    $('#nextBtn a').click(function () {
        if (dataIdSlider != 12) {
            $('#nextBtn a').hide();
            $('#man' + dataIdSlider).removeClass('active');
            setTimeout(function () {
                console.log('gdfgdfs');
                dataIdSlider++;
                $('#man' + dataIdSlider).addClass('active');
                $('#nextBtn a').show();
            }, 200);
        } else {
            return false;
        }
    });

    $('#prevBtn a').click(function () {
        if (dataIdSlider != 1) {
            $('#prevBtn a').hide();
            $('#man' + dataIdSlider).removeClass('active');
            setTimeout(function () {
                console.log('gd-fgdfs');
                dataIdSlider = dataIdSlider - 1;
                $('#man' + dataIdSlider).addClass('active');
                $('#prevBtn a').show();
            }, 200);
        } else {
            return false;
        }
    });
    function animationArrow() {
        countAnimation = 1;
        $('.mab1').css('visibility', 'visible').animate({opacity: 1.0}, 500, function () {
            $('.mab2').css('visibility', 'visible').animate({opacity: 1.0}, 500, function () {
                $('.mab3').css('visibility', 'visible').animate({opacity: 1.0}, 500, function () {
                    $('.mab4').css('visibility', 'visible').animate({opacity: 1.0}, 500, function () {
                        $('.mab5').css('visibility', 'visible').animate({opacity: 1.0}, 500, function () {
                            $('.mab6').css('visibility', 'visible').animate({opacity: 1.0}, 500);
                        });
                    });
                });
            });
        });
    }

    function animationStatistic() {
        countAnimation = 2;
        $('.slb0').css('visibility', 'visible').animate({opacity: 1.0}, 300, function () {
            $('.slb1').css('visibility', 'visible').animate({opacity: 1.0}, 500, function () {
                $('.slb2').css('visibility', 'visible').animate({opacity: 1.0}, 500, function () {
                    $('.slb3').css('visibility', 'visible').animate({opacity: 1.0}, 500, function () {
                        $('.slb4').css('visibility', 'visible').animate({opacity: 1.0}, 500, function () {
                            $('.slb5').css('visibility', 'visible').animate({opacity: 1.0}, 500);
                        });
                    });
                });
            });
        });
    }

    function animationList() {
        $('.blank').animate({'bottom': '0'}, 500);
        countAnimation = 3;
    }

    $(document).scroll(function () {
        if ($('.bob').offset().top >= $('.paper').offset().top && countAnimation == 0) {
            animationArrow();
        }
        if ($('.bob').offset().top >= $('.statisticBlock').offset().top && countAnimation == 1) {
            animationStatistic();
        }
        if ($('.bob').offset().top >= $('.block9 .borderDottedLine').offset().top && countAnimation == 2) {
            animationList();
        }
    });
});