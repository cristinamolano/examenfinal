  /*----jQuery-----*/
  //DOM cargado
  $(document).ready(function() {
    //Logo con animacion suave, clase logo pulse
    setInterval(function() {
      $('.logo img').toggleClass('logo-pulse');
    }, 2000);

    // efecto de destacar en pagina QUIENES SOMOS de la ficha de cada trabajador
    $('.restaurante').hover(function() {
      $(this).css({ opacity: 1, transform: 'scale(1.1)' });
    }, function() {
      $(this).css({ opacity: 0.8, transform: 'scale(1)' });
    });

    //Boton de leer mas de las blog para expandir el texto
    $('.leer-mas').click(function() {
      var contenido = $(this).prev();
      contenido.toggleClass('expandir');
      $(this).text(contenido.hasClass('expandir') ? 'Leer menos' : 'Leer más');
    });



    // Efecto tabla carta
    //Por cada celda si el raton está encima se añade la clase highlight, sino se elimina. 
    $('.carta-tabla td').mouseover(function() {
      $(this).addClass('highlight');
    });
  
    $('.carta-tabla td').mouseout(function() {
      $(this).removeClass('highlight');
    });


/*------SLIDER--------*/
//Se cambia el slider cada 10 segundos automaticamengte
    var slideWidth = $('.slide').width();
    var slideCount = $('.slide').length;
    var slideIndex = 0;

    $('.slides').css('width', slideWidth * slideCount);

    setInterval(function() {
      if (slideIndex < slideCount - 1) {
        slideIndex++;
      } else {
        slideIndex = 0;
      }
      $('.slides').css('transform', 'translateX(' + (-slideWidth * slideIndex) + 'px)');
    }, 10000);

    //MENU MOBILE
    $('.menu-btn').click(function() {
      $(this).toggleClass('open');
      $('#menuMobile').slideToggle();
    });

    //TOOLTIPS para explicar cada efecto, recoge los elementos clase tooltip_elemento, calcula posicion horizontal del raton, obtiene texto, obtiebe el atributo toolip, lo agrega al tooltip correspondiente y establece la posicion segun lo antes calculado.
    $(".tooltip_elemento").mouseenter(function (e) {             
      var posMouse = e.pageX - this.offsetLeft; 
      var textoTooltip = $(this).attr("title"); 
      var numTooltip = $(this).attr("tooltip"); 
                
      if (textoTooltip) {
          $(this).append('<div class="tooltip tooltip'+numTooltip+'">' + textoTooltip + '</div>');
          $("a > div.tooltip"+numTooltip).css("left", "" + posMouse - 150 + "px");
          $("a > div.tooltip"+numTooltip).fadeIn(300);
      }
  });
  $(".tooltip_elemento").mouseleave(function () { 
      var numTooltip = $(this).attr("tooltip");             
      $("a > div.tooltip"+numTooltip).fadeOut(300).delay(300).queue(function () {
          $(this).remove();
          $(this).dequeue();
      });
  })
    //Al pulsar el boton goToTopButton te lleva arriba de la pagina
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('#goToTopButton').fadeIn();
      } else {
        $('#goToTopButton').fadeOut();
      }
    });
    
    $('#goToTopButton').click(function() {
      $('html, body').animate({scrollTop : 0}, 800);
      return false;
    });
  }); 
