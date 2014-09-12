(function () {
    smoothScroll.init({
        speed: 1000,
        easing: 'easeInOutQuart',
        updateURL: true,
        offset: 0,
        callbackBefore: function (toggle, anchor) {
            $('[data-scroll]').removeClass('active');
            $(toggle).addClass('active');
        },
        callbackAfter: function (toggle, anchor) {

        }
    });
})();
