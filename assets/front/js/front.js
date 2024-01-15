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

    
    /**
     * For action all menu item
     */
    //Constrast
    $(document).on('click', '.contrast', function(){

        var constrastBody = $('body');
        var body = $('body *').not('.as-container, .as-container *');

        var isContrasted = constrastBody.hasClass('contrasted');

        if (isContrasted) { 
            body.css({"background-color": "", "color": ""});
            constrastBody.removeClass('contrasted');
        } else {
            body.css({"background-color": "black", "color": "blue"});
            constrastBody.addClass('contrasted');
        }
    });

    //Hightlight links
    $(document).on('click', '.hightlight-links', function(){

        var links = $('a');

        var isHighlighted = links.hasClass('highlighted');

        if (isHighlighted) {
            links.css({"background-color": "", "color": ""}).removeClass('highlighted');
        } else {
            links.css({"background-color": "black", "color": "yellow"}).addClass('highlighted');
        }
    });

    //Text Spacing
    $(document).on('click', '.text-spacing', function(){

        textSpecingBody = $('body');
        var body = $('body *').not('.as-container, .as-container *');

        var isTextSpacing = textSpecingBody.hasClass('textSpacing');

        if (isTextSpacing) {
            body.css('letter-spacing', '');
            textSpecingBody.removeClass('textSpacing');
        } else {
            body.css('letter-spacing', '3px');
            textSpecingBody.addClass('textSpacing');
        }
        
    });
});
