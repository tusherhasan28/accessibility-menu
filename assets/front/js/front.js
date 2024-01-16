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
      var links = $('a').not('.as-container, .as-container *, #wpadminbar *');
  
      var isHighlighted = links.hasClass('highlighted');
  
      if(isHighlighted){
        links.css({'background-color': '', color: ''}).removeClass('highlighted');
      }else{
        links.css({'background-color': 'black', color: 'yellow'}).addClass('highlighted');
      }
    });
  
    //Text Spacing
    $(document).on('click', '.text-spacing', function(){
      var textSpecingBody = $('body');
      var body = $('body *').not('.as-container, .as-container *, #wpadminbar *');
  
      var isTextSpacing = textSpecingBody.hasClass('textSpacing');
  
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
      var biggerTextTag = $('body');
      var body = $('body *').not('.as-container, .as-container *, #wpadminbar *');;
  
      var isBiggerText = biggerTextTag.hasClass('biggerText');
  
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
      var imgTag = $('img').not('.as-container, .as-container *, #wpadminbar *');
  
      var isHideImage = imgTag.hasClass('hideImages');
  
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

    //Line Height
    $(document).on('click', '.lineHeight', function(){
      var textSpecingBody = $('body');
      var body = $('body *').not('.as-container, .as-container *, #wpadminbar *');
  
      var isLineHeight = textSpecingBody.hasClass('LineHeight');
  
      if(isLineHeight){
        body.css('line-height', '1.3');
        textSpecingBody.removeClass('LineHeight');
      }else{
        body.css('line-height', '1.8');
        textSpecingBody.addClass('LineHeight');
      }
    });

  });