$(function(){
    $('.btn-primary').click(function(){
        $('.card-1').fadeToggle(7000)
        $('.card-2').fadeToggle(5000)
        $('.card-3').fadeToggle(3000)
    });



    //BUSCA OS CARDS PELO ÍNDICE DELES

//$(function(){
//    $('.btn-primary').click(function(){
//        $('.card:eq(2)').fadeToggle(6000)
//        $('.card:eq(0)').fadeToggle(3000)
//        $('.card:eq(1)').fadeToggle(1000)
//    });
//});


    $('.btn-secundary').click(function(){
        $('.card-1').after($('.card-4').fadeIn(5000))
        $('.card-2').after($('.card-5').fadeIn(7000))
        $('.card-3').after($('.card-6').fadeIn(9000))
    });

    $('h5').hover(function(){
        $(this).css("color", "yellow");
        }, function(){
            $(this).css("color", "black");
        }); 
});




