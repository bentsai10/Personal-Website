$(document).ready(function(){
    var i = 0;
    var txt = "Benjamin Tsai";
    var speed = 150;
    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("fade_name").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
    $('#fade_titles').slideDown(3000);
    $(window).scroll(function(){
        $('.fadeinleft').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-left':'0px'},1000);
            }
        });
        $('.fade_inward').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},1000);
            }
        });
    });
    $('.contact_link').hover(
        function(){
            var icon_type = $(this).attr('id');
            $( this ).append( $( "<span>" + icon_type +  "</span>" ) );
        }, function() {
            $(this).find( "span" ).last().remove();
        });
})