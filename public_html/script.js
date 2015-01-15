$("document").ready(function(){
    $('#background').css('background-color', 'gold');
    
    $('h1').bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    
    $('h1').bind('click', mouseClick);
    
    $('.siblings').css('background-color', 'orange');
    
    $('p:nth-child(1)').css('background-color', 'pink');
    
    $('p:last').css('color', 'red');
    
    $('p:gt(0)').css('border-style', 'solid');
    
    $('#replaceWText').bind('click', replaceWText);
    
    $('#randPara').bind('click', addAPara);
    
    $('#removePara').bind('click', removeAPara);
    
    $('#hideLogo').bind('click', hideTheImage);
    $('#showLogo').bind('click', showTheImage);
    $('#toggleText').bind('click', toggleTheText);
    
    $('#accordion > p').hide();
    
    $('#accordion h4').click(function(){
         $(this).siblings('p:visible').slideUp('2000');
         $(this).next().animate({'height':'toggle'}, '2000', 'easeInOutExpo');
    });
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

function hideTheImage(){
    $('#logo').hide('explode', {}, 2500);
}

function showTheImage(){
    $('#logo').show('explode', {}, 2500);
}

function toggleTheText(){
    $('h4').toggle(2500);
}

