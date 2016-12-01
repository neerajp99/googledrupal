$(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var a = $(this.hash);
                if (a = a.length ? a : $("[name=" + this.hash.slice(1) + "]"), a.length) return $("html, body").animate({ scrollTop: a.offset().top }, 1e3), !1
            }
        })

    }),


     




! function(t) {
    "use strict";
    t("a.page-scroll").bind("click", function(a) {
        var o = t(this);
        t("html, body").stop().animate({ scrollTop: t(o.attr("href")).offset().top - 50 }, 1250, "easeInOutExpo"), a.preventDefault()
    }), t("body").scrollspy({ target: ".navbar-fixed-top", offset: 100 }), t(".navbar-collapse ul li a").click(function() { t(".navbar-toggle:visible").click() }), t("#mainNav").affix({ offset: { top: 50 } })
}(jQuery);
