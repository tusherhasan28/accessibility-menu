jQuery(function($){
    /**
     * Show and hide Accessibility
     */
    $(document).on('click', '#as-main', function(){
        $('#as-container').show();
    });
    $(document).on('click', '#as-cross', function(){
        $('#as-container').hide();
    });

    /**
     * Click Single Item
     */
    $(document).on('click', '.as-single-item', function(){
        $(this).toggleClass('active');
    });

    $(document).on('click', '.hightlight-links', function(){
        $('a').css({"background-color": "black", "color": "yellow"});
    });
});