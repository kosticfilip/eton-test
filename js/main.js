console.log('main');

// Init Slick slider
$('.single-item').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});


// Calculate line height for comment response
$(function(){

    var $window = $(window).on('resize', function(){
       $('.response-line').css("height", $('.comment-orig').height()+47+'px');
    }).trigger('resize'); //on page load

});


// call the fireRefreshEventOnWindow(); function to fire refresh event.
var fireRefreshEventOnWindow = function () {
     var evt = document.createEvent("HTMLEvents");
     evt.initEvent('resize', true, false);
     window.dispatchEvent(evt);
 };


// Read More - Hide the extra content initially, using JS so that if JS is disabled, no problemo:
  $('.read-more-content').addClass('hide')
  $('.read-more-show, .read-more-hide').removeClass('hide')

  // Set up the toggle effect:
  $('.read-more-show').on('click', function(e) {
    $(this).next('.read-more-content').removeClass('hide');
    $(this).addClass('hide');
    e.preventDefault();
    fireRefreshEventOnWindow();
  });

  $('.read-more-hide').on('click', function(e) {
    var p = $(this).parent('.read-more-content');
    p.addClass('hide');
    p.prev('.read-more-show').removeClass('hide'); // Hide only the preceding "Read More"
    e.preventDefault();
    fireRefreshEventOnWindow();
  });


// Vimeo & Youtube video cover
  $('.vimeo a,.youtube a').click(function (e) {
    e.preventDefault();
    var videoLink = $(this).attr('href');
    var classeV = $(this).parent();
    var PlaceV = $(this).parent();
    if ($(this).parent().hasClass('youtube')) {
        $(this).parent().wrapAll('<div class="cntVid">');
        $(PlaceV).html('<iframe frameborder="0" height="333" src="' + videoLink + '?autoplay=1&showinfo=0" title="YouTube video player" width="547"></iframe>');
    } else {
        $(this).parent().wrapAll('<div class="cntVid">');
        $(PlaceV).html('<iframe src="' + videoLink + '?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1&amp;color=ffffff" width="700" height="394" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
    }
});


// Search-box Expand
$(document).ready(function(){
          var submitIcon = $('.searchbox-icon');
          var inputBox = $('.searchbox-input');
          var searchBox = $('.searchbox');
          var isOpen = false;
          submitIcon.click(function(){
              if(isOpen == false){
                  searchBox.addClass('searchbox-open');
                  inputBox.focus();
                  isOpen = true;
              } else {
                  searchBox.removeClass('searchbox-open');
                  inputBox.focusout();
                  isOpen = false;
              }
          });
           submitIcon.mouseup(function(){
                  return false;
              });
          searchBox.mouseup(function(){
                  return false;
              });
          $(document).mouseup(function(){
                  if(isOpen == true){
                      $('.searchbox-icon').css('display','block');
                      submitIcon.click();
                  }
              });
      });
          function buttonUp(){
              var inputVal = $('.searchbox-input').val();
              inputVal = $.trim(inputVal).length;
              if( inputVal !== 0){
                  $('.searchbox-icon').css('display','none');
              } else {
                  $('.searchbox-input').val('');
                  $('.searchbox-icon').css('display','block');
              }
          }
