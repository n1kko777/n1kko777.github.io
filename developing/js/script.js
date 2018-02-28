$( document ).ready(function() {

    $(".phone").mask("0(000)-000-00-00");

    var $elem = $(".object");
    var $img_elem = $(".object > img");
    $img_elem.css("border-radius", "100%");
    var maxSize = Math.max($elem.width(), $elem.height());

  
    if (maxSize > 100) {
        maxSize = 90; 
    }
    $elem.width(maxSize).height(maxSize);
    $img_elem.width(maxSize-15).height(maxSize-15);

    var design, base, box, roof;

    $(".design .pick > .object").on("click", function(){
        design = $(this).parent().find("span").text();
        // console.log(design);
        $(".design .object").each(function(i){

            $(".design .clicked").removeClass("clicked");
        });
        $(this).addClass("clicked");
    });

    $(".base .pick > .object").on("click", function(){
        base = $(this).parent().find("span").text();
        // console.log(base);
        $(".base .object").each(function(i){

            $(".base .clicked").removeClass("clicked");
        });
        $(this).addClass("clicked");
    });

    $(".box .pick > .object").on("click", function(){
        box = $(this).parent().find("span").text();
        // console.log(box);
        $(".box .object").each(function(i){

            $(".box .clicked").removeClass("clicked");
        });
        $(this).addClass("clicked");
    });

    $(".roof .pick > .object").on("click", function(){
        roof = $(this).parent().find("span").text();
        // console.log(roof);
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
        // console.log(facade);
        $(".facade .object").each(function(i){

            $(".facade .clicked").removeClass("clicked");
        });
        $(this).addClass("clicked");
    });
    
    $( ".row > .card-btn" ).click(function() {
        window.open("price.html");
    });
        
    $( ".mbtn-test .mbtn" ).click(function() {
        $("html, body").animate({
            scrollTop: $("#base").offset().top
        }, 1500);
    });


    /*Диалоговое окно*/
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

        //E-mail Ajax Send
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

});