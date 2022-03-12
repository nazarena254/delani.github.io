
// When Html document is loaded then will jQuery function be available/executed.
$(document).ready(function(){
    // up on clicking design image, the image will slide down in 1.5 seconds and hide itself in 1 second,
    // then the design paragraph will show.
        $("#design-image").click(function(){
          $("#design-image").slideDown('1500').hide('1000');
          $("#design").show('1500');
        });
    // up on clicking design paragraph, the paragraph will slide up in 1.5 seconds,
    // then the design image will slide down.
        $("#design").click(function(){
          $("#design").slideUp('1500');
          $("#design-image").slideDown('1500');
        });
      });
    
    $(document).ready(function(){    
        $("#development-image").click(function(){
          $("#development-image").slideDown('1500').hide('1000');
          $("#development").show('1500');
        });
        $("#development").click(function(){
          $("#development").slideUp('1500');
          $("#development-image").slideDown('1500');
        });
      });
      
      $(document).ready(function(){
        $("#product-image").click(function(){
          $("#product-image").slideDown('1500').hide('1000');
          $("#product").show('1500');
        });
        $("#product").click(function(){
          $("#product").slideUp('1500');
          $("#product-image").slideDown('1500');
        });
      })