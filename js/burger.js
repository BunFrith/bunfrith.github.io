$(document).ready(function() {
  $('.burger').click(function() {
    $('#nav').css("transform", "translateX(0%)");
  });
  $('.nav .dropdown > a').click(function(){
    location.href = this.href;
  });
});
$(document).mouseup(function (e){
  var div = $("#nav");
  if (!div.is(e.target)
      && div.has(e.target).length === 0) { 
    div.css("transform", "translateX(100%)")
  }
});