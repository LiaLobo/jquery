$(document).ready(function(){
    
    $('input').filter('[type=text]').parent().addClass('alert alert-info');


    $('li').click(function(){
        $(this).removeClass('list-group-item-info');
        $(this).addClass('list-group-item-info');

        $(this).siblings().removeClass('list-group-item-dark');
        $(this).siblings().addClass('list-group-item-dark');
    });

});