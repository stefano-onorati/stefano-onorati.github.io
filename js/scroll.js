  $(function() {
    $('a[href="#about"]').click(function() {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
     $('html, body').animate({
            scrollTop: target.offset().top
          }, 800);
          return false;
    });
  });
  
  $(function() {
    $('a[href="#portfolio"]').click(function() {
     var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
     $('html, body').animate({
            scrollTop: target.offset().top
          }, 800);
          return false;
    });
  });
  
  $(function() {
    $('a[href="#contact"]').click(function() {
     var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
     $('html, body').animate({
            scrollTop: target.offset().top
          }, 800);
          return false;
    });
  });
  
  $(function() {
    $('a[href="#page-top"]').click(function() {
     var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
     $('html, body').animate({
            scrollTop: target.offset().top
          }, 800);
          return false;
    });
  });