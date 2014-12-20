(function () {
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
