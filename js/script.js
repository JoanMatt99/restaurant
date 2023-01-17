$(function(){
    $("#navtoggle").blur(function(event){
        var screenwidth = window.innerWidth;
        if (screenwidth<992){
            $("#navbarNavAltMarkup").collapse('hide');
        }
    });
});