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
    $(document).on('click', '.as-single-item', function (){
      $(this).toggleClass('active');
    });
  
    /**
     * For action all menu item
     */
    //Constrast
    // $(".as-single-item.contrast").on("click", ".as-column", function () {
    //     console.log("clicked");
    //     $(".as-column").removeClass("as-c-active");
        
    //     // Add as-c-active class to the clicked span
    //     $(this).addClass("as-c-active");
    // });

    $(".as-single-item.contrast").on("click", function () {
        var $columns = $(this).find(".as-columns");
        console.log($columns);
        var $activeSpan = $columns.find(".as-c-active");
    
        if ($activeSpan.length > 0) {
            var $nextSpan = $activeSpan.next(".as-column");
            if ($nextSpan.length > 0) {
                $activeSpan.removeClass("as-c-active");
                $nextSpan.addClass("as-c-active");
            } else {
                $columns.find(".as-column").removeClass("as-c-active");
            }
        } else {
            $columns.find(".as-column:first").addClass("as-c-active");
        }
    });
    

    var columns = $(".as-column");
    var body = $('body *').not('.as-container, .as-container *, #wpadminbar *');
    $(document).on('click', '.contrast', function(){
      var constrastBody = $('body');
  
      var isContrasted = constrastBody.hasClass('contrasted');
  
      if(isContrasted){
        body.css({'background-color': '', color: ''});
        constrastBody.removeClass('contrasted');
      } else{
        body.css({'background-color': '#000000', color: 'blue'});
        constrastBody.addClass('contrasted');
      }
    });
  
    //Hightlight links
    $(document).on('click', '.hightlight-links', function(){
      let links = $('a');
  
      let isHighlighted = links.hasClass('highlighted');
  
      if(isHighlighted){
        links
          .css({'background-color': '', color: ''})
          .removeClass('highlighted');
      }else{
        links
          .css({'background-color': 'black', color: 'yellow'})
          .addClass('highlighted');
      }
    });
  
    //Text Spacing
    $(document).on('click', '.text-spacing', function(){
      let textSpecingBody = $('body');
      let body = $('body *').not('.as-container, .as-container *');
  
      let isTextSpacing = textSpecingBody.hasClass('textSpacing');
  
      if(isTextSpacing){
        body.css('letter-spacing', '');
        textSpecingBody.removeClass('textSpacing');
      }else{
        body.css('letter-spacing', '3px');
        textSpecingBody.addClass('textSpacing');
      }
    });
  
    //Bigger Text
    $(document).on('click', '.biggerText', function(){
      let biggerTextTag = $('p , h1');
      let body = $('body *').not('.as-container, .as-container *');
  
      let isBiggerText = biggerTextTag.hasClass('biggerText');
  
      if(isBiggerText){
        body.css('font-size', '');
        biggerTextTag.removeClass('biggerText');
      }else{
        body.css('font-size', '30px');
        biggerTextTag.addClass('biggerText');
      }
    });
  
    //Hide Image
    $(document).on('click', '.hideImages', function(){
      let imgTag = $('img');
      let body = $('body *').not('.as-container, .as-container *');
  
      let isHideImage = imgTag.hasClass('hideImages');
  
      if(isHideImage){
        imgTag.css('visibility', 'visible');
        imgTag.removeClass('hideImages');
      }else{
        imgTag.css('visibility', 'hidden');
        imgTag.addClass('hideImages');
      }
    });
    // Bigger Cursor
    $(document).on('click', '.biggerCursor', function(){
      let body = $('body *').not('.as-container, .as-container *');
  
      let cursorBigger = body.hasClass('biggerCursor');
  
      if(cursorBigger){
        body.css('cursor', 'auto');
        body.removeClass('biggerCursor');
      }else{
        body.addClass('biggerCursorCss');
        body.addClass('biggerCursor');
      }
    });
  });