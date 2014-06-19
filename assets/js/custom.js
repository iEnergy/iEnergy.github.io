$(document).ready(function(){
   
    $("#lang-en").click(function(e){
        e.preventDefault();
        //get window location
        var url = $(location).attr('href');
        url = url.replace('ita', 'eng');
        window.location = url;
    });
    
    $("#lang-it").click(function(e){
        e.preventDefault();
        //get window location
        var url = $(location).attr('href');
        url = url.replace('eng', 'ita');
        window.location = url;
    });
});





