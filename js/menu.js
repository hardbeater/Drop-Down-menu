$(document).ready(function(){

  $('#navmenu li').mouseenter(function(){
  var id=  $(this).find('ul').attr('id');
    $('#'+id+' '+'li').each(function(i){
      setTimeout(function(){
      $('#'+id+' '+'li').eq(i).css({
        'transform':'scale(1)translateY(0px)',
        'opacity':'1'
      });
    },100*(i+1));
  });
});
$('#navmenu li').mouseleave(function(){
var id=  $(this).find('ul').attr('id');

    $('#'+id+' '+'li').css({
      'transform':'scale(0.3)translateY(-50px)',
      'opacity':'0'

    });
});


});
