$( document ).ready(function() {
    $(".phone").mask("0(000)-000-00-00");


    /*Карусель*/
    $(".owl-carousel").owlCarousel({
        loop: true,
        items: 1,
        pagination : true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        animateOut: 'fadeOut'
    });

    /*Летающая кнопка*/ 
    $(window).scroll(function() {
      if ($(this).scrollTop() > 200 && $(this).scrollTop() < $("#contacts").position().top  ) {
        $('.scrollcall').fadeIn();
      }
      else {
        $('.scrollcall').fadeOut();
      }

    });

    /*animations*/
    function goToAnimate(argument, speed) {
        $("html, body").animate({
            scrollTop: $(argument).offset().top
        }, speed);
    }
    /* Скрытие меню и плавное перемещение по странице */
    $('span.nav-link').on('click', function(){
        $('.navbar-toggler').click();

        switch ($('span.nav-link').index(this)) {
            case 0:
                goToAnimate("#index", 900);
                break;
            case 1:
                goToAnimate("#portfolio", 900);
                break;
            case 2:
                goToAnimate("#build", 900);
                break;
            case 3:
                goToAnimate("#contacts", 900);
                break;
            default:
                    
                break;
            }
    });

    var base, box, roof, facade;

    /* Выбор компонентов дома */
    $( ".mbtn-test .mbtn" ).click(function() {
        goToAnimate("#base", 1500);
        $(this).addClass('hide');
        $(".prepare").css("padding-bottom", "80px");
        var classarr = [".base", ".box", ".roof", ".facade" ];
        var hide = $(".hide");
        $.each(classarr, function (index, value) {
            $(value).find(hide).removeClass("hide");
        });

        var $elem = $(".object");
        var $img_elem = $(".object > img");
        $img_elem.css("border-radius", "100%");
        var maxSize = Math.max($elem.width(), $elem.height());

        if (maxSize > 100) {
                maxSize = 90; 
        }
        $elem.width(maxSize).height(maxSize);
        $img_elem.width(maxSize-15).height(maxSize-15);


            $(".base .pick > .object").on("click", function(){
                base = $(this).parent().find("span").text();
                $(".base .object").each(function(i){
                    $(".base .clicked").removeClass("clicked");
                });
                $(this).addClass("clicked");
            });

            $(".box .pick > .object").on("click", function(){
                box = $(this).parent().find("span").text();
                $(".box .object").each(function(i){
                    $(".box .clicked").removeClass("clicked");
                });
                $(this).addClass("clicked");
            });

            $(".roof .pick > .object").on("click", function(){
                roof = $(this).parent().find("span").text();
                $(".roof .object").each(function(i){
                    $(".roof .clicked").removeClass("clicked");
                });
                $(this).addClass("clicked");
            });
            
            $( ".row > .card-btn" ).click(function() {
                window.open("price.html");
            });

            $(".facade .pick > .object").on("click", function(){
                facade = $(this).parent().find("span").text();
                $(".facade .object").each(function(i){
                    $(".facade .clicked").removeClass("clicked");
                });
                $(this).addClass("clicked");
            });


        $(".ready").find("h2").text("Оформить заявку");

    });
    /* Диалоговое окно */
    $(".rule").on("click", function(){
        $("body").addClass("blocked");
        $("#dialog").removeClass("hide");
        $("#dialog").fadeIn(); //плавное появление блока
    });

    $(".close-dialog, #close, #dialog").on("click", function(){
        $("body").removeClass("blocked");
        $("#dialog").fadeOut(); //плавное исчезание блока
        $("#dialog").addClass("hide");
    });


    /* Main E-mail Ajax Send */
    $("form.callorder").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            
            $(th).find(".success").addClass("active")
                                .css("display", "flex")
                                .hide()
                                .fadeIn();

            setTimeout(function() {
                // Done Functions
                $(th).find(".success").removeClass("active").fadeOut();
                th.trigger("reset");
            }, 3000);
        }).fail(function() {
            alert("Произошла ошибка! Повторите попытку или свяжитесь с нами. \n0(000)-000-00-00");
            th.trigger("reset");   
        });
        return false;
    });

    $("form.makeorder").submit(function() { //Change
        var th = $(this);
        if ($(".ready").find("h2").text() == "Оформить заявку") {
            var moredata = {
            "Фундамент: ": base, 
            "Коробка: ": box,
            "Крыша: ": roof,
            "Фасад: ": facade
            };

            $.ajax({
                type: "POST",
                url: "mail.php", 
                data: th.serialize()
                }).done(function() {
                
                $(th).find(".success").addClass("active")
                                    .css("display", "flex")
                                    .hide()
                                    .fadeIn();

                setTimeout(function() {
                    $(th).find(".success").removeClass("active").fadeOut();
                    th.trigger("reset");
                    var classarr = [".base", ".box", ".roof", ".facade" ];
                    var hide = $(".hide");
                    $.each(classarr, function (index, value) {
                    $(value).addClass("hide");
                }, 3000);
                }).fail(function() {
                alert("Произошла ошибка! Повторите попытку или свяжитесь с нами. \n0(000)-000-00-00");
                th.trigger("reset");   
                });
                return false;
            });

        } else {
            $.ajax({
            type: "POST",
            url: "mail.php",
            data: th.serialize()
            }).done(function() {
            
            $(th).find(".success").addClass("active")
                                .css("display", "flex")
                                .hide()
                                .fadeIn();

            setTimeout(function() {
                alert("Все Ок!");
                $(th).find(".success").removeClass("active").fadeOut();
                th.trigger("reset");
                
            }).fail(function() {
                alert("Произошла ошибка! Повторите попытку или свяжитесь с нами. \n0(000)-000-00-00");
                th.trigger("reset");   
            });
                return false;
            });
        }
        
    }); /*$("form.makeorder").submit*/

}); /*$( document ).ready*/
