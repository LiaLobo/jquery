$(function () {
    $.ajax({
        type: "GET",
        url: "./resources/restaurants.xml",
        dataType: "xml",
        success: function (data) {
            $(data).find('restaurant').each(function () {
                 let html = //'<ul>' +
                    '<li class="list-group-item list-group-item-light">' + '<div class="d-flex w-100 justify-content-between">' +
                    '<h5 class="mb-1">' + $(this).attr('name') + '</h5>' + '</div>'  + '<p>' + $(this).attr('address') +
                    '</p>' + '<a href="#" target="_blank">' + $(this).attr('lat') + $(this).attr('lng') + '</a>' + '</li>' 
                    // '<li>' + $(this).find('name').text() + '' + $(this).find('address').text() + '</li>' +
                    // '<li>' + $(this).find('name').text() + '' + $(this).find('address').text() + '</li>' +
                    // '<li>' + $(this).find('name').text() + '' + $(this).find('address').text() + '</li>' +
                    // '<li>' + $(this).find('name').text() + '' + $(this).find('address').text() + '</li>' +
                    // '<li>' + $(this).find('name').text() + '' + $(this).find('address').text() + '</li>' +
                    // '<li>' + $(this).find('name').text() + '' + $(this).find('address').text() + '</li>' +
                    // '<li>' + $(this).find('name').text() + '' + $(this).find('address').text() + '</li>' +
                    // '<li>' + $(this).find('name').text() + '' + $(this).find('address').text() + '</li>' +
                    // '</ul>';

                $('ul').append(html);
            });
        },
        error: function () {
            alert('Deu um erro... Que tristeza');
        }
    })
})