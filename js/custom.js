$(document).ready(function(){
  $('#like-but').click(function(){
  	var bool = $(this).hasClass('btn-primary');
  	if(bool){
     $(this).removeClass('btn-primary');
     $(this).addClass('btn-default');
    }else{
  	 $(this).removeClass('btn-default');
     $(this).addClass('btn-primary');
    }
  });
});
