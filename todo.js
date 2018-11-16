$(function() {
    $("#add").on("click", function() {
      
      
      var val = $("input").val();
      if (val !== '') {
      var elem = $("<ul></ul>").text(val);
      $(elem).append("<button class='rem'>X</button>" );
      $("#list").append(elem);
      $("input").val("");
      $(document).on("click", ".rem", function(){
      $(this).parent().toggleClass("strike")
        console.log("cek");
      });
    }
    var newDate = new Date();
newDate.setDate(newDate.getDate() {   
$('#Date').html((newDate.getMonth() + '/' + newDate.getDate() + '/' + newDate.getFullYear())
    
    });
  })
