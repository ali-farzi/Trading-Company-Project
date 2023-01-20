$('body').scrollspy({target:'#nav-scroll'});

$("#nav-scroll a").on('click', function(e){
    if(this.hash !==""){
        e.preventDefault();

        const hash = this.hash;

        $('html , body').animate({
            screenTop:$(hash).offset().top
        },900, function(){
            window.location.hash = hash;
        })
    }
})