$("document").ready(function(){
    $('h1').bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    
    $('h1').bind('click', mouseClick);
    
    $('.siblings').css('background-color', 'orange');
    
    $('.background').css('background-color', 'black');
    
    $('p:nth-child(1)').css('background-color', 'pink');
    
    $('p:last').css('color', 'red');
    
    $('p:gt(0)').css('border-style', 'solid');
    
});

function mouseOverMe(){
    $('h1').html("Bruh");
}

function mouseOutMe(){
    $('h1').html("You");
}

function mouseClick(){
    $('p').html('Wazzup');
}