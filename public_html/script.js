$("document").ready(function(){
    $('.background').css('background-image', 'url(https://lh5.googleusercontent.com/-Bkb0UpnNyvQ/AAAAAAAAAAI/AAAAAAAAAQ8/HCV37PLtfxQ/photo.jpg)');
    
    $('h1').bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    
    $('h1').bind('click', mouseClick);
    
    $('.siblings').css('background-color', 'orange');
    
    $('p:nth-child(1)').css('background-color', 'pink');
    
    $('p:last').css('color', 'red');
    
    $('p:gt(0)').css('border-style', 'solid');
    
    $('#replaceWText').bind('click', replaceWText);
    
    $('#randPara').bind('click', addAPara);
    
    $('#removePara').bind('click', removeAPara);
});

function removeAPara(){
    $('#randPara p:last').remove();
}

function addAPara(){
    $('#randPara').append('<p>Added</p>');
}

function replaceWText(){
    $('#replaceWText').text('Changed');
}

function mouseOverMe(){
    $('h1').html("Bruh");
}

function mouseOutMe(){
    $('h1').html("You");
}

function mouseClick(){
    $('p').html('Wazzup');
}
