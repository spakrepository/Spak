(function($) {
  "use strict";

  var custom_url = window.location.href;  
  var get_last_index = (custom_url.lastIndexOf('/') + 1);
  var get_current_file = custom_url.substr(get_last_index);
  console.log(get_current_file);

  if(get_current_file == 'index.php' || get_current_file == '')
  {
    $('header .navbar-brand > img').attr({'src':'images/spak-brand-marketing-company-mumbai-logo-blue.png'});
  }


  $('.work-strategy > li > a').on('click', function(e){
    
      // var $this = $(this);
      // var $elem = $this[0].hash;
      // console.log($elem);
      
      // $this.addClass('work-strategy-active');
      // $this.parent('li').find('a').removeClass('work-strategy-active');
      // console.log($this);
      
      // $($elem).siblings('div').slideUp();
      
  });
   
    
})(jQuery);
