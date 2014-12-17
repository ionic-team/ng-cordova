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

    var options = {
        valueNames: [ 'plugin']
    };

    var userList = new List('plugins', options);


    // left menu link highlight
    var leftMenu = $('.left-menu');
    var activeLink = leftMenu.find('[href="' + window.location.pathname + '"]');
    activeLink.parents('li').addClass("active");

    leftMenu.find('.api-section').click(function(){
        if( $(this).attr('href') == '#' ) {
            $(this).closest('.left-menu').find("li").removeClass('active');
            $(this).closest('li').toggleClass('active');
            return false;
        }
    });
})();
