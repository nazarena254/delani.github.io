
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
      });
      
      $(document).ready(function(){
        // up on moving the mouse over portfolio image,
        // then will the name of the project on grey background color show
        $("#work1").mouseover(function(){
          $("#overlay").show();
        })
        // up on moving the mouse out of portfolio image,
        // then will the name of the project on grey background color hide
        .mouseout(function(){
          $("#overlay").hide();
        });
        $("#work2").mouseover(function(){
          $("#overlay2").show();
        }).mouseout(function(){
          $("#overlay2").hide();
        });
        $("#work3").mouseover(function(){
          $("#overlay3").show();
        }).mouseout(function(){
          $("#overlay3").hide();
        });
        $("#work4").mouseover(function(){
          $("#overlay4").show();
        }).mouseout(function(){
          $("#overlay4").hide();
        });
        $("#work5").mouseover(function(){
          $("#overlay5").show();
        }).mouseout(function(){
          $("#overlay5").hide();
        });
        $("#work6").mouseover(function(){
          $("#overlay6").show();
        }).mouseout(function(){
          $("#overlay6").hide();
        });
        $("#work7").mouseover(function(){
          $("#overlay7").show();
        }).mouseout(function(){
          $("#overlay7").hide();
        });
        $("#work8").mouseover(function(){
          $("#overlay8").show();
        }).mouseout(function(){
          $("#overlay8").hide();
        });
      });
      
    
      $(document).ready(function(){
        $("form#form34A").submit(function(event){
          event.preventDefault();
          var name = $("input#username").val();
          var email = $("input#useremail").val();
          var message = $("textarea#comment").val();
          if ($("input#username").val() && $("input#useremail").val()){
            // document.querySelector(".btn").addEventListener('click', function(){
                Swal.fire("Hey "+name + ", we got your message. Thank you.");
            //});
    
            // alert ("Hey "+name + "!!! we got your message... Thank you.");
    
            // document.getElementById("feedback").innerHTML = 
            // "Hey "+name + "n\!!! we got your message... Thank you."
          }
          else {
            alert("Please enter your name and email!");
          }      
        });  
      });