 $( document ).ready(function() {

    $(".phone").mask("0(000)-000-00-00");

    var $elem = $(".object");
    var $img_elem = $(".object > img");
    var maxSize = Math.max($elem.width(), $elem.height());

  
    if (maxSize > 100) {
        maxSize = 70; 
    }
    $elem.width(maxSize).height(maxSize);
    $img_elem.width(maxSize-25).height(maxSize-25);

    var design, base, box, roof;

    $(".design .pick > .object").on("click", function(){
        design = $(this).parent().find("span").text();
        console.log(design);
        $(".design .object").each(function(i){

            $(".design .clicked").removeClass("clicked");
        });
        $(this).addClass("clicked");
    });

    $(".base .pick > .object").on("click", function(){
        base = $(this).parent().find("span").text();
        console.log(base);
        $(".base .object").each(function(i){

            $(".base .clicked").removeClass("clicked");
        });
        $(this).addClass("clicked");
    });

    $(".box .pick > .object").on("click", function(){
        box = $(this).parent().find("span").text();
        console.log(box);
        $(".box .object").each(function(i){

            $(".box .clicked").removeClass("clicked");
        });
        $(this).addClass("clicked");
    });

    $(".roof .pick > .object").on("click", function(){
        roof = $(this).parent().find("span").text();
        console.log(roof);
        $(".roof .object").each(function(i){

            $(".roof .clicked").removeClass("clicked");
        });
        $(this).addClass("clicked");
    });
    
    $( ".row > .card-btn" ).click(function() {
        window.open("price.html");
    });
    
});