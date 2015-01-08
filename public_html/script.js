$("document").ready(function(){
    $('.siblings').css('background-color', 'orange');
    
    $('.background').css('background-color', 'black');
    
    $('p:nth-child(1)').css('background-color', 'pink');
    
    $('p:last').css('color', 'red');
    
    $('p:gt(0)').css('border-style', 'solid');
    
});
