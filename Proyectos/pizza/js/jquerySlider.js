var slides = 0;
$('#slider img').each(function () {
    slides++;
});
var active = 1;
var time =  setInterval(change, 3000);
/* Y AQUI PONLE QUE A CADA CAMBIO HAGA UN .WRAPPER -WEBKIT-TRANSFORM:TRANSLATEX(-100%)
Y VE GUARDANDO CUANTO HACES PARSA QUE CUANDO LLEGUE A LA ULTIMA LO REGRESES A LA PRIMERA
*/
function change() {
    if(active<=slides){
        $('#slider img').removeClass('active');
        $('#slider img:nth-child(' + active + ')').addClass('active');
        active++;   
    }
    else{
        active=1;
        change();   
    }
}