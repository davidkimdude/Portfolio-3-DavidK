$('document').ready(function(){
   $('#hideLogo').bind('click', hideTheImage);
   
   $('#showLogo').bind('click', showTheImage);
   
   $('#superHumans').accordion({header: 'h3'});
   
   $('#tabs').tabs();
   
   $('#tabs').draggable();
   
   $('#tabs').resizable();
});

function hideTheImage(){
    $('#logo').hide('explode', {}, 2500);
}

function showTheImage(){
    $('#logo').show('explode', {}, 2500);
}

ontouchstart="this.classList.toggle('hover')";