$(function(){


        $('#eventType').change(function(){
            let selected = $('#eventType :selected').val();
            if (selected === 'Teatro'){
                $(".teatroHide").hide();
                $(".teatroShow").show();
            } else if (selected === 'Cinema'){
                $('.cineHide').hide();
                $(".cineShow").show();
            } else if (selected === 'Debate Literário'){
                $('.debateHide').hide();
                $('.debateShow').show();
            } else if (selected === 'Dança'){
                $('.dancaHide').hide();
                $('.dancaShow').show();
            } else if (selected === 'Artes visuais e exposições'){
                $('.artesHide').hide();
                $('.artesShow').show();
            } else if (selected === 'Música') {
                $('.musicaHide').hide();
                $('.musicaShow').show();
            } else {
                $('.esconde').hide();
            }
        })


        $('#free').change(function(){

            if ($('#free').prop('checked')){
                $('.price').hide();
            } else {
                $('.price').show();
            }
        })
});