jQuery(function ($) {
  console.log(LOCALIZED_ARR);
  /**
   * Show and hide Accessibility
   */
  $(document).on('click', '#as-main', function () {
    $('#as-container').show();
  });
  $(document).on('click', '#as-cross', function () {
    $('#as-container').hide();
  });

  /**
   * Adding Control Bar / below button
   */

  $('.as-columns').css('display', 'none');

  function handleItemClick(element, className) {
    var columns = element.find('.as-columns');
    var activeSpan = columns.find('.as-c-active');
    var count = 1;
    
    if (className === 'contrast') {
      var img = element.find('img');
      if (img.length > 0) {
        img.attr('src', LOCALIZED_ARR.iconSrc.contrast ); 
      }
    }

    if (activeSpan.length > 0) {
      var nextSpan = activeSpan.next('.as-column');
      if (nextSpan.length > 0) {
        count++;
        activeSpan.removeClass('as-c-active');
        nextSpan.addClass('as-c-active');
        console.log(`tab ${count} is clicked`);

        if (className === 'contrast') {
          var img = element.find('img');
          if (img.length > 0) {
            img.attr('src', LOCALIZED_ARR.iconSrc.light_contrast ); 
          }
        }

      } else {
        columns.find('.as-column').removeClass('as-c-active');
        columns.css('display', 'none');
        element.removeClass('active');
      }
    } else {
      columns.find('.as-column:first').addClass('as-c-active');
      element.addClass('active');
      columns.css('display', '');
      console.log('tab 1 is clicked');

      if (className === 'contrast') {
        var img = element.find('img');
        if (img.length > 0) {
          img.attr('src', LOCALIZED_ARR.iconSrc.dark_contrast ); 
        }
      }
    }
  }

  /**
   * kicking off the function
   */

  $('.as-single-item.contrast').on('click', function () {
    handleItemClick($(this), 'contrast');
  });

  $('.as-single-item.biggerText').on('click', function () {
    handleItemClick($(this), 'biggerText');
  });

  $('.as-single-item.textAlign').on('click', function () {
    handleItemClick($(this), 'textAlign');
  });

  var columns = $('.as-column');
  var body = $('body *').not('.as-container, .as-container *, #wpadminbar *');

  $(document).on('click', '.contrast', function () {
    var constrastBody = $('body');
    var isContrasted = constrastBody.hasClass('contrasted');

    if (isContrasted) {
      body.css({ 'background-color': '', color: '' });
      constrastBody.removeClass('contrasted');
    } else {
      body.css({ 'background-color': '#000000', color: 'blue' });
      constrastBody.addClass('contrasted');
    }
  });

  //Hightlight links
  $(document).on('click', '.hightlight-links', function () {
    let links = $('a');

    let isHighlighted = links.hasClass('highlighted');

    if (isHighlighted) {
      links
        .css({ 'background-color': '', color: '' })
        .removeClass('highlighted');
    } else {
      links
        .css({ 'background-color': 'black', color: 'yellow' })
        .addClass('highlighted');
    }
  });

  //Text Spacing
  $(document).on('click', '.text-spacing', function () {
    let textSpecingBody = $('body');
    let body = $('body *').not('.as-container, .as-container *');

    let isTextSpacing = textSpecingBody.hasClass('textSpacing');

    if (isTextSpacing) {
      body.css('letter-spacing', '');
      textSpecingBody.removeClass('textSpacing');
    } else {
      body.css('letter-spacing', '3px');
      textSpecingBody.addClass('textSpacing');
    }
  });

  //Bigger Text
  $(document).on('click', '.biggerText', function () {
    let biggerTextTag = $('p , h1');
    let body = $('body *').not('.as-container, .as-container *');

    let isBiggerText = biggerTextTag.hasClass('biggerText');

    if (isBiggerText) {
      body.css('font-size', '');
      biggerTextTag.removeClass('biggerText');
    } else {
      body.css('font-size', '30px');
      biggerTextTag.addClass('biggerText');
    }
  });

  //Hide Image
  $(document).on('click', '.hideImages', function () {
    let imgTag = $('img');
    let body = $('body *').not('.as-container, .as-container *');

    let isHideImage = imgTag.hasClass('hideImages');

    if (isHideImage) {
      imgTag.css('visibility', 'visible');
      imgTag.removeClass('hideImages');
    } else {
      imgTag.css('visibility', 'hidden');
      imgTag.addClass('hideImages');
    }
  });
  // Bigger Cursor
  $(document).on('click', '.biggerCursor', function () {
    let body = $('body *').not('.as-container, .as-container *');

    let cursorBigger = body.hasClass('biggerCursor');

    if (cursorBigger) {
      body.css('cursor', 'auto');
      body.removeClass('biggerCursor');
    } else {
      body.addClass('biggerCursorCss');
      body.addClass('biggerCursor');
    }
  });

  function resetAccessibilitySettings() {
    // Reset individual settings if needed
    body.css({ 'background-color': '', color: '' });
    body.css('font-size', '');
    body.css('letter-spacing', '');
    
    // Reset the active state of .as-single-item elements
    $('.as-single-item').each(function () {
      var element = $(this);
      element.removeClass('active');
      var columns = element.find('.as-columns');
      columns.css('display', 'none');
      columns.find('.as-column').removeClass('as-c-active');
    });
  }
  
  // Reset button click event
  $(document).on('click', '.as-button button', function () {
    resetAccessibilitySettings();
  });
});
