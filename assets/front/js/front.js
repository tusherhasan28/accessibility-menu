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

        var body = $('body');

        var isContrasted = body.hasClass('contrasted');

        if (isContrasted) {
            body.css({"background-color": ""}).removeClass('contrasted');
            $("p, h1, h2, h3, h4, h5, h6, span, div").css('color', '');
        } else {
            body.css({"background-color": "black"}).addClass('contrasted');
            $("p, h1, h2, h3, h4, h5, h6, span, div").css('color', 'blue');
        }
    });
    $(document).on('click', '.hightlight-links', function(){

        var links = $('a');

        var isHighlighted = links.hasClass('highlighted');

        if (isHighlighted) {
            links.css({"background-color": "", "color": ""}).removeClass('highlighted');
        } else {
            links.css({"background-color": "black", "color": "yellow"}).addClass('highlighted');
        }
    });

    var isIncreased = false;
    $(document).on('click', '.bigger-text', function(){

        if (isIncreased) {
            // If font size is increased, decrease it by dividing by 2
            $("body, *").css("font-size", "inherit");
          } else {
            // If font size is not increased, increase it by multiplying by 2
            $("body, *").css("font-size", function(index, currentSize) {
              return parseFloat(currentSize) * 2 + "px";
            });
        }
    });
    isIncreased = !isIncreased; 
});
