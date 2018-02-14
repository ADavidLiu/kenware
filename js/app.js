$(document).ready(function () {

    new WOW().init();

    var $btnMenu = $(".header__btn");
    var $menu = $(".menu");
    var $menuNav = $(".menu__nav");
    var $btnCloseMenu = $(".menu__close");
    var $linkTrigger = $(".menu__list-link--trigger");

    $btnMenu.click(function () {
        $menu.addClass("menu--active");
        setTimeout(function () {
            $menuNav.addClass("menu__nav--active");
        }, 250);
    });

    $linkTrigger.parents(".menu__list-item").hover(function () {
        var $innerMenu = $(this).find(".menu__list");
        $innerMenu.slideDown("fast");
    }, function () {
        var $innerMenu = $(this).find(".menu__list");
        $innerMenu.slideUp("fast");
    });

    $btnCloseMenu.click(function () {
        $menuNav.removeClass("menu__nav--active");
        $menu.removeClass("menu--active");
    });

    var $checkItem = $(".contacto__checks-item");

    $checkItem.click(function () {
        var $this = $(this);
        $this.toggleClass("contacto__checks-item--active");
    });

    var $contact = $(".contacto");
    var $contactDropdown = $(".contacto__form-dropdown");
    var $contactDropdownItem = $(".contacto__form-dropdown__list-item");

    $contactDropdown.click(function (e) {
        e.stopPropagation();
        var $this = $(this);
        var $list = $this.siblings(".contacto__form-dropdown__list");
        $list.slideDown("fast");
        $list.addClass("contacto__form-dropdown__list--active");
    });

    $contactDropdownItem.click(function (e) {
        e.stopPropagation();
        $(this).toggleClass("contacto__form-dropdown__list-item--active");
    });

    $contact.click(function () {
        if ($contactDropdown.siblings(".contacto__form-dropdown__list").hasClass("contacto__form-dropdown__list--active")) {
            $contactDropdown.siblings(".contacto__form-dropdown__list").removeClass("contacto__form-dropdown__list--active");
            $contactDropdown.siblings(".contacto__form-dropdown__list").slideUp("fast");
        }
    });

    if ($(".video").length > 0) {
        $(".open-video").click(function (e) {
            e.preventDefault();
            var url = $(this).attr("data-video");
            $(".video").find("iframe").attr("src", url + "?enablejsapi=1&version=3&playerapiid=ytplayer");
            $(".video").addClass("video--active");
        });
        $(".video__content").click(function () {
            $(".video").removeClass("video--active");
            $(".video iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
        });
    }

});