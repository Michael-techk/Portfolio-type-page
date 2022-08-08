function checkElementLocation() {
    var $window = $(window);
    var bottom_of_window = $window.scrollTop() + $window.height();
  
    $('.fade').each(function(i) {
      var $that = $(this);
      var bottom_of_object = $that.position().top + $that.outerHeight();
      if (bottom_of_window > bottom_of_object - 200) {
        $(this).addClass('fade-in');
      }
    });
  }
  checkElementLocation();
  
  $(window).on('scroll', function() {
    checkElementLocation();
  });

  