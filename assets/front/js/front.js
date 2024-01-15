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
    $(document).on('click', '.contrast', function(){

        var body = $("body *").not(".as-container");

        var isContrasted = body.hasClass('contrasted');

        if (isContrasted) {
            body.css({"background-color": "", "color": ""}).removeClass('contrasted');
        } else {
            body.css({"background-color": "black", "color": "blue"}).addClass('contrasted');
        }
    });
    $(document).on('click', '.hightlight-links', function(){

        var links = $('body:not(.as-container) a');

        var isHighlighted = links.hasClass('highlighted');

        if (isHighlighted) {
            links.css({"background-color": "", "color": ""}).removeClass('highlighted');
        } else {
            links.css({"background-color": "black", "color": "yellow"}).addClass('highlighted');
        }
    });

    // var isIncreased = false;
    // $(document).on('click', '.bigger-text', function(){

    //     if (isIncreased) {
    //         // If font size is increased, decrease it by dividing by 2
    //         $("body, *").css("font-size", "inherit");
    //       } else {
    //         // If font size is not increased, increase it by multiplying by 2
    //         $("body, *").css("font-size", function(index, currentSize) {
    //           return parseFloat(currentSize) * 2 + "px";
    //         });
    //     }
    // });
    // isIncreased = !isIncreased; 

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
