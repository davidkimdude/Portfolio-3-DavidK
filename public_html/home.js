$('document').ready(function(){
    //If you click the hidelogo it will hide the image
   $('#hideLogo').bind('click', hideTheImage);
   //If you click the showlogo it will show the image
   $('#showLogo').bind('click', showTheImage);
   //make the superHumans a accordion and makes h3 codes as a header
   $('#superHumans').accordion({header: 'h3'});
   //Make the #tabs tabs
   $('#tabs').tabs();
   //Makes the tabs draggable
   $('#tabs').draggable();
   //Makes the tabs resizble
   $('#tabs').resizable();
});
//Makes the image disappear if you change explode to other things
//the animation will be changed
function hideTheImage(){
    $('#logo').hide('explode', {}, 2500);
}
//Makes the imagge shows up
function showTheImage(){
    $('#logo').show('explode', {}, 2500);
}
//Make the flip box able to flip when the cursor hover oover it
ontouchstart="this.classList.toggle('hover')";