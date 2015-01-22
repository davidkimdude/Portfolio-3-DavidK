$("document").ready(function(){
    $('#background').css('background-color', 'gold');
    //If mouuse is over, show the different text
    $('h1').bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    //Make the h1 clickable
    $('h1').bind('click', mouseClick);
    //Set the class siblings' background orange
    $('.siblings').css('background-color', 'orange');
    //Make the background color of nth child of the p pink
    $('p:nth-child(1)').css('background-color', 'pink');
    //Make the last p code's color red
    $('p:last').css('color', 'red');
    //gt of p's border appears
    $('p:gt(0)').css('border-style', 'solid');
    //If you click something, it will replace the text
    $('#replaceWText').bind('click', replaceWText);
    //Click and add another text
    $('#randPara').bind('click', addAPara);
    //Click certain thing and remove text
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
    //If you click last p code the texts are removed
    $('#randPara p:last').remove();
}

function addAPara(){
    //If p is added show 'Added'
    $('#randPara').append('<p>Added</p>');
}

function replaceWText(){
    //If text replaced show 'Changed'
    $('#replaceWText').text('Changed');
}

function mouseOverMe(){
    //If mouse is over h1 tag show'Bruh'
    $('h1').html("Bruh");
}

function mouseOutMe(){
    //If mouse is out of h1 tag show 'You'
    $('h1').html("You");
}

function mouseClick(){
    //If you click p tag show 'Wazzup'
    $('p').html('Wazzup');
}

function hideTheImage(){
    //If you click the button hide the logo in explode style, in 2500milliseconds
    $('#logo').hide('explode', {}, 2500);
}

function showTheImage(){
    //If you click the button show the logo in explode style, in 2500milliseconds
    $('#logo').show('explode', {}, 2500);
}

function toggleTheText(){
    //If you click the button toggle the text in 2500milliseconds
    $('h4').toggle(2500);
}

